"use client";

/**
 * Cross-device study data: mirrors a subset of localStorage keys in memory,
 * syncs to profiles.study_kv via server action (debounced).
 */

const FLUSH_MS = 1500;

const DAY_MS = 86_400_000;

let memory = new Map<string, string>();
let initialized = false;
/** Browser timer id (avoid NodeJS.Timeout vs number mismatch under @types/node). */
let flushTimer: number | null = null;
let persistFn: ((kv: Record<string, string>) => Promise<void>) | null = null;

export function registerStudyKvPersister(fn: (kv: Record<string, string>) => Promise<void>): void {
  persistFn = fn;
}

export function isStudyStorageKey(key: string): boolean {
  return (
    key.startsWith("practice-session:") ||
    key.startsWith("practice-mixed-session:") ||
    key.startsWith("practice-mistakes-session:") ||
    key.startsWith("practice-last-session:") ||
    key.startsWith("practice-mistakes:") ||
    key === "lattice.study-time.week:v1" ||
    key === "lattice.study-days:v1" ||
    key.startsWith("lattice.recent.")
  );
}

export function initStudyKv(serverKv: Record<string, unknown> | null | undefined): void {
  if (typeof window === "undefined") return;
  if (initialized) return;
  initialized = true;

  const fromServer = normalizeServerRecord(serverKv);
  const fromLocal = collectStudyKeysFromLocalStorage();
  const merged = mergeStudyKeyValues(fromServer, fromLocal);
  memory = new Map(Object.entries(merged));
  for (const [k, v] of memory) {
    try {
      window.localStorage.setItem(k, v);
    } catch {
      /* quota or private mode */
    }
  }
  scheduleFlushToServer();
}

export function studyStorageGetItem(key: string): string | null {
  if (typeof window === "undefined") return null;
  if (!isStudyStorageKey(key)) return window.localStorage.getItem(key);
  if (!initialized) return window.localStorage.getItem(key);
  if (memory.has(key)) return memory.get(key)!;
  // Heal: key may exist in localStorage but not in memory (e.g. pre-init write, rare races).
  const fromDisk = window.localStorage.getItem(key);
  if (fromDisk != null) {
    memory.set(key, fromDisk);
    return fromDisk;
  }
  return null;
}

export function studyStorageSetItem(key: string, value: string): void {
  if (typeof window === "undefined") return;
  if (!isStudyStorageKey(key)) {
    window.localStorage.setItem(key, value);
    return;
  }
  if (!initialized) {
    try {
      window.localStorage.setItem(key, value);
    } catch {
      /* noop */
    }
    return;
  }
  memory.set(key, value);
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* noop */
  }
  scheduleFlushToServer();
}

export function studyStorageRemoveItem(key: string): void {
  if (typeof window === "undefined") return;
  if (!isStudyStorageKey(key)) {
    window.localStorage.removeItem(key);
    return;
  }
  if (!initialized) {
    window.localStorage.removeItem(key);
    return;
  }
  memory.delete(key);
  try {
    window.localStorage.removeItem(key);
  } catch {
    /* noop */
  }
  scheduleFlushToServer();
}

/** Keys currently tracked (after init, matches local study mirror). */
export function studyStorageKeys(): string[] {
  if (typeof window === "undefined") return [];
  if (!initialized) {
    const keys: string[] = [];
    for (let i = 0; i < window.localStorage.length; i += 1) {
      const k = window.localStorage.key(i);
      if (k && isStudyStorageKey(k)) keys.push(k);
    }
    return keys;
  }
  return Array.from(memory.keys());
}

function scheduleFlushToServer(): void {
  if (!persistFn) return;
  if (flushTimer !== null) window.clearTimeout(flushTimer);
  flushTimer = window.setTimeout(() => {
    flushTimer = null;
    const obj = Object.fromEntries(memory);
    void persistFn!(obj);
  }, FLUSH_MS) as unknown as number;
}

function normalizeServerRecord(input: Record<string, unknown> | null | undefined): Record<string, string> {
  if (!input || typeof input !== "object") return {};
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(input)) {
    if (!isStudyStorageKey(k)) continue;
    if (typeof v === "string") out[k] = v;
    else if (v != null) out[k] = String(v);
  }
  return out;
}

function collectStudyKeysFromLocalStorage(): Record<string, string> {
  const out: Record<string, string> = {};
  for (let i = 0; i < window.localStorage.length; i += 1) {
    const k = window.localStorage.key(i);
    if (!k || !isStudyStorageKey(k)) continue;
    const v = window.localStorage.getItem(k);
    if (v != null) out[k] = v;
  }
  return out;
}

