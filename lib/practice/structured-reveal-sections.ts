export type StructuredRevealSections = {
  modelAnswerLines: readonly string[];
  secondaryLines: readonly string[];
  secondaryHeading: "Mark scheme" | "Approach notes";
};

/** Separator line inserted when merging tutor pacing into `workedSolution` (physics normalization). */
export const EXAM_TECHNIQUE_SECTION_HEADER = "Exam technique (optional pacing):";

/** Splits pacing hints out of the model-answer list so they are not numbered as exam credit lines. */
export function splitExamTechniqueFromModelAnswer(modelAnswerLines: readonly string[]): {
  coreModelAnswerLines: readonly string[];
  techniqueLines: readonly string[];
} {
  const norm = (s: string) => s.trim().toLowerCase();
  const headerNorm = norm(EXAM_TECHNIQUE_SECTION_HEADER);
  const idx = modelAnswerLines.findIndex((line) => norm(line) === headerNorm);
  if (idx === -1) {
    return { coreModelAnswerLines: modelAnswerLines, techniqueLines: [] };
  }
  return {
    coreModelAnswerLines: modelAnswerLines.slice(0, idx),
    techniqueLines: modelAnswerLines.slice(idx + 1),
  };
}

function normalizeRevealLine(s: string): string {
  const t = s.trim();
  if (!t) return t;
  return t.endsWith(".") ? t : `${t}.`;
}

function workedSolutionLooksLikeHintLines(lines: readonly string[]): boolean {
  return lines.every(
    (line) =>
      line.trim().length < 160 &&
      !/\d/.test(line) &&
      !/[=]/.test(line.replace(/\s/g, "")),
  );
}

/** Same heuristic used by authoring tooling — legacy physics packs often swap fields. */
export function structuredRevealLegacyInvert(
  workedSolution: readonly string[],
  modelAnswerPoints: readonly string[],
): boolean {
  const w = workedSolution.join(" ").trim().length;
  const p = modelAnswerPoints.join(" ").trim().length;

  if (p >= 60 && w > 0 && w < p * 0.62) return true;

  const marksCarryNumericOrEquation = modelAnswerPoints.some(
    (line) => /\d/.test(line) || /=/.test(line.replace(/\s/g, "")),
  );

  // Calculations often pack substitutions into mark bullets while keeping workedSolution to two
  // tutor sentences — sometimes shorter in aggregate length than the hints themselves.
  if (
    p >= 40 &&
    workedSolution.length > 0 &&
    workedSolution.length < modelAnswerPoints.length &&
    workedSolutionLooksLikeHintLines(workedSolution) &&
    marksCarryNumericOrEquation &&
    w <= p * 1.4 + 30
  ) {
    return true;
  }

  return false;
}

function markSchemePrefixRedundantWithModelAnswer(
  modelAnswerLines: readonly string[],
  markSchemeLines: readonly string[],
): boolean {
  if (markSchemeLines.length === 0) return true;
  if (modelAnswerLines.length < markSchemeLines.length) return false;
  return markSchemeLines.every(
    (line, i) => normalizeRevealLine(modelAnswerLines[i] ?? "") === normalizeRevealLine(line),
  );
}

/**
 * STRUCTURED_DRILLS.md assigns full exam prose to `workedSolution` and discrete
 * credit lines to `modelAnswerPoints`. Some older packs (notably parts of
 * physics) swap those roles so learners only see tutor hints under “Model answer”.
 * When that pattern is detected, show `modelAnswerPoints` first and label the
 * hints block “Approach notes” instead of “Mark scheme”.
 */
export function structuredRevealSections(
  workedSolution: readonly string[],
  modelAnswerPoints: readonly string[],
): StructuredRevealSections {
  const invert = structuredRevealLegacyInvert(workedSolution, modelAnswerPoints);

  const base: StructuredRevealSections = invert
    ? {
        modelAnswerLines: modelAnswerPoints,
        secondaryLines: workedSolution,
        secondaryHeading: "Approach notes",
      }
    : {
        modelAnswerLines: workedSolution,
        secondaryLines: modelAnswerPoints,
        secondaryHeading: "Mark scheme",
      };

  if (!invert && markSchemePrefixRedundantWithModelAnswer(base.modelAnswerLines, base.secondaryLines)) {
    return {
      modelAnswerLines: base.modelAnswerLines,
      secondaryLines: [],
      secondaryHeading: base.secondaryHeading,
    };
  }

  return base;
}
