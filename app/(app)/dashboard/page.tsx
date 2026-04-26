import { Suspense } from "react";
import { createClient } from "@/lib/supabase/server";
import { getCourseOutline } from "@/lib/course/get-outline";
import DashboardKpiStrip from "./DashboardKpiStrip";
import UpgradeSuccessDialog from "./UpgradeSuccessDialog";
import RecentActivityPanel from "./RecentActivityPanel";
import StudyHoursGraph from "./StudyHoursGraph";
import SubjectMasteryOverview from "./SubjectMasteryOverview";
import s from "./dashboard.module.css";

type ProfileRow = {
  exam_period?: ExamPeriod | null;
};
type ProfileSelect = { data: ProfileRow | null; error: { code?: string } | null };

type NoteMetaIndex = Record<string, Record<string, { topicTitle: string; subtopicTitle: string }>>;
type ExamPeriod = "may-june" | "oct-nov";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const profileResult: ProfileSelect = user
    ? await getDashboardProfile(user.id)
    : { data: null, error: null };
  const profile = profileResult.data;
  const session = getExamSession(profile?.exam_period ?? null);
  const noteMetaIndex = await getNoteMetaIndex();

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
            <div className={s.toolbarControls} aria-label="Dashboard filters">
              <span className={s.filterPill}>This week</span>
              <span className={s.filterPill}>All subjects</span>
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

async function getDashboardProfile(userId: string): Promise<ProfileSelect> {
  const supabase = await createClient();
  const result = await supabase
    .from("profiles")
    .select("exam_period")
    .eq("id", userId)
    .single();

  if (!result.error) return { data: result.data as ProfileRow, error: null };

  if (result.error.code === "42703") {
    const fallback = await supabase
      .from("profiles")
      .select("id")
      .eq("id", userId)
      .single();

    return { data: fallback.data ? { exam_period: null } : null, error: fallback.error };
  }

  return { data: null, error: result.error };
}

async function getNoteMetaIndex(): Promise<NoteMetaIndex> {
  const entries = await Promise.all(
    (["physics", "chemistry", "biology"] as const).map(async (subject) => {
      const outline = await getCourseOutline(subject);
      const subtopics: NoteMetaIndex[string] = {};

      for (const topic of outline?.topics ?? []) {
        for (const subtopic of topic.subtopics) {
          subtopics[subtopic.id] = {
            topicTitle: topic.title,
            subtopicTitle: subtopic.title,
          };
        }
      }

      return [subject, subtopics] as const;
    }),
  );

  return Object.fromEntries(entries);
}

function getExamSession(period: ExamPeriod | null): { days: number; label: string; formattedDate: string } | null {
  if (!period) return null;
  const now = new Date();
  const today = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  const year = now.getUTCFullYear();
  const window = getNextSessionWindow(period, year, today);
  const days = today > window.end ? 0 : Math.max(0, Math.ceil((window.start - today) / 86_400_000));
  const formattedDate = `${period === "may-june" ? "May/June" : "Oct/Nov"} ${window.year}`;

  return {
    days,
    formattedDate,
    label: days === 0 ? "Session window is open" : `${days} ${days === 1 ? "day" : "days"} until the session opens`,
  };
}

function getNextSessionWindow(period: ExamPeriod, year: number, today: number): { year: number; start: number; end: number } {
  const monthStart = period === "may-june" ? 4 : 9;
  const monthEnd = period === "may-june" ? 5 : 10;
  const window = {
    year,
    start: Date.UTC(year, monthStart, 1),
    end: Date.UTC(year, monthEnd + 1, 0),
  };

  if (today <= window.end) return window;
  return {
    year: year + 1,
    start: Date.UTC(year + 1, monthStart, 1),
    end: Date.UTC(year + 1, monthEnd + 1, 0),
  };
}
