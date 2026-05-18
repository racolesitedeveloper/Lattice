/**
 * One-off / repeatable authoring fix: physics structured drills often stored tutor hints in
 * `workedSolution` and credit lines in `modelAnswerPoints`. Rewrites `workedSolution` so it
 * leads with the substantive marking lines (normalized sentences) plus optional pacing hints.
 *
 * Run: npx tsx scripts/normalize-physics-structured-drills.ts
 */

import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import * as ts from "typescript";
import { EXAM_TECHNIQUE_SECTION_HEADER, structuredRevealLegacyInvert } from "../lib/practice/structured-reveal-sections";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const PRACTICE_DIR = path.join(SCRIPT_DIR, "..", "lib", "practice");

function normalizeLine(s: string): string {
  const t = s.trim();
  if (!t) return t;
  return t.endsWith(".") ? t : `${t}.`;
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

function buildNormalizedWorkedSolution(modelAnswerPoints: string[], workedSolution: string[]): string[] {
  const substantive = modelAnswerPoints.map((line) => normalizeLine(line));
  const hints = workedSolution.map((line) => normalizeLine(line)).filter(Boolean);
  if (hints.length === 0) return substantive;
  return [...substantive, EXAM_TECHNIQUE_SECTION_HEADER, ...hints];
}

function transformPhysicsPracticeSource(
  sourceText: string,
  filePath: string,
): { text: string; replacements: number } {
  const sourceFile = ts.createSourceFile(filePath, sourceText, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  const replacements: { start: number; end: number; text: string }[] = [];

  function visit(node: ts.Node): void {
    if (ts.isPropertyAssignment(node) && node.name.getText() === "kind") {
      const init = node.initializer;
      if (ts.isStringLiteral(init) && init.text === "structured") {
        const drillObj = node.parent;
        if (!ts.isObjectLiteralExpression(drillObj)) return;

        const workedProp = findProperty(drillObj, "workedSolution");
        const pointsProp = findProperty(drillObj, "modelAnswerPoints");
        if (!workedProp || !pointsProp) return;

        const workedArr = extractStringArray(workedProp.initializer);
        const pointsArr = extractStringArray(pointsProp.initializer);
        if (!workedArr || !pointsArr) return;

        if (!structuredRevealLegacyInvert(workedArr, pointsArr)) return;

        const normalized = buildNormalizedWorkedSolution(pointsArr, workedArr);
        if (
          normalized.length === workedArr.length &&
          normalized.every((s, i) => s === workedArr[i])
        ) {
          return;
        }

        const arrLit = workedProp.initializer;
        if (!ts.isArrayLiteralExpression(arrLit)) return;
        const start = arrLit.getStart(sourceFile);
        const end = arrLit.getEnd();
        replacements.push({
          start,
          end,
          text: renderTsStringArrayLiteral(normalized),
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
  return { text: out, replacements: replacements.length };
}

function main(): void {
  const names = fs.readdirSync(PRACTICE_DIR).filter((n) => /^physics-topic\d+-practice\.ts$/.test(n));
  names.sort();

  let filesChanged = 0;
  let drillsUpdated = 0;

  for (const name of names) {
    const fp = path.join(PRACTICE_DIR, name);
    const before = fs.readFileSync(fp, "utf8");
    const { text: after, replacements } = transformPhysicsPracticeSource(before, fp);
    if (after !== before) {
      filesChanged += 1;
      drillsUpdated += replacements;
      fs.writeFileSync(fp, after, "utf8");
      console.log(`updated ${name} (${replacements} drills)`);
    }
  }

  console.log(`\nFiles changed: ${filesChanged}`);
  console.log(`Structured drills patched: ${drillsUpdated}`);
}

main();
