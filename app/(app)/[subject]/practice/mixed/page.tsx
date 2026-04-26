import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "@phosphor-icons/react/ssr";
import UpgradeRequired from "@/components/app/UpgradeRequired";
import { getCurrentBillingPlan } from "@/lib/billing/current-plan";
import { canAccessNoteId } from "@/lib/entitlements";
import { getSubtopicPracticePack } from "@/lib/practice/get-practice";
import type { DrillQuestion } from "@/lib/practice/types";
import { resolveNoteMeta } from "@/lib/notes/resolve-meta";
import ns from "../../notes/notes.module.css";
import s from "../practice.module.css";
import MixedDrillArticle from "./MixedDrillArticle";

const MAX_MIXED_SETS = 20;

export default async function MixedPracticePage({
  params,
  searchParams,
}: {
  params: Promise<{ subject: string }>;
  searchParams: Promise<{ sets?: string }>;
}) {
  const { subject } = await params;
  const subj = subject.toLowerCase();
  const { sets } = await searchParams;
  const ids = parseMixedSetIds(sets);

  if (ids.length === 0) notFound();
  if (ids.length > MAX_MIXED_SETS) notFound();

  const plan = await getCurrentBillingPlan();
  const hasLockedSet = ids.some((id) => !canAccessNoteId(plan, id));

  if (hasLockedSet) {
    return (
      <div className={s.wrap}>
        <header className={s.header}>
          <div className={ns.titleGroup}>
            <Link href={`/${subj}/practice`} className={ns.back} aria-label="Back to practice outline" prefetch>
              <ArrowLeft className={ns.backIcon} size={20} weight="regular" aria-hidden />
            </Link>
            <h1 className={s.title}>Practice</h1>
          </div>
          <p className={s.meta}>Mixed drill · {ids.length} subtopics selected</p>
          <p className={s.topic}>One or more selected sets require the full plan.</p>
        </header>
        <UpgradeRequired
          title="Upgrade to mix these drills"
          message="Free plans can create mixed drills from Topics 1-3 only. Full access unlocks mixed practice across the entire syllabus."
        />
      </div>
    );
  }

  const items: Array<{
    noteId: string;
    topicTitle: string;
    subtopicTitle: string;
    subtopicCode: string;
    question: DrillQuestion;
  }> = [];

  for (const id of ids) {
    const pack = await getSubtopicPracticePack(subj, id);
    const meta = await resolveNoteMeta(subj, id);
    if (!pack || !meta) continue;
    for (const question of pack.drills) {
      items.push({
        noteId: id,
        topicTitle: meta.topicTitle,
        subtopicTitle: meta.subtopicTitle,
        subtopicCode: meta.subtopicCode,
        question,
      });
    }
  }

  if (items.length === 0) notFound();

  return (
    <div className={s.wrap}>
      <header className={s.header}>
        <div className={ns.titleGroup}>
          <Link href={`/${subj}/practice`} className={ns.back} aria-label="Back to practice outline" prefetch>
            <ArrowLeft className={ns.backIcon} size={20} weight="regular" aria-hidden />
          </Link>
          <h1 className={s.title}>Practice</h1>
        </div>
        <p className={s.meta}>Mixed drill · {ids.length} subtopics selected</p>
        <p className={s.topic}>10 questions are included from each selected subtopic.</p>
      </header>
      <MixedDrillArticle
        items={items}
        subject={subj}
        selectedNoteIds={ids}
        canArchiveMistakes
      />
    </div>
  );
}

function parseMixedSetIds(value: string | undefined): string[] {
  const seen = new Set<string>();
  for (const raw of (value ?? "").split(",")) {
    const id = raw.trim();
    if (!/^t\d+-\d+$/i.test(id)) continue;
    seen.add(id.toLowerCase());
    if (seen.size > MAX_MIXED_SETS) break;
  }
  return Array.from(seen);
}
