export type PracticeDifficulty = 1 | 2 | 3 | 4 | 5;

export type McqOption = {
  id: "A" | "B" | "C" | "D";
  text: string;
};

export type McqDrillQuestion = {
  id: string;
  noteId: string;
  kind: "mcq";
  difficulty: PracticeDifficulty;
  stem: string;
  options: readonly [McqOption, McqOption, McqOption, McqOption];
  correctOptionId: "A" | "B" | "C" | "D";
  explanation: string;
  distractorRationale: {
    A?: string;
    B?: string;
    C?: string;
    D?: string;
  };
  tags: readonly string[];
};

export type StructuredDrillQuestion = {
  id: string;
  noteId: string;
  kind: "structured";
  difficulty: PracticeDifficulty;
  marks: number;
  stem: string;
  /** Discrete mark-bearing statements (what examiners credit). */
  modelAnswerPoints: readonly string[];
  /** Full exam-style wording: sentences that directly answer the stem, in order; not tutor shorthand. */
  workedSolution: readonly string[];
  commonMistake: string;
  tags: readonly string[];
};

export type DrillQuestion = McqDrillQuestion | StructuredDrillQuestion;

export type Flashcard = {
  id: string;
  noteId: string;
  difficulty: PracticeDifficulty;
  front: string;
  back: string;
  examPhrasing: string;
  confusionPair?: string;
  tags: readonly string[];
};

export type TenItems<T> = readonly [T, T, T, T, T, T, T, T, T, T];

/**
 * One subtopic session: exactly **10** drills + **10** flashcards. Drills are the
 * primary place the learner proves they can meet **every** learning outcome for
 * this subtopic; see `lib/practice/STRUCTURED_DRILLS.md` (coverage + exam style).
 */
export type SubtopicPracticePack = {
  noteId: string;
  drills: TenItems<DrillQuestion>;
  flashcards: TenItems<Flashcard>;
};
