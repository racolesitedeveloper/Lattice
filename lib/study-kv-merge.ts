import { DAY_MS, localDateKey, parseLocalDate, startOfWeek } from "@/lib/calendar";

/** Merge two study-week JSON blobs; per-day max for the current local week. */
export function mergeStudyWeekJson(a: string, b: string, now = new Date()): string {
  const curStart = localDateKey(startOfWeek(now));
  const days: Record<string, number> = {};
  let maxUpdated = Date.now();

  for (const raw of [a, b]) {
    try {
      const w = JSON.parse(raw) as {
        weekStart?: string;
        days?: Record<string, unknown>;
        updatedAt?: number;
      };
      if (typeof w.updatedAt === "number") maxUpdated = Math.max(maxUpdated, w.updatedAt);

      const mapped =
        w.weekStart === curStart
          ? sanitizeWeekDays(w.days)
          : normalizeWeekDays(w.days, curStart);

      for (const [d, sec] of Object.entries(mapped)) {
        days[d] = Math.max(days[d] ?? 0, sec);
      }
    } catch {
      /* ignore malformed blob */
    }
  }

  return JSON.stringify({ weekStart: curStart, days, updatedAt: maxUpdated });
}

function sanitizeWeekDays(days: Record<string, unknown> | undefined): Record<string, number> {
  const out: Record<string, number> = {};
  if (!days || typeof days !== "object") return out;
  for (const [d, s] of Object.entries(days)) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(d) || typeof s !== "number" || !Number.isFinite(s)) continue;
    out[d] = Math.max(0, s);
  }
  return out;
}

function normalizeWeekDays(
  days: Record<string, unknown> | undefined,
  weekStart: string,
): Record<string, number> {
  const start = parseLocalDate(weekStart);
  const out: Record<string, number> = {};
  for (let i = 0; i < 7; i += 1) {
    const d = new Date(start.getTime() + i * DAY_MS);
    const key = localDateKey(d);
    const raw = days?.[key];
    if (typeof raw === "number" && Number.isFinite(raw)) out[key] = Math.max(0, raw);
  }
  return out;
}
