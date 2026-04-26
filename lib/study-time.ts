import { studyStorageGetItem, studyStorageSetItem } from "@/lib/study-kv";

export type StudyDay = {
  date: string;
  label: string;
  seconds: number;
};

export type StudyStreak = {
  count: number;
  studiedToday: boolean;
};

type StudyWeek = {
  weekStart: string;
  days: Record<string, number>;
};

const STUDY_WEEK_KEY = "lattice.study-time.week:v1";
const STUDY_DAYS_KEY = "lattice.study-days:v1";
const DAY_MS = 86_400_000;

export function addStudySeconds(seconds: number): void {
  if (typeof window === "undefined" || seconds <= 0) return;
  const today = localDateKey(new Date());
  const week = readWeek();
  week.days[today] = Math.max(0, (week.days[today] ?? 0) + seconds);
  writeWeek(week);
  markStudiedDay(today);
}

export function readCurrentWeekStudy(): StudyDay[] {
  const week = readWeek();
  const start = parseLocalDate(week.weekStart);
  return Array.from({ length: 7 }, (_, i) => {
    const date = new Date(start.getTime() + i * DAY_MS);
    const key = localDateKey(date);
    return {
      date: key,
      label: new Intl.DateTimeFormat(undefined, { weekday: "short" }).format(date),
      seconds: week.days[key] ?? 0,
    };
  });
}

export function readStudyStreak(): StudyStreak {
  if (typeof window === "undefined") return { count: 0, studiedToday: false };
  const dates = readStudiedDays();
  const today = localDateKey(new Date());
  const studiedToday = dates.has(today);
  let cursor = studiedToday ? parseLocalDate(today) : new Date(startOfToday().getTime() - DAY_MS);
  let count = 0;

  while (dates.has(localDateKey(cursor))) {
    count += 1;
    cursor = new Date(cursor.getTime() - DAY_MS);
  }

  return { count, studiedToday };
}

function readWeek(): StudyWeek {
  const currentWeekStart = localDateKey(startOfWeek(new Date()));
  if (typeof window === "undefined") return { weekStart: currentWeekStart, days: {} };

  try {
    const parsed = JSON.parse(studyStorageGetItem(STUDY_WEEK_KEY) ?? "{}") as Partial<StudyWeek>;
    if (parsed.weekStart !== currentWeekStart || !parsed.days || typeof parsed.days !== "object") {
      const next = { weekStart: currentWeekStart, days: {} };
      writeWeek(next);
      return next;
    }
    return { weekStart: parsed.weekStart, days: sanitizeDays(parsed.days) };
  } catch {
    const next = { weekStart: currentWeekStart, days: {} };
    writeWeek(next);
    return next;
  }
}

function writeWeek(week: StudyWeek): void {
  studyStorageSetItem(STUDY_WEEK_KEY, JSON.stringify({ ...week, updatedAt: Date.now() }));
}

function markStudiedDay(date: string): void {
  const dates = readStudiedDays();
  dates.add(date);
  studyStorageSetItem(STUDY_DAYS_KEY, JSON.stringify(Array.from(dates).sort()));
}

function readStudiedDays(): Set<string> {
  try {
    const parsed = JSON.parse(studyStorageGetItem(STUDY_DAYS_KEY) ?? "[]") as unknown;
    if (!Array.isArray(parsed)) return new Set();
    return new Set(parsed.filter((date): date is string => /^\d{4}-\d{2}-\d{2}$/.test(String(date))));
  } catch {
    return new Set();
  }
}

function sanitizeDays(days: Record<string, unknown>): Record<string, number> {
  const out: Record<string, number> = {};
  for (const [date, seconds] of Object.entries(days)) {
    if (/^\d{4}-\d{2}-\d{2}$/.test(date) && typeof seconds === "number" && Number.isFinite(seconds)) {
      out[date] = Math.max(0, seconds);
    }
  }
  return out;
}

function startOfWeek(date: Date): Date {
  const day = date.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  const start = new Date(date);
  start.setHours(0, 0, 0, 0);
  start.setDate(start.getDate() + diff);
  return start;
}

function startOfToday(): Date {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  return date;
}

function localDateKey(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function parseLocalDate(key: string): Date {
  const [year, month, day] = key.split("-").map(Number);
  return new Date(year ?? 1970, (month ?? 1) - 1, day ?? 1);
}
