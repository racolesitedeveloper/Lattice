"use client";

import { useEffect, useState } from "react";
import { CalendarBlank, CaretRight, Fire, Gauge, Target } from "@phosphor-icons/react";
import { readStudyStreak, type StudyStreak } from "@/lib/study-time";
import { studyStorageGetItem, studyStorageKeys } from "@/lib/study-kv";
import ExamPeriodForm from "./ExamPeriodForm";
import s from "./dashboard.module.css";

type CountdownSummary = {
  days: number;
  formattedDate: string;
} | null;

type MasterySummary = {
  answered: number;
  accuracy: number | null;
};

type NoteMetaIndex = Record<string, Record<string, { topicTitle: string; subtopicTitle: string }>>;

type WeakArea = {
  subject: SubjectId;
  label: string;
  topicTitle: string | null;
  href: string;
  accuracy: number;
  needsWork: number;
};

type SubjectId = "physics" | "chemistry" | "biology";

type ExamPeriod = "may-june" | "oct-nov";

const SUBJECTS: Array<{ id: SubjectId; label: string }> = [
  { id: "physics", label: "Physics" },
  { id: "chemistry", label: "Chemistry" },
  { id: "biology", label: "Biology" },
];

export default function DashboardKpiStrip({
  countdown,
  noteMetaIndex,
  currentPeriod,
}: {
  countdown: CountdownSummary;
  noteMetaIndex: NoteMetaIndex;
  currentPeriod: ExamPeriod | null;
}) {
  const [streak, setStreak] = useState<StudyStreak>({ count: 0, studiedToday: false });
  const [mastery, setMastery] = useState<MasterySummary>({ answered: 0, accuracy: null });
  const [weakAreas, setWeakAreas] = useState<WeakArea[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    function refresh() {
      setStreak(readStudyStreak());
      setMastery(readMasterySummary());
      setWeakAreas(readWeakAreas(noteMetaIndex));
      setHydrated(true);
    }

    window.queueMicrotask(refresh);
    const interval = window.setInterval(refresh, 30_000);
    return () => window.clearInterval(interval);
  }, [noteMetaIndex]);

  return (
    <section className={s.overviewShell} aria-label="Dashboard summary">
      <div className={s.overviewRunway}>
        <div className={s.runwayTop}>
          <div className={s.runwayIntro}>
            <p className={s.kpiLabel}>
              <CalendarBlank className={s.labelIcon} size={13} weight="bold" aria-hidden />
              Session runway
            </p>
            <p className={s.runwayWindow}>
              {countdown ? `${countdown.formattedDate} · ${countdownLabel(countdown)}` : "Set your target series below"}
            </p>
          </div>
          <div className={s.runwayHero}>
            <strong className={s.kpiValue}>{countdown ? countdown.days : "—"}</strong>
            <span className={s.runwayUnit}>
              {countdown ? (countdown.days === 0 ? "window open" : "days to window") : "—"}
            </span>
          </div>
        </div>
        <div className={s.runwayTrack} aria-hidden>
          <span
            className={s.runwayFill}
            style={{ width: `${countdown ? getRunwayUrgency(countdown.days) : 0}%` }}
          />
        </div>
      </div>

      <div className={s.overviewBody}>
        <div className={s.overviewWeak}>
          <header className={s.weakAreasHeader}>
            <div>
              <p className={s.kpiLabel}>
                <Target className={s.labelIcon} size={13} weight="bold" aria-hidden />
                Weakest areas
              </p>
              <p className={s.weakAreasSub}>Lowest scoring subtopic per subject</p>
            </div>
            <span className={s.weakAreasAction} aria-hidden>
              Open row
            </span>
          </header>
          <div className={s.weakAreaList} role="list">
            {hydrated && weakAreas.length > 0 ? (
              weakAreas.map((area) => (
                <a
                  key={area.subject}
                  href={area.href}
                  className={s.weakAreaRow}
                  role="listitem"
                  data-band={area.accuracy < 50 ? "low" : "ok"}
                  aria-label={`${subjectFullName(area.subject)}: ${area.label}, ${area.accuracy}% correct, ${area.needsWork} need review. Open drill.`}
                >
                  <span className={s.weakAreaRail} aria-hidden />
                  <span className={s.weakAreaBody}>
                    <span className={s.weakAreaTitle}>{area.label}</span>
                    <span className={s.weakAreaMeta}>
                      {subjectShortLabel(area.subject)}
                      {area.topicTitle ? ` · ${area.topicTitle}` : ""}
                    </span>
                  </span>
                  <span className={s.weakAreaScore}>
                    <span className={s.weakAreaAccuracy}>{area.accuracy}%</span>
                    <span className={s.weakAreaReview}>
                      {area.needsWork} miss{area.needsWork === 1 ? "" : "es"}
                    </span>
                  </span>
                  <span className={s.weakAreaDrill}>
                    Drill
                    <CaretRight className={s.weakAreaChevron} size={13} weight="bold" aria-hidden />
                  </span>
                </a>
              ))
            ) : (
              <p className={s.weakAreasEmpty}>
                Drill each course once to surface the subtopic that needs the most repair here.
              </p>
            )}
          </div>
        </div>

        <div className={s.overviewSignal}>
          <header className={s.signalHead}>
            <p className={s.kpiLabel}>
              <Gauge className={s.labelIcon} size={13} weight="bold" aria-hidden />
              Study signal
            </p>
            <span className={s.signalStatus}>{masteryStatus(mastery.accuracy)}</span>
          </header>
          <div className={s.signalGrid}>
            <div className={s.signalMetric}>
              <span>Drill accuracy</span>
              <strong>{hydrated && mastery.accuracy !== null ? `${mastery.accuracy}%` : "—"}</strong>
              <em>{mastery.answered > 0 ? `${mastery.answered} answers` : "No drills yet"}</em>
            </div>
            <div className={s.signalMetric}>
              <span className={s.signalMetricLabel}>
                <Fire className={s.metricIcon} size={12} weight={streak.studiedToday ? "fill" : "bold"} aria-hidden />
                Streak
              </span>
              <strong>{hydrated ? `${streak.count}d` : "—"}</strong>
              <em>{streak.studiedToday ? "Logged today" : "Not logged today"}</em>
            </div>
          </div>
        </div>
      </div>

      <div className={s.overviewExam}>
        <p className={s.overviewExamLabel}>Target exam series</p>
        <p className={s.overviewExamHint}>
          {countdown
            ? "Countdown above uses this series. Switch anytime."
            : "Choose your Cambridge series — the runway will update after you save."}
        </p>
        <div className={s.overviewFormWrap}>
          <ExamPeriodForm currentPeriod={currentPeriod} />
        </div>
      </div>
    </section>
  );
}

