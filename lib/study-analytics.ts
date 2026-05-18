/**
 * Dashboard drill analytics: one outcome per logical question (subject + subtopic + drill id).
 * Latest session write wins when the same drill was answered in multiple session types.
 */

export type StudySubjectId = "physics" | "chemistry" | "biology";
export type DrillOutcome = "correct" | "needs-work";

export type DrillOutcomeRecord = {
  subject: StudySubjectId;
  noteId: string;
  drillId: string;
  outcome: DrillOutcome;
  updatedAt: number;
};

export type MasteryTotals = {
  correct: number;
  needsWork: number;
  answered: number;
  accuracy: number | null;
};

export type WeakAreaCandidate = {
  noteId: string;
  correct: number;
  needsWork: number;
  answered: number;
  accuracy: number;
};

const PRACTICE_KEY =
  /^practice-session:(physics|chemistry|biology):([^:]+)$/;
const MIXED_KEY =
  /^practice-(?:mixed|mistakes)-session:(physics|chemistry|biology):/;

export function parsePracticeStorageEntries(
  keys: string[],
  getValue: (key: string) => string | null,
): DrillOutcomeRecord[] {
  const latest = new Map<string, DrillOutcomeRecord>();

  for (const key of keys) {
    if (!PRACTICE_KEY.test(key) && !MIXED_KEY.test(key)) continue;

    const raw = getValue(key);
    if (!raw) continue;

    let parsed: {
      drillOutcomes?: Record<string, unknown>;
      outcomes?: Record<string, unknown>;
      updatedAt?: number;
    };
    try {
      parsed = JSON.parse(raw) as typeof parsed;
    } catch {
      continue;
    }

    const updatedAt = typeof parsed.updatedAt === "number" ? parsed.updatedAt : 0;
    const subject = subjectFromStorageKey(key);
    if (!subject) continue;

    if (PRACTICE_KEY.test(key)) {
      const noteId = key.split(":")[2]!;
      ingestOutcomes(latest, subject, noteId, parsed.drillOutcomes, updatedAt);
      continue;
    }

    ingestCompoundOutcomes(latest, subject, parsed.outcomes, updatedAt);
  }

  return Array.from(latest.values());
}

export function masteryTotalsForSubject(
  records: DrillOutcomeRecord[],
  subject: StudySubjectId,
): MasteryTotals {
  let correct = 0;
  let needsWork = 0;
  for (const row of records) {
    if (row.subject !== subject) continue;
    if (row.outcome === "correct") correct += 1;
    else needsWork += 1;
  }
  const answered = correct + needsWork;
  return {
    correct,
    needsWork,
    answered,
    accuracy: answered > 0 ? Math.round((correct / answered) * 100) : null,
  };
}

export function globalMasteryTotals(records: DrillOutcomeRecord[]): MasteryTotals {
  let correct = 0;
  let needsWork = 0;
  for (const row of records) {
    if (row.outcome === "correct") correct += 1;
    else needsWork += 1;
  }
  const answered = correct + needsWork;
  return {
    correct,
    needsWork,
    answered,
    accuracy: answered > 0 ? Math.round((correct / answered) * 100) : null,
  };
}

export function weakAreaCandidatesBySubject(
  records: DrillOutcomeRecord[],
): Map<StudySubjectId, WeakAreaCandidate> {
  const bySubject = new Map<StudySubjectId, Map<string, { correct: number; needsWork: number }>>();

  for (const row of records) {
    const perNote = bySubject.get(row.subject) ?? new Map();
    const total = perNote.get(row.noteId) ?? { correct: 0, needsWork: 0 };
    if (row.outcome === "correct") total.correct += 1;
    else total.needsWork += 1;
    perNote.set(row.noteId, total);
    bySubject.set(row.subject, perNote);
  }

  const weakest = new Map<StudySubjectId, WeakAreaCandidate>();
  for (const [subject, notes] of bySubject) {
    const ranked = Array.from(notes.entries())
      .map(([noteId, total]) => {
        const answered = total.correct + total.needsWork;
        return {
          noteId,
          ...total,
          answered,
          accuracy: answered > 0 ? Math.round((total.correct / answered) * 100) : 100,
        };
      })
      .filter((area) => area.answered > 0)
      .sort((a, b) => a.accuracy - b.accuracy || b.needsWork - a.needsWork);

    if (ranked[0]) weakest.set(subject, ranked[0]);
  }

  return weakest;
}

function ingestOutcomes(
  latest: Map<string, DrillOutcomeRecord>,
  subject: StudySubjectId,
  noteId: string,
  outcomes: Record<string, unknown> | undefined,
  updatedAt: number,
): void {
  if (!outcomes || typeof outcomes !== "object") return;
  for (const [drillId, value] of Object.entries(outcomes)) {
    if (value !== "correct" && value !== "needs-work") continue;
    upsert(latest, subject, noteId, drillId, value, updatedAt);
  }
}

function ingestCompoundOutcomes(
  latest: Map<string, DrillOutcomeRecord>,
  subject: StudySubjectId,
  outcomes: Record<string, unknown> | undefined,
  updatedAt: number,
): void {
  if (!outcomes || typeof outcomes !== "object") return;
  for (const [compound, value] of Object.entries(outcomes)) {
    if (value !== "correct" && value !== "needs-work") continue;
    const split = compound.indexOf(":");
    if (split <= 0) continue;
    const noteId = compound.slice(0, split);
    const drillId = compound.slice(split + 1);
    if (!noteId || !drillId) continue;
    upsert(latest, subject, noteId, drillId, value, updatedAt);
  }
}

function upsert(
  latest: Map<string, DrillOutcomeRecord>,
  subject: StudySubjectId,
  noteId: string,
  drillId: string,
  outcome: DrillOutcome,
  updatedAt: number,
): void {
  const id = `${subject}:${noteId}:${drillId}`;
  const prev = latest.get(id);
  if (prev && prev.updatedAt > updatedAt) return;
  latest.set(id, { subject, noteId, drillId, outcome, updatedAt });
}

function subjectFromStorageKey(key: string): StudySubjectId | null {
  const match = /^(?:practice-session|practice-mixed-session|practice-mistakes-session):(physics|chemistry|biology):/.exec(
    key,
  );
  return (match?.[1] as StudySubjectId | undefined) ?? null;
}
