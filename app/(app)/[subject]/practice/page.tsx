import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/ssr";
import PlanBadge from "@/components/app/PlanBadge";
import { getCourseOutline } from "@/lib/course/get-outline";
import { getCurrentBillingPlan } from "@/lib/billing/current-plan";
import { hasSubtopicPracticePack } from "@/lib/practice/get-practice";
import s from "./practice-hub.module.css";
import PracticeCourseOutline from "./PracticeCourseOutline";

const LABELS: Record<string, string> = {
  physics: "Physics",
  chemistry: "Chemistry",
  biology: "Biology",
};

export default async function PracticePage({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject } = await params;
  const subj = subject.toLowerCase();
  const label = LABELS[subj] ?? subject;
  const [outline, plan] = await Promise.all([getCourseOutline(subj), getCurrentBillingPlan()]);
  const publishedNoteIds = outline
    ? outline.topics
        .flatMap((topic) => topic.subtopics.map((subtopic) => subtopic.id))
        .filter((noteId) => hasSubtopicPracticePack(subj, noteId))
    : [];

  return (
    <div className={s.page}>
      <header className={s.topBar}>
        <div className={s.titleWrap}>
          <Link href="/pick/practice" className={s.back} aria-label="Choose a subject for Practice" prefetch>
            <ArrowLeft size={20} weight="regular" aria-hidden />
          </Link>
          <h1 className={s.viewTitle}>Practice</h1>
        </div>
        <PlanBadge />
      </header>
      {outline ? (
        <div className={s.main}>
          <PracticeCourseOutline
            outline={outline}
            subject={subj}
            publishedNoteIds={publishedNoteIds}
            plan={plan}
          />
        </div>
      ) : (
        <div className={s.main}>
          <div className={s.empty}>
            <p>
            <strong>{label} drills</strong> — content coming soon.
            </p>
            <p>Topic drills and flashcards from the static question bank will live here.</p>
          </div>
        </div>
      )}
    </div>
  );
}
