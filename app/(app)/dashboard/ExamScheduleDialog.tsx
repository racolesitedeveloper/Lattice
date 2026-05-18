"use client";

import { useEffect, useRef, useState } from "react";
import {
  EXAM_SUBJECTS,
  EXAM_PAPER_SUGGESTION_GROUPS,
  addExamScheduleEntry,
  formatDaysUntil,
  formatEntryLabel,
  getUpcomingExams,
  readExamSchedule,
  removeExamScheduleEntry,
  type ExamScheduleState,
  type ExamSubjectId,
  type UpcomingExam,
} from "@/lib/exam-schedule";
import DatePicker from "@/components/ui/DatePicker";
import s from "./exam-schedule-dialog.module.css";

function formatDisplayDate(dateKey: string): string {
  const [y, m, d] = dateKey.split("-").map(Number);
  const date = new Date(y ?? 1970, (m ?? 1) - 1, d ?? 1);
  return date.toLocaleDateString(undefined, {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function ExamScheduleDialog({
  open,
  onClose,
  sessionLabel,
}: {
  open: boolean;
  onClose: () => void;
  sessionLabel: string | null;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [schedule, setSchedule] = useState<ExamScheduleState>(() => readExamSchedule());
  const [subject, setSubject] = useState<ExamSubjectId>("physics");
  const [paper, setPaper] = useState("");
  const [date, setDate] = useState("");
  const [formError, setFormError] = useState<string | null>(null);

  const upcoming = getUpcomingExams(schedule);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    if (open && !el.open) {
      setSchedule(readExamSchedule());
      el.showModal();
    }
    if (!open && el.open) {
      el.close();
    }
  }, [open]);

  function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    setFormError(null);
    const trimmedPaper = paper.trim();
    if (!trimmedPaper) {
      setFormError(
        "Choose a paper — tap one of the shortcuts, or type the name exactly as it appears on your timetable.",
      );
      return;
    }
    if (!date) {
      setFormError("Choose the date this paper is scheduled.");
      return;
    }
    const next = addExamScheduleEntry({ subject, paper: trimmedPaper, date });
    setSchedule(next);
    setPaper("");
    setDate("");
  }

  function handleRemove(id: string) {
    setSchedule(removeExamScheduleEntry(id));
  }

  return (
    <dialog
      ref={dialogRef}
      className={s.dialog}
      aria-labelledby="exam-schedule-title"
      onClose={onClose}
      onCancel={onClose}
    >
      <div className={s.inner}>
        <header className={s.header}>
          <p className={s.kicker}>Exam countdown</p>
          <h2 id="exam-schedule-title" className={s.title}>
            Build your exam timetable
          </h2>
          <p className={s.lead}>
            Add each paper once — subject, which paper, and the date — so you can see days left at a glance.
            Use the same wording as on your entry confirmation or timetable.
            {sessionLabel ? (
              <>
                {" "}
                Exam session you&apos;re aiming for: <strong>{sessionLabel}</strong>.
              </>
            ) : (
              <> Set your exam session from the dashboard overview if you want it shown elsewhere.</>
            )}
          </p>
        </header>

        <div className={s.body}>
          <form className={s.form} onSubmit={handleAdd}>
            <div className={s.field}>
              <span className={s.label} id="exam-subject-label">
                Subject for this paper
              </span>
              <p className={s.fieldHint}>Physics, Chemistry, or Biology — whichever paper you&apos;re adding.</p>
              <div
                className={s.subjectSegmentTrack}
                role="radiogroup"
                aria-labelledby="exam-subject-label"
              >
                {EXAM_SUBJECTS.map((item) => (
                  <label key={item.id} className={s.subjectSegment}>
                    <input
                      type="radio"
                      name="exam-schedule-subject"
                      value={item.id}
                      checked={subject === item.id}
                      onChange={() => setSubject(item.id)}
                    />
                    <span className={s.subjectSegmentText}>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className={s.field}>
              <label className={s.label} htmlFor="exam-paper-custom">
                Exam paper
              </label>
              <p id="exam-paper-hint" className={s.fieldHint}>
                Tap the label that matches your timetable (the app saves the full name). If yours is different,
                type it in the box — spelling doesn&apos;t need to be perfect, just recognisable to you.
              </p>
              <div className={s.paperQuickPick} role="group" aria-label="Common paper shortcuts">
                {EXAM_PAPER_SUGGESTION_GROUPS.map((group) => (
                  <div key={group.id} className={s.paperGroup}>
                    <div className={s.paperGroupHead}>
                      <p className={s.paperGroupTitle}>{group.heading}</p>
                      <p className={s.paperGroupDesc}>{group.description}</p>
                    </div>
                    <div className={s.paperChipRow}>
                      {group.items.map((item) => {
                        const selected = paper === item.value;
                        return (
                          <button
                            key={item.value}
                            type="button"
                            className={`${s.paperChip} ${selected ? s.paperChipSelected : ""}`}
                            aria-pressed={selected}
                            onClick={() => setPaper(item.value)}
                          >
                            {item.chipLabel}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
              <input
                id="exam-paper-custom"
                className={s.input}
                value={paper}
                onChange={(e) => setPaper(e.target.value)}
                placeholder='e.g. "Paper 4 — Structured Questions"'
                autoComplete="off"
                aria-describedby="exam-paper-hint"
              />
            </div>

            <div className={s.field}>
              <label className={s.label} htmlFor="exam-date">
                Date of this paper
              </label>
              <p id="exam-date-hint" className={s.fieldHint}>
                The day you sit this exam — check your official timetable.
              </p>
              <DatePicker
                id="exam-date"
                value={date}
                onChange={setDate}
                placeholder="Choose exam date"
                required
                aria-describedby="exam-date-hint"
              />
            </div>

            {formError ? (
              <p className={s.formError} role="alert">
                {formError}
              </p>
            ) : null}

            <button type="submit" className={s.addBtn}>
              Add to timetable
            </button>
          </form>

          <section className={s.listSection} aria-label="Your upcoming exams">
            <h3 className={s.listHeading}>Coming up</h3>
            {upcoming.length === 0 ? (
              <p className={s.empty}>
                No exams saved yet. Use the form above to add each paper — you&apos;ll see countdowns here.
              </p>
            ) : (
              <ul className={s.list}>
                {upcoming.map((entry) => (
                  <ExamRow key={entry.id} entry={entry} onRemove={handleRemove} />
                ))}
              </ul>
            )}
          </section>
        </div>

        <footer className={s.footer}>
          <button type="button" className={s.closeBtn} onClick={onClose}>
            Done
          </button>
        </footer>
      </div>
    </dialog>
  );
}

function ExamRow({
  entry,
  onRemove,
}: {
  entry: UpcomingExam;
  onRemove: (id: string) => void;
}) {
  return (
    <li className={s.row}>
      <div className={s.rowMain}>
        <span className={s.rowTitle}>{formatEntryLabel(entry)}</span>
        <span className={s.rowDate}>{formatDisplayDate(entry.date)}</span>
      </div>
      <span
        className={`${s.countdown} ${entry.daysUntil === 0 ? s.countdownToday : ""}`}
      >
        {formatDaysUntil(entry.daysUntil)}
      </span>
      <button
        type="button"
        className={s.removeBtn}
        onClick={() => onRemove(entry.id)}
        aria-label={`Remove ${formatEntryLabel(entry)}`}
      >
        Remove
      </button>
    </li>
  );
}
