"use client";

import { useState } from "react";
import { CalendarBlank, CaretRight, Gauge, Target } from "@phosphor-icons/react";
import { readStudyStreak, type StudyStreak } from "@/lib/study-time";
import {
  globalMasteryTotals,
  parsePracticeStorageEntries,
  weakAreaCandidatesBySubject,
  type StudySubjectId,
} from "@/lib/study-analytics";
import { studyStorageGetItem, studyStorageKeys } from "@/lib/study-kv";
import { useStudyStorageRefresh } from "@/lib/use-study-storage-refresh";
import ExamPeriodForm from "./ExamPeriodForm";
import ExamScheduleDialog from "./ExamScheduleDialog";
import {
  getNextUpcomingExam,
  readExamSchedule,
} from "@/lib/exam-schedule";
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

function masteryStatus(accuracy: number | null): string {
  if (accuracy === null) return "No graded answers yet — drills unlock this summary.";
  if (accuracy >= 80) return "Strong accuracy across graded drills.";
  if (accuracy >= 60) return "Building — mix repair sets with recall.";
  return "Below 60% — prioritise repair on weak subtopics.";
}

function accuracyBand(accuracy: number | null): "empty" | "low" | "mid" | "high" {
  if (accuracy === null) return "empty";
  if (accuracy >= 80) return "high";
  if (accuracy >= 60) return "mid";
  return "low";
}

function countdownLabel(c: { days: number; formattedDate: string }): string {
  if (c.days <= 0) return "Session window is open";
  return `${c.days} ${c.days === 1 ? "day" : "days"} to window`;
}

function getRunwayUrgency(days: number): number {
  if (days <= 0) return 100;
  return Math.max(8, Math.min(100, Math.round(((180 - Math.min(days, 180)) / 180) * 100)));
}

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
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [nextExam, setNextExam] = useState<ReturnType<typeof getNextUpcomingExam>>(null);

  useStudyStorageRefresh(() => {
    setStreak(readStudyStreak());
    setMastery(readMasterySummary());
    setWeakAreas(readWeakAreas(noteMetaIndex));
    setNextExam(getNextUpcomingExam(readExamSchedule()));
    setHydrated(true);
  }, [noteMetaIndex]);

  const runwayDays = nextExam ? nextExam.daysUntil : countdown?.days;
  const runwayUnit = nextExam
    ? nextExam.daysUntil === 0
      ? "today"
      : nextExam.daysUntil === 1
        ? "day to next paper"
        : "days to next paper"
    : countdown
      ? countdown.days === 0
        ? "window open"
        : "days to window"
      : "—";

  const runwayDetail = nextExam
    ? `Next: ${nextExam.label}`
    : countdown
      ? `${countdown.formattedDate} · ${countdownLabel(countdown)}`
      : "Tap to add your papers";

  const sessionLabel = countdown?.formattedDate ?? null;

  return (
    <section className={s.overviewShell} aria-label="Dashboard summary">
      <button
        type="button"
        className={s.runwayButton}
        onClick={() => setScheduleOpen(true)}
        aria-haspopup="dialog"
        aria-label="Open exam countdown — add subject, paper, and date for each exam"
      >
        <div className={s.runwayTop}>
          <div className={s.runwayIntro}>
            <p className={s.kpiLabel}>
              <span className={s.runwayLabelMain}>
                <CalendarBlank className={s.labelIcon} size={13} weight="bold" aria-hidden />
                Exam countdown
              </span>
              <span className={s.runwayHint} aria-hidden>
                Open timetable
                <CaretRight className={s.runwayHintIcon} size={12} weight="bold" />
              </span>
            </p>
            <p className={s.runwayWindow}>{runwayDetail}</p>
          </div>
          <div className={s.runwayHero}>
            <strong className={s.kpiValue}>
              {runwayDays !== undefined && runwayDays !== null ? runwayDays : "—"}
            </strong>
            <span className={s.runwayUnit}>{runwayUnit}</span>
          </div>
        </div>
        <div className={s.runwayTrack} aria-hidden>
          <span
            className={s.runwayFill}
            style={{
              width: `${runwayDays !== undefined && runwayDays !== null ? getRunwayUrgency(runwayDays) : 0}%`,
            }}
          />
        </div>
      </button>

      <ExamScheduleDialog
        open={scheduleOpen}
        onClose={() => {
          setScheduleOpen(false);
          setNextExam(getNextUpcomingExam(readExamSchedule()));
        }}
        sessionLabel={sessionLabel}
      />

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
          <header className={s.signalHeader}>
            <p className={s.kpiLabel}>
              <Gauge className={s.labelIcon} size={13} weight="bold" aria-hidden />
              Practice summary
            </p>
            <p className={s.signalSub}>Graded drill answers and study days</p>
          </header>
          <p className={s.signalNote} data-band={accuracyBand(mastery.accuracy)}>
            {masteryStatus(mastery.accuracy)}
          </p>
          <div className={s.signalList} role="list">
            <div
              className={s.signalRow}
              role="listitem"
              data-band={accuracyBand(mastery.accuracy) === "low" ? "low" : "ok"}
            >
              <span className={s.signalRail} aria-hidden />
              <span className={s.signalBody}>
                <span className={s.signalTitle}>Drill accuracy</span>
                <span className={s.signalMeta}>
                  {mastery.answered > 0
                    ? `${mastery.answered} graded answer${mastery.answered === 1 ? "" : "s"}`
                    : "No graded answers yet"}
                </span>
              </span>
              <span className={s.signalScore} aria-label="Drill accuracy">
                <span className={s.signalValue}>
                  {hydrated && mastery.accuracy !== null ? `${mastery.accuracy}%` : "—"}
                </span>
              </span>
            </div>
            <div className={s.signalRow} role="listitem">
              <span className={s.signalRail} aria-hidden />
              <span className={s.signalBody}>
                <span className={s.signalTitle}>Study streak</span>
                <span className={s.signalMeta}>
                  {streak.studiedToday ? "Logged today" : "Not logged today"}
                </span>
              </span>
              <span className={s.signalScore} aria-label="Study streak length">
                <span className={s.signalValue}>{hydrated ? `${streak.count}d` : "—"}</span>
              </span>
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

function readWeakAreas(noteMetaIndex: NoteMetaIndex): WeakArea[] {
  if (typeof window === "undefined") return [];

  try {
    const records = parsePracticeStorageEntries(studyStorageKeys(), studyStorageGetItem);
    const weakestBySubject = weakAreaCandidatesBySubject(records);

    return SUBJECTS.flatMap((subject) => {
      const weakest = weakestBySubject.get(subject.id as StudySubjectId);
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
  } catch {
    return [];
  }
}

function readMasterySummary(): MasterySummary {
  if (typeof window === "undefined") return { answered: 0, accuracy: null };

  try {
    const records = parsePracticeStorageEntries(studyStorageKeys(), studyStorageGetItem);
    const totals = globalMasteryTotals(records);
    return { answered: totals.answered, accuracy: totals.accuracy };
  } catch {
    return { answered: 0, accuracy: null };
  }
}

function subjectShortLabel(subject: SubjectId): string {
  return subject.slice(0, 4).toUpperCase();
}

function subjectFullName(subject: SubjectId): string {
  return SUBJECTS.find((s) => s.id === subject)?.label ?? subject;
}