function countdownLabel(c: { days: number; formattedDate: string }): string {
  if (c.days <= 0) return "Session window is open";
  return `${c.days} ${c.days === 1 ? "day" : "days"} to window`;
}

function readWeakAreas(noteMetaIndex: NoteMetaIndex): WeakArea[] {
  if (typeof window === "undefined") return [];

  const bySubject = new Map<SubjectId, Map<string, { correct: number; needsWork: number }>>();
  for (const subject of SUBJECTS) bySubject.set(subject.id, new Map());

  try {
    for (const key of studyStorageKeys()) {
      const match = key.match(/^practice-session:(physics|chemistry|biology):([^:]+)$/);
      if (!match) continue;

      const subject = match[1] as SubjectId;
      const noteId = match[2]!;
      const raw = studyStorageGetItem(key);
      if (!raw) continue;

      const parsed = JSON.parse(raw) as { drillOutcomes?: Record<string, unknown> };
      if (!parsed.drillOutcomes || typeof parsed.drillOutcomes !== "object") continue;

      const total = bySubject.get(subject)!.get(noteId) ?? { correct: 0, needsWork: 0 };
      for (const value of Object.values(parsed.drillOutcomes)) {
        if (value === "correct") total.correct += 1;
        if (value === "needs-work") total.needsWork += 1;
      }
      bySubject.get(subject)!.set(noteId, total);
    }
  } catch {
    return [];
  }

  return SUBJECTS.flatMap((subject) => {
    const weakest = Array.from(bySubject.get(subject.id)!.entries())
      .map(([noteId, total]) => {
        const answered = total.correct + total.needsWork;
        const accuracy = answered > 0 ? Math.round((total.correct / answered) * 100) : 100;
        return { noteId, ...total, answered, accuracy };
      })
      .filter((area) => area.answered > 0)
      .sort((a, b) => a.accuracy - b.accuracy || b.needsWork - a.needsWork)[0];

    if (!weakest) return [];

    const meta = noteMetaIndex[subject.id]?.[weakest.noteId];
    return {
      subject: subject.id,
      label: meta?.subtopicTitle ?? weakest.noteId,
      topicTitle: meta?.topicTitle ?? null,
      href: `/${subject.id}/practice/${weakest.noteId}`,
      accuracy: weakest.accuracy,
      needsWork: weakest.needsWork,
    };
  });
}

function readMasterySummary(): MasterySummary {
  if (typeof window === "undefined") return { answered: 0, accuracy: null };

  let correct = 0;
  let needsWork = 0;

  try {
    for (const key of studyStorageKeys()) {
      if (!/^(?:practice-session|practice-mixed-session|practice-mistakes-session):/.test(key)) continue;

      const raw = studyStorageGetItem(key);
      if (!raw) continue;

      const parsed = JSON.parse(raw) as {
        drillOutcomes?: Record<string, unknown>;
        outcomes?: Record<string, unknown>;
      };
      const outcomeSource = key.startsWith("practice-session:") ? parsed.drillOutcomes : parsed.outcomes;
      if (!outcomeSource || typeof outcomeSource !== "object") continue;

      for (const value of Object.values(outcomeSource)) {
        if (value === "correct") correct += 1;
        if (value === "needs-work") needsWork += 1;
      }
    }
  } catch {
    return { answered: 0, accuracy: null };
  }

  const answered = correct + needsWork;
  return {
    answered,
    accuracy: answered > 0 ? Math.round((correct / answered) * 100) : null,
  };
}

function masteryStatus(accuracy: number | null): string {
  if (accuracy === null) return "Start drills to unlock accuracy";
  if (accuracy >= 80) return "Strong exam signal";
  if (accuracy >= 60) return "Building toward readiness";
  return "Needs targeted repair";
}

function getRunwayUrgency(days: number): number {
  if (days <= 0) return 100;
  return Math.max(8, Math.min(100, Math.round(((180 - Math.min(days, 180)) / 180) * 100)));
}

function subjectShortLabel(subject: SubjectId): string {
  return subject.slice(0, 4).toUpperCase();
}

function subjectFullName(subject: SubjectId): string {
  return SUBJECTS.find((s) => s.id === subject)?.label ?? subject;
}
