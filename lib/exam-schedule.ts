import { daysBetweenLocal, localDateKey, parseLocalDate } from "@/lib/calendar";
import { studyStorageGetItem, studyStorageSetItem } from "@/lib/study-kv";

export const EXAM_SCHEDULE_STORAGE_KEY = "lattice.exam-schedule:v1";

export type ExamSubjectId = "physics" | "chemistry" | "biology";

export type ExamScheduleEntry = {
  id: string;
  subject: ExamSubjectId;
  paper: string;
  /** Local calendar date YYYY-MM-DD */
  date: string;
  updatedAt: number;
};

export type ExamScheduleState = {
  entries: ExamScheduleEntry[];
  updatedAt: number;
};

export const EXAM_SUBJECTS: Array<{ id: ExamSubjectId; label: string }> = [
  { id: "physics", label: "Physics" },
  { id: "chemistry", label: "Chemistry" },
  { id: "biology", label: "Biology" },
];

/** Quick-pick chips in the exam timetable dialog — label is what students tap; value is stored. */
export type ExamPaperQuickPick = {
  value: string;
  chipLabel: string;
};

export type ExamPaperSuggestionGroup = {
  id: string;
  heading: string;
  description: string;
  items: ExamPaperQuickPick[];
};

export const EXAM_PAPER_SUGGESTION_GROUPS: readonly ExamPaperSuggestionGroup[] = [
  {
    id: "as",
    heading: "AS Level papers",
    description:
      "Typical first-year papers for Cambridge International AS Level (often Year 12). Pick what matches your slip.",
    items: [
      { value: "AS Paper 1", chipLabel: "Paper 1" },
      { value: "AS Paper 2", chipLabel: "Paper 2" },
    ],
  },
  {
    id: "a2",
    heading: "A Level papers (second year)",
    description:
      "Toward the full A Level — numbered papers vary by subject; choose the closest match or type below.",
    items: [
      { value: "A2 Paper 1", chipLabel: "Paper 1" },
      { value: "A2 Paper 2", chipLabel: "Paper 2" },
      { value: "A2 Paper 3", chipLabel: "Paper 3" },
      { value: "A2 Paper 4", chipLabel: "Paper 4" },
      { value: "A2 Paper 5", chipLabel: "Paper 5" },
    ],
  },
  {
    id: "other",
    heading: "Other common slots",
    description: "Use when your timetable lists it this way.",
    items: [{ value: "Practical", chipLabel: "Practical exam" }],
  },
];

/** Flat list of stored suggestion strings (e.g. tests, migration). */
export const PAPER_SUGGESTIONS = EXAM_PAPER_SUGGESTION_GROUPS.flatMap((g) =>
  g.items.map((i) => i.value),
);

export function readExamSchedule(): ExamScheduleState {
  if (typeof window === "undefined") return emptySchedule();

  const raw = studyStorageGetItem(EXAM_SCHEDULE_STORAGE_KEY);
  if (!raw) return emptySchedule();

  try {
    const parsed = JSON.parse(raw) as ExamScheduleState;
    if (!parsed || !Array.isArray(parsed.entries)) return emptySchedule();
    return {
      entries: parsed.entries
        .filter(isValidEntry)
        .sort((a, b) => a.date.localeCompare(b.date) || a.paper.localeCompare(b.paper)),
      updatedAt: typeof parsed.updatedAt === "number" ? parsed.updatedAt : Date.now(),
    };
  } catch {
    return emptySchedule();
  }
}

export function writeExamSchedule(state: ExamScheduleState): void {
  const payload: ExamScheduleState = {
    entries: state.entries.filter(isValidEntry).sort((a, b) => a.date.localeCompare(b.date)),
    updatedAt: Date.now(),
  };
  studyStorageSetItem(EXAM_SCHEDULE_STORAGE_KEY, JSON.stringify(payload));
}

export function addExamScheduleEntry(input: {
  subject: ExamSubjectId;
  paper: string;
  date: string;
}): ExamScheduleState {
  const current = readExamSchedule();
  const entry: ExamScheduleEntry = {
    id: crypto.randomUUID(),
    subject: input.subject,
    paper: input.paper.trim(),
    date: input.date,
    updatedAt: Date.now(),
  };
  const next = { entries: [...current.entries, entry], updatedAt: Date.now() };
  writeExamSchedule(next);
  return next;
}

export function removeExamScheduleEntry(id: string): ExamScheduleState {
  const current = readExamSchedule();
  const next = {
    entries: current.entries.filter((e) => e.id !== id),
    updatedAt: Date.now(),
  };
  writeExamSchedule(next);
  return next;
}

export type UpcomingExam = ExamScheduleEntry & {
  daysUntil: number;
  label: string;
};

export function getUpcomingExams(state: ExamScheduleState, now = new Date()): UpcomingExam[] {
  const today = localDateKey(now);
  return state.entries
    .map((entry) => {
      const daysUntil = daysBetweenLocal(today, entry.date);
      return {
        ...entry,
        daysUntil,
        label: formatEntryLabel(entry),
      };
    })
    .filter((entry) => entry.daysUntil >= 0)
    .sort((a, b) => a.date.localeCompare(b.date) || a.paper.localeCompare(b.paper));
}

export function getNextUpcomingExam(state: ExamScheduleState, now = new Date()): UpcomingExam | null {
  return getUpcomingExams(state, now)[0] ?? null;
}

export function formatDaysUntil(days: number): string {
  if (days < 0) return "Past";
  if (days === 0) return "Today";
  if (days === 1) return "1 day";
  return `${days} days`;
}

export function formatEntryLabel(entry: Pick<ExamScheduleEntry, "subject" | "paper">): string {
  const subject =
    EXAM_SUBJECTS.find((s) => s.id === entry.subject)?.label ?? entry.subject;
  return `${subject} · ${entry.paper}`;
}

function isValidEntry(value: unknown): value is ExamScheduleEntry {
  if (!value || typeof value !== "object") return false;
  const e = value as ExamScheduleEntry;
  return (
    typeof e.id === "string" &&
    (e.subject === "physics" || e.subject === "chemistry" || e.subject === "biology") &&
    typeof e.paper === "string" &&
    e.paper.trim().length > 0 &&
    /^\d{4}-\d{2}-\d{2}$/.test(e.date)
  );
}

function emptySchedule(): ExamScheduleState {
  return { entries: [], updatedAt: Date.now() };
}

