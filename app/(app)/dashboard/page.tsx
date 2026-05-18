import { Suspense } from "react";
import { getAuthProfile, getAuthUser } from "@/lib/auth/session";
import { NOTE_META_INDEX } from "@/lib/course/note-meta-index";
import { getExamSessionCountdown } from "@/lib/exam-session";
import DashboardKpiStrip from "./DashboardKpiStrip";
import DashboardResetAnalytics from "./DashboardResetAnalytics";
import UpgradeSuccessDialog from "./UpgradeSuccessDialog";
import RecentActivityPanel from "./RecentActivityPanel";
import StudyHoursGraph from "./StudyHoursGraph";
import SubjectMasteryOverview from "./SubjectMasteryOverview";
import s from "./dashboard.module.css";

export default async function DashboardPage() {
  const user = await getAuthUser();
  const profile = user ? await getAuthProfile() : null;
  const session = getExamSessionCountdown(profile?.exam_period ?? null);
  const noteMetaIndex = NOTE_META_INDEX;

  return (
    <div className={s.page}>
      <Suspense fallback={null}>
        <UpgradeSuccessDialog />
      </Suspense>
      <main className={s.body}>
        <section className={s.overviewBoard} aria-label="Dashboard overview">
          <header className={s.dashboardToolbar} aria-label="Dashboard controls">
            <div>
              <p className={s.toolbarEyebrow}>Overview</p>
              <h1 className={s.toolbarTitle}>Study operations</h1>
            </div>
            <div className={s.toolbarControls} aria-label="Dashboard actions">
              <DashboardResetAnalytics />
            </div>
          </header>

          <DashboardKpiStrip
            countdown={session}
            noteMetaIndex={noteMetaIndex}
            currentPeriod={profile?.exam_period ?? null}
          />

          <section className={s.dashboardGrid} aria-label="Study dashboard">
            <StudyHoursGraph />
            <RecentActivityPanel />
            <SubjectMasteryOverview />
          </section>
        </section>
      </main>
    </div>
  );
}

