"use client";

import { useState } from "react";
import { ListChecks } from "@phosphor-icons/react";
import {
  masteryTotalsForSubject,
  parsePracticeStorageEntries,
  type StudySubjectId,
} from "@/lib/study-analytics";
import { studyStorageGetItem, studyStorageKeys } from "@/lib/study-kv";
import { useStudyStorageRefresh } from "@/lib/use-study-storage-refresh";
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

  useStudyStorageRefresh(() => {
    setRows(readMastery());
    setHydrated(true);
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

  try {
    const records = parsePracticeStorageEntries(studyStorageKeys(), studyStorageGetItem);
    return SUBJECTS.map((subject) => {
      const total = masteryTotalsForSubject(records, subject.id as StudySubjectId);
      return {
        subject: subject.id,
        label: subject.label,
        correct: total.correct,
        needsWork: total.needsWork,
        answered: total.answered,
        accuracy: total.accuracy,
      };
    });
  } catch {
    return emptyRows();
  }
}
