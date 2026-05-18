import { daysBetweenLocal, localDateKey, startOfLocalDay } from "@/lib/calendar";

export type ExamPeriod = "may-june" | "oct-nov";

export type ExamSessionCountdown = {
  days: number;
  label: string;
  formattedDate: string;
};

export function getExamSessionCountdown(
  period: ExamPeriod | null,
  now = new Date(),
): ExamSessionCountdown | null {
  if (!period) return null;

  const todayKey = localDateKey(now);
  const window = getNextSessionWindow(period, now);
  const days = Math.max(0, daysBetweenLocal(todayKey, localDateKey(window.start)));
  const formattedDate = `${period === "may-june" ? "May/June" : "Oct/Nov"} ${window.year}`;

  return {
    days,
    formattedDate,
    label:
      days === 0
        ? "Session window is open"
        : `${days} ${days === 1 ? "day" : "days"} until the session opens`,
  };
}

export function getNextSessionWindow(
  period: ExamPeriod,
  refDate: Date,
): { year: number; start: Date; end: Date } {
  const year = refDate.getFullYear();
  const monthStart = period === "may-june" ? 4 : 9;
  const monthEnd = period === "may-june" ? 5 : 10;
  const window = {
    year,
    start: new Date(year, monthStart, 1),
    end: new Date(year, monthEnd + 1, 0),
  };

  const today = startOfLocalDay(refDate);
  if (today.getTime() <= window.end.getTime()) return window;

  return {
    year: year + 1,
    start: new Date(year + 1, monthStart, 1),
    end: new Date(year + 1, monthEnd + 1, 0),
  };
}
