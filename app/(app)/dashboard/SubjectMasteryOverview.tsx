"use client";

import { useEffect, useState } from "react";
import { ListChecks } from "@phosphor-icons/react";
import { studyStorageGetItem, studyStorageKeys } from "@/lib/study-kv";
import s from "./dashboard.module.css";

type SubjectId = "physics" | "chemistry" | "biology";

type Mastery = {
  subject: SubjectId;
  label: string;
  correct: number;
  needsWork: number;
  answered: number;
  accuracy: number | null;
};

const SUBJECTS: Array<{ id: SubjectId; label: string }> = [
  { id: "physics", label: "Physics" },
  { id: "chemistry", label: "Chemistry" },
  { id: "biology", label: "Biology" },
];

export default function SubjectMasteryOverview() {
  const [rows, setRows] = useState<Mastery[]>(() => emptyRows());
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    window.queueMicrotask(() => {
      setRows(readMastery());
      setHydrated(true);
    });
  }, []);

  return (
    <section className={s.masteryPanel} aria-labelledby="subject-mastery-title">
      <div className={s.sectionHead}>
        <div>
          <p className={s.panelLabel}>
            <ListChecks className={s.labelIcon} size={13} weight="bold" aria-hidden />
            Breakdown
          </p>
          <h2 id="subject-mastery-title" className={s.sectionTitle}>
            Accuracy by subject
          </h2>
        </div>
        <p className={s.sectionNote}>Based on completed drill answers, not topic completion.</p>
      </div>

      <div className={s.masteryList}>
        <div className={s.masteryTableHead} aria-hidden>
          <span>Subject</span>
          <span>Answers</span>
          <span>Accuracy</span>
        </div>
        {rows.map((row) => (
          <article
            key={row.subject}
            className={s.masteryRow}
            data-band={row.accuracy !== null && row.accuracy < 50 ? "low" : "ok"}
          >
            <div className={s.masteryTop}>
              <div className={s.masterySubject}>
                <h3>{row.label}</h3>
              </div>
              <div className={s.masteryCounts} aria-label={`${row.label} answer breakdown`}>
                {hydrated && row.answered > 0 ? (
                  <>
                    <span>
                      <strong className={s.tabular}>{row.correct}</strong> correct
                    </span>
                    <span>
                      <strong className={s.tabular}>{row.needsWork}</strong> repair
                    </span>
                  </>
                ) : (
                  <span>No drill answers yet</span>
                )}
              </div>
              <strong className={s.masteryValue}>
                {hydrated && row.accuracy !== null ? `${row.accuracy}%` : "—"}
              </strong>
            </div>
            <div className={s.masteryTrack} aria-hidden>
              <span
                className={s.masteryFill}
                style={{ width: `${hydrated && row.accuracy !== null ? row.accuracy : 0}%` }}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function emptyRows(): Mastery[] {
  return SUBJECTS.map((subject) => ({
    subject: subject.id,
    label: subject.label,
    correct: 0,
    needsWork: 0,
    answered: 0,
    accuracy: null,
  }));
}

function readMastery(): Mastery[] {
  if (typeof window === "undefined") return emptyRows();

  const totals = new Map<SubjectId, { correct: number; needsWork: number }>();
  for (const subject of SUBJECTS) totals.set(subject.id, { correct: 0, needsWork: 0 });

  try {
    for (const key of studyStorageKeys()) {
      const subject = subjectFromStorageKey(key);
      if (!subject) continue;

      const raw = studyStorageGetItem(key);
      if (!raw) continue;
      const parsed = JSON.parse(raw) as {
        drillOutcomes?: Record<string, unknown>;
        outcomes?: Record<string, unknown>;
      };
      const outcomeSource = key.startsWith("practice-session:")
        ? parsed.drillOutcomes
        : parsed.outcomes;
      if (!outcomeSource || typeof outcomeSource !== "object") continue;

      const total = totals.get(subject)!;
      for (const value of Object.values(outcomeSource)) {
        if (value === "correct") total.correct += 1;
        if (value === "needs-work") total.needsWork += 1;
      }
    }
  } catch {
    return emptyRows();
  }

  return SUBJECTS.map((subject) => {
    const total = totals.get(subject.id)!;
    const answered = total.correct + total.needsWork;
    return {
      subject: subject.id,
      label: subject.label,
      correct: total.correct,
      needsWork: total.needsWork,
      answered,
      accuracy: answered > 0 ? Math.round((total.correct / answered) * 100) : null,
    };
  });
}

function subjectFromStorageKey(key: string): SubjectId | null {
  const match = /^(?:practice-session|practice-mixed-session|practice-mistakes-session):(physics|chemistry|biology):/.exec(
    key,
  );
  return (match?.[1] as SubjectId | undefined) ?? null;
}
