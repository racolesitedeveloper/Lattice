import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "@phosphor-icons/react/ssr";
import PlanBadge from "@/components/app/PlanBadge";
import UpgradeRequired from "@/components/app/UpgradeRequired";
import { getCurrentBillingPlan } from "@/lib/billing/current-plan";
import { canAccessNoteId, canAccessTopic } from "@/lib/entitlements";
import { getNoteDraft } from "@/lib/notes/get-draft";
import { getAdjacentNoteIds, resolveNoteMeta } from "@/lib/notes/resolve-meta";
import type { NoteMeta } from "@/lib/notes/types";
import s from "../../topics/topics.module.css";
import ns from "../notes.module.css";
import NoteArticle from "../NoteArticle";
import NoteVisitMarker from "../NoteVisitMarker";

function buildFallbackMeta(subject: string, noteId: string): NoteMeta {
  const syllabusCodeBySubject: Record<string, string> = {
    physics: "9702",
    chemistry: "9701",
    biology: "9700",
  };
  const m = /^t(\d+)-(\d+)$/.exec(noteId);
  const topicNumber = m ? Number(m[1]) : 0;
  const subtopicNumber = m ? Number(m[2]) : 0;
  const subtopicCode =
    topicNumber > 0 && subtopicNumber > 0
      ? `${topicNumber}.${subtopicNumber}`
      : noteId;

  return {
    syllabusCode: syllabusCodeBySubject[subject.toLowerCase()] ?? "",
    topicNumber,
    topicTitle: topicNumber > 0 ? `Topic ${topicNumber}` : "Topic",
    subtopicCode,
    subtopicTitle:
      topicNumber > 0 && subtopicNumber > 0
        ? `Subtopic ${subtopicCode}`
        : "Subtopic",
  };
}

export default async function NoteDetailPage({
  params,
}: {
  params: Promise<{ subject: string; noteId: string }>;
}) {
  const { subject, noteId } = await params;
  const plan = await getCurrentBillingPlan();
  const meta = await resolveNoteMeta(subject, noteId);
  const draft = await getNoteDraft(subject, noteId);
  if (!meta && !draft) notFound();
  const canAccess = meta ? canAccessTopic(plan, meta.topicNumber) : canAccessNoteId(plan, noteId);
  const { prev, next } = await getAdjacentNoteIds(subject, noteId);
  const resolvedMeta = meta ?? buildFallbackMeta(subject, noteId);

  return (
    <div className={s.page}>
      <header className={s.topBar}>
        <div className={ns.titleGroup}>
          <Link
            href={`/${subject}/notes`}
            className={ns.back}
            aria-label="Back to course outline"
            prefetch
          >
            <ArrowLeft className={ns.backIcon} size={20} weight="regular" aria-hidden />
          </Link>
          <h1 className={s.viewTitle}>Notes</h1>
        </div>
        <PlanBadge />
      </header>
      {canAccess ? (
        <>
          <NoteArticle
            meta={resolvedMeta}
            draft={draft}
            subject={subject}
            prevId={prev}
            nextId={next}
          />
          <NoteVisitMarker
            href={`/${subject}/notes/${noteId}`}
            title={resolvedMeta.subtopicTitle}
            subtitle={resolvedMeta.topicTitle}
          />
        </>
      ) : (
        <UpgradeRequired
          title="Upgrade to continue reading"
          message="Free plans include notes for Topics 1-3. Full access unlocks every note, drill, and archived mistake across the syllabus."
        />
      )}
    </div>
  );
}
