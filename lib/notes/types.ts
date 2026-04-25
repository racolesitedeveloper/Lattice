/**
 * Note page content contract.
 * Depth, voice, and coverage: see ./AUTHORING.md
 */
/** One titled block inside the syllabus-aligned body (H3 + body). */
export type NoteSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

/** One of three worked examples on every note page. */
export type WorkedExample = {
  id: string;
  title: string;
  problem: string[];
  solution: string[];
};

/** One of five self-test questions; model answer is hidden until revealed in the UI. */
export type SelfTestItem = {
  id: string;
  question: string;
  /** Shown only after the learner reveals the model answer. */
  modelAnswer: string[];
};

export type NoteDraft = {
  noteId: string;
  /** Short label shown above the title (optional). */
  eyebrow?: string;

  /** Core syllabus-aligned notes (one or more titled subsections). */
  syllabusNotes: NoteSection[];

  /** What examiners commonly penalise or common misconceptions. */
  examinerPitfalls: {
    /** Optional lead-in before the bullet list. */
    intro?: string;
    items: string[];
  };

  /** Exactly three worked examples per note (enforced by authors / content pipeline). */
  workedExamples: readonly [WorkedExample, WorkedExample, WorkedExample];

  /** Exactly five self-test questions per note. */
  selfTest: readonly [SelfTestItem, SelfTestItem, SelfTestItem, SelfTestItem, SelfTestItem];
};

export type NoteMeta = {
  syllabusCode: string;
  topicNumber: number;
  topicTitle: string;
  subtopicCode: string;
  subtopicTitle: string;
};
