import type { DrillQuestion } from "./types";

export type MistakeReason = "mcq-wrong" | "structured-needs-practice";

export type MistakeRecord = {
  id: string;
  subject: string;
  noteId: string;
  question: DrillQuestion;
  reason: MistakeReason;
  selectedOptionId?: "A" | "B" | "C" | "D";
  topicTitle?: string;
  subtopicTitle?: string;
  subtopicCode?: string;
  firstArchivedAt: number;
  lastArchivedAt: number;
  timesArchived: number;
};

export type ArchiveMistakeInput = {
  subject: string;
  noteId: string;
  question: DrillQuestion;
  reason: MistakeReason;
  selectedOptionId?: "A" | "B" | "C" | "D";
  topicTitle?: string;
  subtopicTitle?: string;
  subtopicCode?: string;
};

const ALL_MISTAKES_KEY = "practice-mistakes:all";

export function mistakesStorageKey(subject: string): string {
  return `practice-mistakes:${subject.toLowerCase()}`;
}

export function readMistakes(subject: string): MistakeRecord[] {
  if (typeof window === "undefined") return [];

  const normalizedSubject = subject.toLowerCase();
  try {
    const subjectRecords = readMistakeList(mistakesStorageKey(normalizedSubject));
    const allRecords = readMistakeList(ALL_MISTAKES_KEY).filter(
      (record) => record.subject === normalizedSubject,
    );
    return mergeMistakeRecords([...subjectRecords, ...allRecords]).sort(
      (a, b) => b.lastArchivedAt - a.lastArchivedAt,
    );
  } catch {
    return [];
  }
}

export function readAllMistakes(): MistakeRecord[] {
  if (typeof window === "undefined") return [];

  try {
    const records: MistakeRecord[] = [];
    for (let i = 0; i < window.localStorage.length; i += 1) {
      const key = window.localStorage.key(i);
      if (!key?.startsWith("practice-mistakes:")) continue;
      records.push(...readMistakeList(key));
    }
    return mergeMistakeRecords(records).sort((a, b) => b.lastArchivedAt - a.lastArchivedAt);
  } catch {
    return [];
  }
}

export function writeMistakes(subject: string, records: MistakeRecord[]): void {
  if (typeof window === "undefined") return;
  const normalizedSubject = subject.toLowerCase();
  const normalizedRecords = records.map((record) => ({
    ...record,
    subject: normalizedSubject,
  }));
  window.localStorage.setItem(mistakesStorageKey(normalizedSubject), JSON.stringify(normalizedRecords));
  writeAllMistakesForSubject(normalizedSubject, normalizedRecords);
}

export function archiveMistake(input: ArchiveMistakeInput): MistakeRecord[] {
  const subject = input.subject.toLowerCase();
  const now = Date.now();
  const id = mistakeId(subject, input.noteId, input.question.id);
  const records = readMistakes(subject);
  const existing = records.find((record) => record.id === id);

  const nextRecord: MistakeRecord = {
    id,
    subject,
    noteId: input.noteId,
    question: input.question,
    reason: input.reason,
    selectedOptionId: input.selectedOptionId,
    topicTitle: input.topicTitle,
    subtopicTitle: input.subtopicTitle,
    subtopicCode: input.subtopicCode,
    firstArchivedAt: existing?.firstArchivedAt ?? now,
    lastArchivedAt: now,
    timesArchived: (existing?.timesArchived ?? 0) + 1,
  };

  const next = [nextRecord, ...records.filter((record) => record.id !== id)].slice(0, 120);
  writeMistakes(subject, next);
  return next;
}

export function removeMistake(subject: string, id: string): MistakeRecord[] {
  const next = readMistakes(subject).filter((record) => record.id !== id);
  writeMistakes(subject, next);
  return next;
}

export function removeMistakeEverywhere(id: string): MistakeRecord[] {
  if (typeof window === "undefined") return [];

  const affectedSubjects = new Set<string>();
  for (const record of readAllMistakes()) {
    if (record.id === id) affectedSubjects.add(record.subject);
  }

  for (const subject of affectedSubjects) {
    removeMistake(subject, id);
  }

  const allRecords = readMistakeList(ALL_MISTAKES_KEY).filter((record) => record.id !== id);
  window.localStorage.setItem(ALL_MISTAKES_KEY, JSON.stringify(allRecords));

  return readAllMistakes();
}

export function clearMistakes(subject: string): void {
  if (typeof window === "undefined") return;
  const normalizedSubject = subject.toLowerCase();
  window.localStorage.removeItem(mistakesStorageKey(normalizedSubject));
  writeAllMistakesForSubject(normalizedSubject, []);
}

export function clearAllMistakes(): void {
  if (typeof window === "undefined") return;

  const keys: string[] = [];
  for (let i = 0; i < window.localStorage.length; i += 1) {
    const key = window.localStorage.key(i);
    if (key?.startsWith("practice-mistakes:")) keys.push(key);
  }
  for (const key of keys) {
    window.localStorage.removeItem(key);
  }
}

function mistakeId(subject: string, noteId: string, questionId: string): string {
  return `${subject}:${noteId}:${questionId}`;
}

function readMistakeList(key: string): MistakeRecord[] {
  const raw = window.localStorage.getItem(key);
  if (!raw) return [];
  const parsed = JSON.parse(raw);
  if (!Array.isArray(parsed)) return [];
  return parsed.filter(isMistakeRecord);
}

function writeAllMistakesForSubject(subject: string, records: MistakeRecord[]): void {
  const others = readMistakeList(ALL_MISTAKES_KEY).filter((record) => record.subject !== subject);
  window.localStorage.setItem(ALL_MISTAKES_KEY, JSON.stringify([...records, ...others].slice(0, 360)));
}

function mergeMistakeRecords(records: MistakeRecord[]): MistakeRecord[] {
  const byId = new Map<string, MistakeRecord>();
  for (const record of records) {
    const previous = byId.get(record.id);
    if (!previous || record.lastArchivedAt > previous.lastArchivedAt) {
      byId.set(record.id, record);
    }
  }
  return Array.from(byId.values());
}

function isMistakeRecord(value: unknown): value is MistakeRecord {
  if (!value || typeof value !== "object") return false;
  const record = value as Partial<MistakeRecord>;
  return (
    typeof record.id === "string" &&
    typeof record.subject === "string" &&
    typeof record.noteId === "string" &&
    typeof record.question?.id === "string" &&
    (record.reason === "mcq-wrong" || record.reason === "structured-needs-practice") &&
    typeof record.firstArchivedAt === "number" &&
    typeof record.lastArchivedAt === "number" &&
    typeof record.timesArchived === "number"
  );
}