function mergeStudyKeyValues(
  server: Record<string, string>,
  local: Record<string, string>,
): Record<string, string> {
  const keys = new Set([...Object.keys(server), ...Object.keys(local)]);
  const out: Record<string, string> = {};
  for (const key of keys) {
    const a = server[key];
    const b = local[key];
    if (a === undefined) {
      if (b !== undefined) out[key] = b;
      continue;
    }
    if (b === undefined) {
      out[key] = a;
      continue;
    }
    out[key] = mergeStudyValueForKey(key, a, b);
  }
  return out;
}

function mergeStudyValueForKey(key: string, a: string, b: string): string {
  if (key === "lattice.study-time.week:v1") return mergeStudyWeekJson(a, b);
  if (key === "lattice.study-days:v1") return mergeStudyDaysJson(a, b);
  if (key.startsWith("practice-mistakes:")) return mergeMistakeListsJson(a, b);
  return pickByUpdatedAt(a, b);
}

function pickByUpdatedAt(a: string, b: string): string {
  try {
    const ja = JSON.parse(a) as { updatedAt?: number };
    const jb = JSON.parse(b) as { updatedAt?: number };
    const ua = typeof ja.updatedAt === "number" ? ja.updatedAt : -1;
    const ub = typeof jb.updatedAt === "number" ? jb.updatedAt : -1;
    if (ua >= 0 || ub >= 0) return ua >= ub ? a : b;
  } catch {
    /* prefer local */
  }
  return b;
}

function mergeStudyWeekJson(a: string, b: string): string {
  const curStart = localDateKey(startOfWeek(new Date()));
  try {
    const ja = JSON.parse(a) as {
      weekStart?: string;
      days?: Record<string, number>;
      updatedAt?: number;
    };
    const jb = JSON.parse(b) as {
      weekStart?: string;
      days?: Record<string, number>;
      updatedAt?: number;
    };
    const ua = typeof ja.updatedAt === "number" ? ja.updatedAt : -1;
    const ub = typeof jb.updatedAt === "number" ? jb.updatedAt : -1;
    if (ua >= 0 && ub >= 0 && ua !== ub) {
      const win = ua >= ub ? ja : jb;
      return JSON.stringify({
        weekStart: curStart,
        days: normalizeWeekDays(win.days, curStart),
        updatedAt: Math.max(ua, ub, Date.now()),
      });
    }
  } catch {
    /* fall through */
  }

  const days: Record<string, number> = {};
  for (const raw of [a, b]) {
    try {
      const w = JSON.parse(raw) as { weekStart?: string; days?: Record<string, unknown> };
      if (w.weekStart !== curStart || !w.days || typeof w.days !== "object") continue;
      for (const [d, s] of Object.entries(w.days)) {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(d) || typeof s !== "number" || !Number.isFinite(s)) continue;
        const sec = Math.max(0, s);
        days[d] = Math.max(days[d] ?? 0, sec);
      }
    } catch {
      /* ignore */
    }
  }
  return JSON.stringify({ weekStart: curStart, days, updatedAt: Date.now() });
}

function normalizeWeekDays(
  days: Record<string, number> | undefined,
  weekStart: string,
): Record<string, number> {
  const start = parseLocalDate(weekStart);
  const out: Record<string, number> = {};
  for (let i = 0; i < 7; i += 1) {
    const d = new Date(start.getTime() + i * DAY_MS);
    const key = localDateKey(d);
    const v = days?.[key];
    if (typeof v === "number" && Number.isFinite(v)) out[key] = Math.max(0, v);
  }
  return out;
}

function mergeStudyDaysJson(a: string, b: string): string {
  const dates = new Set<string>();
  for (const raw of [a, b]) {
    try {
      const parsed = JSON.parse(raw) as unknown;
      if (!Array.isArray(parsed)) continue;
      for (const date of parsed) {
        if (typeof date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(date)) dates.add(date);
      }
    } catch {
      /* ignore */
    }
  }
  return JSON.stringify(Array.from(dates).sort());
}

function mergeMistakeListsJson(a: string, b: string): string {
  const parse = (s: string): unknown[] => {
    try {
      const p = JSON.parse(s);
      return Array.isArray(p) ? p : [];
    } catch {
      return [];
    }
  };
  const merged = new Map<string, unknown>();
  for (const rec of [...parse(a), ...parse(b)]) {
    if (!rec || typeof rec !== "object") continue;
    const r = rec as { id?: string; lastArchivedAt?: number };
    if (typeof r.id !== "string") continue;
    const prev = merged.get(r.id) as { lastArchivedAt?: number } | undefined;
    if (!prev || (r.lastArchivedAt ?? 0) > (prev.lastArchivedAt ?? 0)) merged.set(r.id, rec);
  }
  return JSON.stringify(Array.from(merged.values()));
}

function startOfWeek(date: Date): Date {
  const day = date.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  const start = new Date(date);
  start.setHours(0, 0, 0, 0);
  start.setDate(start.getDate() + diff);
  return start;
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
