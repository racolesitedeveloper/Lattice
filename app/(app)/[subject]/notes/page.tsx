import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/ssr";
import PlanBadge from "@/components/app/PlanBadge";
import { getCourseOutline } from "@/lib/course/get-outline";
import { getCurrentBillingPlan } from "@/lib/billing/current-plan";
import s from "../topics/topics.module.css";
import ns from "./notes.module.css";
import NotesCourseOutline from "./NotesCourseOutline";

const LABELS: Record<string, string> = {
  physics: "Physics",
  chemistry: "Chemistry",
  biology: "Biology",
};

export default async function NotesPage({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject } = await params;
  const subj = subject.toLowerCase();
  const label = LABELS[subj] ?? subject;
  const [outline, plan] = await Promise.all([getCourseOutline(subj), getCurrentBillingPlan()]);

  return (
    <div className={s.page}>
      <header className={s.topBar}>
        <div className={ns.titleGroup}>
          <Link
            href="/pick/notes"
            className={ns.back}
            aria-label="Choose a subject for Notes"
            prefetch
          >
            <ArrowLeft className={ns.backIcon} size={20} weight="regular" aria-hidden />
          </Link>
          <h1 className={s.viewTitle}>Notes</h1>
        </div>
        <PlanBadge />
      </header>
      {outline ? (
        <div className={ns.notesMain}>
          <NotesCourseOutline outline={outline} subject={subj} plan={plan} />
        </div>
      ) : (
        <div className={s.body}>
          <p className={s.comingSoon}>
            <strong>{label} notes</strong> — content coming soon.
          </p>
          <p className={s.comingSoonSub}>
            No topic outline is configured for this subject yet. Study notes for
            each topic will appear here when available.
          </p>
        </div>
      )}
    </div>
  );
}
