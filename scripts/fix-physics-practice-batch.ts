/**
 * Physics practice batch fix (audit item 1):
 * - Remove distractorRationale on the correct MCQ option
 * - Strip "Exam technique (optional pacing):" blocks from workedSolution
 * - When workedSolution duplicated modelAnswerPoints, restore hint lines after the header or keep substantive prose
 *
 * Run: npx tsx scripts/fix-physics-practice-batch.ts
 */

import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import * as ts from "typescript";
import {
  EXAM_TECHNIQUE_SECTION_HEADER,
  splitExamTechniqueFromModelAnswer,
} from "../lib/practice/structured-reveal-sections";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const PRACTICE_DIR = path.join(SCRIPT_DIR, "..", "lib", "practice");

function normalizeLine(s: string): string {
  const t = s.trim();
  if (!t) return t;
  return t.endsWith(".") ? t : `${t}.`;
}

function linesEqual(a: readonly string[], b: readonly string[]): boolean {
  if (a.length !== b.length) return false;
  return a.every((line, i) => line.trim() === b[i]?.trim());
}

function isExamMetaLine(line: string): boolean {
  const t = line.trim().toLowerCase();
  if (t === EXAM_TECHNIQUE_SECTION_HEADER.trim().toLowerCase()) return true;
  if (t.startsWith("exam technique")) return true;
  if (t.includes("optional pacing")) return true;
  return false;
}

/** Prefer post-header hint lines; otherwise keep non-duplicate substantive lines. */
function rebuildWorkedSolution(modelAnswerPoints: string[], workedSolution: string[]): string[] {
  const { coreModelAnswerLines, techniqueLines } = splitExamTechniqueFromModelAnswer(workedSolution);
  const pointsNorm = modelAnswerPoints.map(normalizeLine).filter(Boolean);
  const techniqueNorm = techniqueLines.map(normalizeLine).filter((l) => !isExamMetaLine(l));

  if (techniqueNorm.length > 0 && !linesEqual(techniqueNorm, pointsNorm)) {
    return techniqueNorm;
  }

  const coreNorm = coreModelAnswerLines.map(normalizeLine).filter(Boolean);
  if (coreNorm.length > 0 && !linesEqual(coreNorm, pointsNorm)) {
    return coreNorm;
  }

  const headerIdx = workedSolution.findIndex((line) => isExamMetaLine(line));
  const preHeader =
    headerIdx === -1
      ? workedSolution.map(normalizeLine).filter(Boolean)
      : workedSolution.slice(0, headerIdx).map(normalizeLine).filter(Boolean);
  if (preHeader.length > 0 && !linesEqual(preHeader, pointsNorm)) {
    return preHeader;
  }

  return pointsNorm;
}

function renderTsStringArrayLiteral(elements: readonly string[]): string {
  const innerIndent = "          ";
  const closeIndent = "        ";
  if (elements.length === 0) return `[]`;
  const body = elements.map((e) => `${innerIndent}${JSON.stringify(e)},`).join("\n");
  return `[\n${body}\n${closeIndent}]`;
}

function findProperty(
  obj: ts.ObjectLiteralExpression,
  name: string,
): ts.PropertyAssignment | undefined {
  return obj.properties.find(
    (p): p is ts.PropertyAssignment =>
      ts.isPropertyAssignment(p) && p.name.getText() === name,
  );
}

function extractStringArray(init: ts.Expression): string[] | null {
  if (!ts.isArrayLiteralExpression(init)) return null;
  const out: string[] = [];
  for (const el of init.elements) {
    if (ts.isStringLiteral(el)) {
      out.push(el.text);
      continue;
    }
    if (ts.isNoSubstitutionTemplateLiteral(el)) {
      out.push(el.text);
      continue;
    }
    return null;
  }
  return out;
}

function extractCorrectOptionId(drillObj: ts.ObjectLiteralExpression): string | null {
  const prop = findProperty(drillObj, "correctOptionId");
  if (!prop) return null;
  if (ts.isStringLiteral(prop.initializer)) return prop.initializer.text;
  return null;
}

