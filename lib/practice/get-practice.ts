import type { SubtopicPracticePack } from "./types";

type PracticeMap = Record<string, SubtopicPracticePack>;

const CHEMISTRY_TOPIC_LOADERS: Record<number, () => Promise<PracticeMap>> = {
  1: async () => (await import("./chemistry-topic1-practice")).CHEMISTRY_TOPIC1_PRACTICE,
  2: async () => (await import("./chemistry-topic2-practice")).CHEMISTRY_TOPIC2_PRACTICE,
  3: async () => (await import("./chemistry-topic3-practice")).CHEMISTRY_TOPIC3_PRACTICE,
  4: async () => (await import("./chemistry-topic4-practice")).CHEMISTRY_TOPIC4_PRACTICE,
  5: async () => (await import("./chemistry-topic5-practice")).CHEMISTRY_TOPIC5_PRACTICE,
  6: async () => (await import("./chemistry-topic6-practice")).CHEMISTRY_TOPIC6_PRACTICE,
  7: async () => (await import("./chemistry-topic7-practice")).CHEMISTRY_TOPIC7_PRACTICE,
  8: async () => (await import("./chemistry-topic8-practice")).CHEMISTRY_TOPIC8_PRACTICE,
  9: async () => (await import("./chemistry-topic9-practice")).CHEMISTRY_TOPIC9_PRACTICE,
  10: async () => (await import("./chemistry-topic10-practice")).CHEMISTRY_TOPIC10_PRACTICE,
  11: async () => (await import("./chemistry-topic11-practice")).CHEMISTRY_TOPIC11_PRACTICE,
  12: async () => (await import("./chemistry-topic12-practice")).CHEMISTRY_TOPIC12_PRACTICE,
  13: async () => (await import("./chemistry-topic13-practice")).CHEMISTRY_TOPIC13_PRACTICE,
  14: async () => (await import("./chemistry-topic14-practice")).CHEMISTRY_TOPIC14_PRACTICE,
  15: async () => (await import("./chemistry-topic15-practice")).CHEMISTRY_TOPIC15_PRACTICE,
  16: async () => (await import("./chemistry-topic16-practice")).CHEMISTRY_TOPIC16_PRACTICE,
  17: async () => (await import("./chemistry-topic17-practice")).CHEMISTRY_TOPIC17_PRACTICE,
  18: async () => (await import("./chemistry-topic18-practice")).CHEMISTRY_TOPIC18_PRACTICE,
  19: async () => (await import("./chemistry-topic19-practice")).CHEMISTRY_TOPIC19_PRACTICE,
  20: async () => (await import("./chemistry-topic20-practice")).CHEMISTRY_TOPIC20_PRACTICE,
  21: async () => (await import("./chemistry-topic21-practice")).CHEMISTRY_TOPIC21_PRACTICE,
  22: async () => (await import("./chemistry-topic22-practice")).CHEMISTRY_TOPIC22_PRACTICE,
  23: async () => (await import("./chemistry-topic23-practice")).CHEMISTRY_TOPIC23_PRACTICE,
  24: async () => (await import("./chemistry-topic24-practice")).CHEMISTRY_TOPIC24_PRACTICE,
  25: async () => (await import("./chemistry-topic25-practice")).CHEMISTRY_TOPIC25_PRACTICE,
  26: async () => (await import("./chemistry-topic26-practice")).CHEMISTRY_TOPIC26_PRACTICE,
  27: async () => (await import("./chemistry-topic27-practice")).CHEMISTRY_TOPIC27_PRACTICE,
  28: async () => (await import("./chemistry-topic28-practice")).CHEMISTRY_TOPIC28_PRACTICE,
  29: async () => (await import("./chemistry-topic29-practice")).CHEMISTRY_TOPIC29_PRACTICE,
  30: async () => (await import("./chemistry-topic30-practice")).CHEMISTRY_TOPIC30_PRACTICE,
  31: async () => (await import("./chemistry-topic31-practice")).CHEMISTRY_TOPIC31_PRACTICE,
  32: async () => (await import("./chemistry-topic32-practice")).CHEMISTRY_TOPIC32_PRACTICE,
  33: async () => (await import("./chemistry-topic33-practice")).CHEMISTRY_TOPIC33_PRACTICE,
  34: async () => (await import("./chemistry-topic34-practice")).CHEMISTRY_TOPIC34_PRACTICE,
  35: async () => (await import("./chemistry-topic35-practice")).CHEMISTRY_TOPIC35_PRACTICE,
  36: async () => (await import("./chemistry-topic36-practice")).CHEMISTRY_TOPIC36_PRACTICE,
  37: async () => (await import("./chemistry-topic37-practice")).CHEMISTRY_TOPIC37_PRACTICE,
};

