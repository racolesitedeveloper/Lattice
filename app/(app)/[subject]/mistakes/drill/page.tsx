import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/ssr";
import UpgradeRequired from "@/components/app/UpgradeRequired";
import { getCurrentBillingPlan } from "@/lib/billing/current-plan";
import { canAccessArchive } from "@/lib/entitlements";
import ns from "../../notes/notes.module.css";
import ps from "../../practice/practice.module.css";
import MistakesDrillClient from "./MistakesDrillClient";

const SUBJECT_LABELS: Record<string, string> = {
  physics: "Physics",
  chemistry: "Chemistry",
  biology: "Biology",
};

export default async function MistakesDrillPage({ params }: { params: Promise<{ subject: string }> }) {
  const { subject } = await params;
  const subj = subject.toLowerCase();
  const plan = await getCurrentBillingPlan();
  const canAccess = canAccessArchive(plan);

  return (
    <div className={ps.wrap}>
      <header className={ps.header}>
        <div className={ns.titleGroup}>
          <Link href={`/${subj}/mistakes`} className={ns.back} aria-label="Back to mistakes" prefetch>
            <ArrowLeft className={ns.backIcon} size={20} weight="regular" aria-hidden />
          </Link>
          <h1 className={ps.title}>Mistakes drill</h1>
        </div>
        <p className={ps.meta}>{subjectLabel(subj)} only</p>
        <p className={ps.topic}>This drill uses archived mistakes from this subject and never mixes subjects.</p>
      </header>
      {canAccess ? (
        <MistakesDrillClient subject={subj} />
      ) : (
        <UpgradeRequired
          title="Upgrade to drill archived mistakes"
          message="Mistake retry drills are part of the archive and require the full plan."
        />
      )}
    </div>
  );
}

function subjectLabel(subject: string): string {
  return SUBJECT_LABELS[subject] ?? subject;
}