function extractDistractorObject(
  drillObj: ts.ObjectLiteralExpression,
): ts.ObjectLiteralExpression | null {
  const prop = findProperty(drillObj, "distractorRationale");
  if (!prop || !ts.isObjectLiteralExpression(prop.initializer)) return null;
  return prop.initializer;
}

type Replacement = { start: number; end: number; text: string };

function transformPhysicsPracticeSource(
  sourceText: string,
  filePath: string,
): {
  text: string;
  mcqFixed: number;
  workedFixed: number;
} {
  const sourceFile = ts.createSourceFile(filePath, sourceText, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  const replacements: Replacement[] = [];
  let mcqFixed = 0;
  let workedFixed = 0;

  function visit(node: ts.Node): void {
    if (ts.isPropertyAssignment(node) && node.name.getText() === "kind") {
      const init = node.initializer;
      if (!ts.isStringLiteral(init)) return;
      const drillObj = node.parent;
      if (!ts.isObjectLiteralExpression(drillObj)) return;

      if (init.text === "mcq") {
        const correctId = extractCorrectOptionId(drillObj);
        const distractorObj = extractDistractorObject(drillObj);
        if (!correctId || !distractorObj) return;

        const kept = distractorObj.properties.filter((p) => {
          if (!ts.isPropertyAssignment(p)) return true;
          const key = p.name.getText();
          if (key === correctId) {
            mcqFixed += 1;
            return false;
          }
          return true;
        });

        if (kept.length === distractorObj.properties.length) return;

        const inner = kept
          .map((p) => {
            const text = p.getText(sourceFile);
            return `          ${text},`;
          })
          .join("\n");

        replacements.push({
          start: distractorObj.getStart(sourceFile),
          end: distractorObj.getEnd(),
          text: `{\n${inner}\n        }`,
        });
        return;
      }

      if (init.text === "structured") {
        const workedProp = findProperty(drillObj, "workedSolution");
        const pointsProp = findProperty(drillObj, "modelAnswerPoints");
        if (!workedProp || !pointsProp) return;

        const workedArr = extractStringArray(workedProp.initializer);
        const pointsArr = extractStringArray(pointsProp.initializer);
        if (!workedArr || !pointsArr) return;

        const hasExamBlock = workedArr.some((line) => isExamMetaLine(line));
        const rebuilt = rebuildWorkedSolution(pointsArr, workedArr);
        const needsUpdate =
          hasExamBlock ||
          linesEqual(
            workedArr.map(normalizeLine).filter(Boolean),
            rebuilt,
          ) === false;

        if (!needsUpdate) return;

        const arrLit = workedProp.initializer;
        if (!ts.isArrayLiteralExpression(arrLit)) return;
        workedFixed += 1;
        replacements.push({
          start: arrLit.getStart(sourceFile),
          end: arrLit.getEnd(),
          text: renderTsStringArrayLiteral(rebuilt),
        });
      }
    }
    ts.forEachChild(node, visit);
  }

  visit(sourceFile);

  replacements.sort((a, b) => b.start - a.start);
  let out = sourceText;
  for (const r of replacements) {
    out = out.slice(0, r.start) + r.text + out.slice(r.end);
  }
  return { text: out, mcqFixed, workedFixed };
}

function main(): void {
  const names = fs.readdirSync(PRACTICE_DIR).filter((n) => /^physics-topic\d+-practice\.ts$/.test(n));
  names.sort();

  let filesChanged = 0;
  let totalMcq = 0;
  let totalWorked = 0;

  for (const name of names) {
    const fp = path.join(PRACTICE_DIR, name);
    const before = fs.readFileSync(fp, "utf8");
    const { text: after, mcqFixed, workedFixed } = transformPhysicsPracticeSource(before, fp);
    if (after !== before) {
      filesChanged += 1;
      totalMcq += mcqFixed;
      totalWorked += workedFixed;
      fs.writeFileSync(fp, after, "utf8");
      console.log(`updated ${name} (mcq keys removed: ${mcqFixed}, workedSolution: ${workedFixed})`);
    }
  }

  console.log(`\nFiles changed: ${filesChanged}`);
  console.log(`MCQ correct-option distractors removed: ${totalMcq}`);
  console.log(`Structured workedSolution rebuilt: ${totalWorked}`);
}

main();
