import PlanBadge from "@/components/app/PlanBadge";
import UpgradeRequired from "@/components/app/UpgradeRequired";
import { getCurrentBillingPlan } from "@/lib/billing/current-plan";
import { canAccessArchive } from "@/lib/entitlements";
import MistakesClient from "./MistakesClient";
import s from "./mistakes.module.css";

export default async function MistakesPage() {
  const plan = await getCurrentBillingPlan();
  const canAccess = canAccessArchive(plan);

  return (
    <div className={s.page}>
      <header className={s.topBar}>
        <h1 className={s.viewTitle}>Archive</h1>
        <PlanBadge />
      </header>
      <div className={canAccess ? s.body : s.bodyGated}>
        {canAccess ? (
          <MistakesClient />
        ) : (
          <UpgradeRequired
            title="Upgrade to use the archive"
            message="The archive stores mistakes and turns them into focused retry drills. It is available on the full plan."
          />
        )}
      </div>
    </div>
  );
}
