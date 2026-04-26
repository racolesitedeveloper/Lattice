import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "@phosphor-icons/react/ssr";
import UpgradeRequired from "@/components/app/UpgradeRequired";
import { getCurrentBillingPlan } from "@/lib/billing/current-plan";
import { canAccessTopic } from "@/lib/entitlements";
import { getSubtopicPracticePack } from "@/lib/practice/get-practice";
import { resolveNoteMeta } from "@/lib/notes/resolve-meta";
import ns from "../../notes/notes.module.css";
import s from "../practice.module.css";
import PracticeArticle from "./PracticeArticle";

export default async function PracticeDetailPage({
  params,
}: {
  params: Promise<{ subject: string; noteId: string }>;
}) {
  const { subject, noteId } = await params;
  const subj = subject.toLowerCase();
  const [meta, plan] = await Promise.all([resolveNoteMeta(subj, noteId), getCurrentBillingPlan()]);
  if (!meta) notFound();
  const canAccess = canAccessTopic(plan, meta.topicNumber);

  const pack = await getSubtopicPracticePack(subj, noteId);
  if (!pack) {
    return (
      <div className={s.wrap}>
        <header className={s.header}>
          <p className={s.meta}>
            {meta.syllabusCode} · Topic {meta.topicNumber} · {meta.subtopicCode}
          </p>
          <h1 className={s.title}>{meta.subtopicTitle}</h1>
          <p className={s.topic}>{meta.topicTitle}</p>
        </header>
        <p className={s.line}>Practice content for this subtopic is not published yet.</p>
      </div>
    );
  }

  return (
    <div className={s.wrap}>
      <header className={s.header}>
        <div className={ns.titleGroup}>
          <Link href={`/${subj}/practice`} className={ns.back} aria-label="Back to practice outline" prefetch>
            <ArrowLeft className={ns.backIcon} size={20} weight="regular" aria-hidden />
          </Link>
          <h1 className={s.title}>Practice</h1>
        </div>
        <p className={s.meta}>
          {meta.syllabusCode} · Topic {meta.topicNumber} · {meta.subtopicCode}
        </p>
        <p className={s.topic}>
          {meta.subtopicTitle}
          <span className={s.topicDivider}>·</span>
          {meta.topicTitle}
        </p>
      </header>
      {canAccess ? (
        <PracticeArticle
          pack={pack}
          subject={subj}
          noteMeta={meta}
          canArchiveMistakes={canAccess}
        />
      ) : (
        <UpgradeRequired
          title="Upgrade to start this drill"
          message="Free plans include drills for Topics 1-3. Full access unlocks every drill, mixed practice, and the archive."
        />
      )}
    </div>
  );
}
