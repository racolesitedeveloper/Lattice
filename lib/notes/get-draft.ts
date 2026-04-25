import type { NoteDraft } from "./types";

type DraftMap = Record<string, NoteDraft>;

const PHYSICS_DRAFT_LOADERS: Record<number, () => Promise<DraftMap>> = {
  1: async () => (await import("./physics-topic1-drafts")).PHYSICS_TOPIC1_DRAFTS,
  2: async () => (await import("./physics-topic2-drafts")).PHYSICS_TOPIC2_DRAFTS,
  3: async () => (await import("./physics-topic3-drafts")).PHYSICS_TOPIC3_DRAFTS,
  4: async () => (await import("./physics-topic4-drafts")).PHYSICS_TOPIC4_DRAFTS,
  5: async () => (await import("./physics-topic5-drafts")).PHYSICS_TOPIC5_DRAFTS,
  6: async () => (await import("./physics-topic6-drafts")).PHYSICS_TOPIC6_DRAFTS,
  7: async () => (await import("./physics-topic7-drafts")).PHYSICS_TOPIC7_DRAFTS,
  8: async () => (await import("./physics-topic8-drafts")).PHYSICS_TOPIC8_DRAFTS,
  9: async () => (await import("./physics-topic9-drafts")).PHYSICS_TOPIC9_DRAFTS,
  10: async () => (await import("./physics-topic10-drafts")).PHYSICS_TOPIC10_DRAFTS,
  11: async () => (await import("./physics-topic11-drafts")).PHYSICS_TOPIC11_DRAFTS,
  12: async () => (await import("./physics-topic12-drafts")).PHYSICS_TOPIC12_DRAFTS,
  13: async () => (await import("./physics-topic13-drafts")).PHYSICS_TOPIC13_DRAFTS,
  14: async () => (await import("./physics-topic14-drafts")).PHYSICS_TOPIC14_DRAFTS,
  15: async () => (await import("./physics-topic15-drafts")).PHYSICS_TOPIC15_DRAFTS,
  16: async () => (await import("./physics-topic16-drafts")).PHYSICS_TOPIC16_DRAFTS,
  17: async () => (await import("./physics-topic17-drafts")).PHYSICS_TOPIC17_DRAFTS,
  18: async () => (await import("./physics-topic18-drafts")).PHYSICS_TOPIC18_DRAFTS,
  19: async () => (await import("./physics-topic19-drafts")).PHYSICS_TOPIC19_DRAFTS,
  20: async () => (await import("./physics-topic20-drafts")).PHYSICS_TOPIC20_DRAFTS,
  21: async () => (await import("./physics-topic21-drafts")).PHYSICS_TOPIC21_DRAFTS,
  22: async () => (await import("./physics-topic22-drafts")).PHYSICS_TOPIC22_DRAFTS,
  23: async () => (await import("./physics-topic23-drafts")).PHYSICS_TOPIC23_DRAFTS,
  24: async () => (await import("./physics-topic24-drafts")).PHYSICS_TOPIC24_DRAFTS,
  25: async () => (await import("./physics-topic25-drafts")).PHYSICS_TOPIC25_DRAFTS,
};

const CHEMISTRY_DRAFT_LOADERS: Record<number, () => Promise<DraftMap>> = {
  1: async () => (await import("./chemistry-topic1-drafts")).CHEMISTRY_TOPIC1_DRAFTS,
  2: async () => (await import("./chemistry-topic2-drafts")).CHEMISTRY_TOPIC2_DRAFTS,
  3: async () => (await import("./chemistry-topic3-drafts")).CHEMISTRY_TOPIC3_DRAFTS,
  4: async () => (await import("./chemistry-topic4-drafts")).CHEMISTRY_TOPIC4_DRAFTS,
  5: async () => (await import("./chemistry-topic5-drafts")).CHEMISTRY_TOPIC5_DRAFTS,
  6: async () => (await import("./chemistry-topic6-drafts")).CHEMISTRY_TOPIC6_DRAFTS,
  7: async () => (await import("./chemistry-topic7-drafts")).CHEMISTRY_TOPIC7_DRAFTS,
  8: async () => (await import("./chemistry-topic8-drafts")).CHEMISTRY_TOPIC8_DRAFTS,
  9: async () => (await import("./chemistry-topic9-drafts")).CHEMISTRY_TOPIC9_DRAFTS,
  10: async () => (await import("./chemistry-topic10-drafts")).CHEMISTRY_TOPIC10_DRAFTS,
  11: async () => (await import("./chemistry-topic11-drafts")).CHEMISTRY_TOPIC11_DRAFTS,
  12: async () => (await import("./chemistry-topic12-drafts")).CHEMISTRY_TOPIC12_DRAFTS,
  13: async () => (await import("./chemistry-topic13-drafts")).CHEMISTRY_TOPIC13_DRAFTS,
  14: async () => (await import("./chemistry-topic14-drafts")).CHEMISTRY_TOPIC14_DRAFTS,
  15: async () => (await import("./chemistry-topic15-drafts")).CHEMISTRY_TOPIC15_DRAFTS,
  16: async () => (await import("./chemistry-topic16-drafts")).CHEMISTRY_TOPIC16_DRAFTS,
  17: async () => (await import("./chemistry-topic17-drafts")).CHEMISTRY_TOPIC17_DRAFTS,
  18: async () => (await import("./chemistry-topic18-drafts")).CHEMISTRY_TOPIC18_DRAFTS,
  19: async () => (await import("./chemistry-topic19-drafts")).CHEMISTRY_TOPIC19_DRAFTS,
  20: async () => (await import("./chemistry-topic20-drafts")).CHEMISTRY_TOPIC20_DRAFTS,
  21: async () => (await import("./chemistry-topic21-drafts")).CHEMISTRY_TOPIC21_DRAFTS,
  22: async () => (await import("./chemistry-topic22-drafts")).CHEMISTRY_TOPIC22_DRAFTS,
  23: async () => (await import("./chemistry-topic23-drafts")).CHEMISTRY_TOPIC23_DRAFTS,
  24: async () => (await import("./chemistry-topic24-drafts")).CHEMISTRY_TOPIC24_DRAFTS,
  25: async () => (await import("./chemistry-topic25-drafts")).CHEMISTRY_TOPIC25_DRAFTS,
  26: async () => (await import("./chemistry-topic26-drafts")).CHEMISTRY_TOPIC26_DRAFTS,
  27: async () => (await import("./chemistry-topic27-drafts")).CHEMISTRY_TOPIC27_DRAFTS,
  28: async () => (await import("./chemistry-topic28-drafts")).CHEMISTRY_TOPIC28_DRAFTS,
  29: async () => (await import("./chemistry-topic29-drafts")).CHEMISTRY_TOPIC29_DRAFTS,
  30: async () => (await import("./chemistry-topic30-drafts")).CHEMISTRY_TOPIC30_DRAFTS,
  31: async () => (await import("./chemistry-topic31-drafts")).CHEMISTRY_TOPIC31_DRAFTS,
  32: async () => (await import("./chemistry-topic32-drafts")).CHEMISTRY_TOPIC32_DRAFTS,
  33: async () => (await import("./chemistry-topic33-drafts")).CHEMISTRY_TOPIC33_DRAFTS,
  34: async () => (await import("./chemistry-topic34-drafts")).CHEMISTRY_TOPIC34_DRAFTS,
  35: async () => (await import("./chemistry-topic35-drafts")).CHEMISTRY_TOPIC35_DRAFTS,
  36: async () => (await import("./chemistry-topic36-drafts")).CHEMISTRY_TOPIC36_DRAFTS,
  37: async () => (await import("./chemistry-topic37-drafts")).CHEMISTRY_TOPIC37_DRAFTS,
};