const BIOLOGY_TOPIC_LOADERS: Record<number, () => Promise<PracticeMap>> = {
  1: async () => (await import("./biology-topic1-practice")).BIOLOGY_TOPIC1_PRACTICE,
  2: async () => (await import("./biology-topic2-practice")).BIOLOGY_TOPIC2_PRACTICE,
  3: async () => (await import("./biology-topic3-practice")).BIOLOGY_TOPIC3_PRACTICE,
  4: async () => (await import("./biology-topic4-practice")).BIOLOGY_TOPIC4_PRACTICE,
  5: async () => (await import("./biology-topic5-practice")).BIOLOGY_TOPIC5_PRACTICE,
  6: async () => (await import("./biology-topic6-practice")).BIOLOGY_TOPIC6_PRACTICE,
  7: async () => (await import("./biology-topic7-practice")).BIOLOGY_TOPIC7_PRACTICE,
  8: async () => (await import("./biology-topic8-practice")).BIOLOGY_TOPIC8_PRACTICE,
  9: async () => (await import("./biology-topic9-practice")).BIOLOGY_TOPIC9_PRACTICE,
  10: async () => (await import("./biology-topic10-practice")).BIOLOGY_TOPIC10_PRACTICE,
  11: async () => (await import("./biology-topic11-practice")).BIOLOGY_TOPIC11_PRACTICE,
  12: async () => (await import("./biology-topic12-practice")).BIOLOGY_TOPIC12_PRACTICE,
  13: async () => (await import("./biology-topic13-practice")).BIOLOGY_TOPIC13_PRACTICE,
  14: async () => (await import("./biology-topic14-practice")).BIOLOGY_TOPIC14_PRACTICE,
  15: async () => (await import("./biology-topic15-practice")).BIOLOGY_TOPIC15_PRACTICE,
  16: async () => (await import("./biology-topic16-practice")).BIOLOGY_TOPIC16_PRACTICE,
  17: async () => (await import("./biology-topic17-practice")).BIOLOGY_TOPIC17_PRACTICE,
  18: async () => (await import("./biology-topic18-practice")).BIOLOGY_TOPIC18_PRACTICE,
  19: async () => (await import("./biology-topic19-practice")).BIOLOGY_TOPIC19_PRACTICE,
};

const PHYSICS_TOPIC_LOADERS: Record<number, () => Promise<PracticeMap>> = {
  1: async () => (await import("./physics-topic1-practice")).PHYSICS_TOPIC1_PRACTICE,
  2: async () => (await import("./physics-topic2-practice")).PHYSICS_TOPIC2_PRACTICE,
  3: async () => (await import("./physics-topic3-practice")).PHYSICS_TOPIC3_PRACTICE,
  4: async () => (await import("./physics-topic4-practice")).PHYSICS_TOPIC4_PRACTICE,
  5: async () => (await import("./physics-topic5-practice")).PHYSICS_TOPIC5_PRACTICE,
  6: async () => (await import("./physics-topic6-practice")).PHYSICS_TOPIC6_PRACTICE,
  7: async () => (await import("./physics-topic7-practice")).PHYSICS_TOPIC7_PRACTICE,
  8: async () => (await import("./physics-topic8-practice")).PHYSICS_TOPIC8_PRACTICE,
  9: async () => (await import("./physics-topic9-practice")).PHYSICS_TOPIC9_PRACTICE,
  10: async () => (await import("./physics-topic10-practice")).PHYSICS_TOPIC10_PRACTICE,
  11: async () => (await import("./physics-topic11-practice")).PHYSICS_TOPIC11_PRACTICE,
  12: async () => (await import("./physics-topic12-practice")).PHYSICS_TOPIC12_PRACTICE,
  13: async () => (await import("./physics-topic13-practice")).PHYSICS_TOPIC13_PRACTICE,
  14: async () => (await import("./physics-topic14-practice")).PHYSICS_TOPIC14_PRACTICE,
  15: async () => (await import("./physics-topic15-practice")).PHYSICS_TOPIC15_PRACTICE,
  16: async () => (await import("./physics-topic16-practice")).PHYSICS_TOPIC16_PRACTICE,
  17: async () => (await import("./physics-topic17-practice")).PHYSICS_TOPIC17_PRACTICE,
  18: async () => (await import("./physics-topic18-practice")).PHYSICS_TOPIC18_PRACTICE,
  19: async () => (await import("./physics-topic19-practice")).PHYSICS_TOPIC19_PRACTICE,
  20: async () => (await import("./physics-topic20-practice")).PHYSICS_TOPIC20_PRACTICE,
  21: async () => (await import("./physics-topic21-practice")).PHYSICS_TOPIC21_PRACTICE,
  22: async () => (await import("./physics-topic22-practice")).PHYSICS_TOPIC22_PRACTICE,
  23: async () => (await import("./physics-topic23-practice")).PHYSICS_TOPIC23_PRACTICE,
  24: async () => (await import("./physics-topic24-practice")).PHYSICS_TOPIC24_PRACTICE,
  25: async () => (await import("./physics-topic25-practice")).PHYSICS_TOPIC25_PRACTICE,
};

function normalizeNoteId(noteId: string): string {
  return noteId.trim().replace(/\u2011/g, "-");
}

function topicNumberFromNoteId(noteId: string): number | null {
  const match = /^t(\d+)-\d+$/.exec(noteId);
  return match ? Number(match[1]) : null;
}

export function hasSubtopicPracticePack(subject: string, noteId: string): boolean {
  const subj = subject.toLowerCase();
  const id = normalizeNoteId(noteId);
  const topicNumber = topicNumberFromNoteId(id);
  if (topicNumber === null) return false;

  if (subj === "chemistry") return topicNumber in CHEMISTRY_TOPIC_LOADERS;
  if (subj === "physics") return topicNumber in PHYSICS_TOPIC_LOADERS;
  if (subj === "biology") return topicNumber in BIOLOGY_TOPIC_LOADERS;
  return false;
}

export async function getSubtopicPracticePack(
  subject: string,
  noteId: string,
): Promise<SubtopicPracticePack | null> {
  const subj = subject.toLowerCase();
  const id = normalizeNoteId(noteId);
  const topicNumber = topicNumberFromNoteId(id);
  if (topicNumber === null) return null;

  const loaders =
    subj === "chemistry"
      ? CHEMISTRY_TOPIC_LOADERS
      : subj === "physics"
        ? PHYSICS_TOPIC_LOADERS
        : subj === "biology"
          ? BIOLOGY_TOPIC_LOADERS
          : null;
  const load = loaders?.[topicNumber];
  if (!load) return null;

  const practice = await load();
  return practice[id] ?? null;
}