const BIOLOGY_DRAFT_LOADERS: Record<number, () => Promise<DraftMap>> = {
  1: async () => (await import("./biology-topic1-drafts")).BIOLOGY_TOPIC1_DRAFTS,
  2: async () => (await import("./biology-topic2-drafts")).BIOLOGY_TOPIC2_DRAFTS,
  3: async () => (await import("./biology-topic3-drafts")).BIOLOGY_TOPIC3_DRAFTS,
  4: async () => (await import("./biology-topic4-drafts")).BIOLOGY_TOPIC4_DRAFTS,
  5: async () => (await import("./biology-topic5-drafts")).BIOLOGY_TOPIC5_DRAFTS,
  6: async () => (await import("./biology-topic6-drafts")).BIOLOGY_TOPIC6_DRAFTS,
  7: async () => (await import("./biology-topic7-drafts")).BIOLOGY_TOPIC7_DRAFTS,
  8: async () => (await import("./biology-topic8-drafts")).BIOLOGY_TOPIC8_DRAFTS,
  9: async () => (await import("./biology-topic9-drafts")).BIOLOGY_TOPIC9_DRAFTS,
  10: async () => (await import("./biology-topic10-drafts")).BIOLOGY_TOPIC10_DRAFTS,
  11: async () => (await import("./biology-topic11-drafts")).BIOLOGY_TOPIC11_DRAFTS,
  12: async () => (await import("./biology-topic12-drafts")).BIOLOGY_TOPIC12_DRAFTS,
  13: async () => (await import("./biology-topic13-drafts")).BIOLOGY_TOPIC13_DRAFTS,
  14: async () => (await import("./biology-topic14-drafts")).BIOLOGY_TOPIC14_DRAFTS,
  15: async () => (await import("./biology-topic15-drafts")).BIOLOGY_TOPIC15_DRAFTS,
  16: async () => (await import("./biology-topic16-drafts")).BIOLOGY_TOPIC16_DRAFTS,
  17: async () => (await import("./biology-topic17-drafts")).BIOLOGY_TOPIC17_DRAFTS,
  18: async () => (await import("./biology-topic18-drafts")).BIOLOGY_TOPIC18_DRAFTS,
  19: async () => (await import("./biology-topic19-drafts")).BIOLOGY_TOPIC19_DRAFTS,
};

function normalizeNoteId(noteId: string): string {
  return noteId.trim().replace(/\u2011/g, "-");
}

function topicNumberFromNoteId(noteId: string): number | null {
  const match = /^t(\d+)-\d+$/.exec(noteId);
  return match ? Number(match[1]) : null;
}

export async function getNoteDraft(subject: string, noteId: string): Promise<NoteDraft | null> {
  const subj = subject.toLowerCase();
  const id = normalizeNoteId(noteId);
  const topicNumber = topicNumberFromNoteId(id);
  if (topicNumber === null) return null;

  const loaders =
    subj === "physics"
      ? PHYSICS_DRAFT_LOADERS
      : subj === "chemistry"
        ? CHEMISTRY_DRAFT_LOADERS
        : subj === "biology"
          ? BIOLOGY_DRAFT_LOADERS
          : null;
  const load = loaders?.[topicNumber];
  if (!load) return null;

  const drafts = await load();
  return drafts[id] ?? null;
}
