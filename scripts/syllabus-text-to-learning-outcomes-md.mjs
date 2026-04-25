/**
 * Converts pdf-parse text from official Cambridge syllabus PDFs into
 * learning-outcomes markdown (house style aligned with physics-9702-learning-outcomes.md).
 *
 * Usage:
 *   node scripts/syllabus-text-to-learning-outcomes-md.mjs --code 9701 --input tmp/9701-syllabus.txt --out data/syllabus/chemistry-9701-learning-outcomes.md
 *   node scripts/syllabus-text-to-learning-outcomes-md.mjs --code 9700 --input tmp/9700-syllabus.txt --out data/syllabus/biology-9700-learning-outcomes.md
 */

import fs from "node:fs";
import path from "node:path";

const args = {};
for (let i = 2; i < process.argv.length; i++) {
  const a = process.argv[i];
  if (a.startsWith("--")) {
    const key = a.slice(2);
    const next = process.argv[i + 1];
    if (next && !next.startsWith("--")) {
      args[key] = next;
      i++;
    } else args[key] = true;
  }
}

const CODE = args.code;
const INPUT = args.input;
const OUT = args.out;

if (!CODE || !INPUT || !OUT) {
  console.error("Usage: --code 9701|9700 --input path/to.txt --out path/to.md");
  process.exit(1);
}

const PDF_URL =
  CODE === "9701"
    ? "https://www.cambridgeinternational.org/Images/664563-2025-2027-syllabus.pdf"
    : "https://www.cambridgeinternational.org/Images/664560-2025-2027-syllabus.pdf";

const TITLE =
  CODE === "9701"
    ? "Cambridge International AS & A Level Chemistry (9701)"
    : "Cambridge International AS & A Level Biology (9700)";

const A_LEVEL_FIRST_TOPIC = CODE === "9701" ? 23 : 12;

let full = fs.readFileSync(INPUT, "utf8");

function extractSubjectBody(text) {
  const as = text.indexOf("AS Level subject content");
  if (as === -1) return null;
  const fromAs = text.slice(as);
  /* TOC and body both use "4 … Details"; match the assessment section header before Paper 1. */
  const endRe = /\n4\s+Details of the assessment\s*\nPaper 1 Multiple Choice/;
  const m = fromAs.match(endRe);
  return m ? fromAs.slice(0, m.index) : fromAs;
}

const body = extractSubjectBody(full);
if (!body) {
  console.error("Could not extract subject body");
  process.exit(1);
}

function stripFooters(s) {
  return s
    .replace(
      /\s*Cambridge International AS & A Level (Chemistry|Biology) \d{4}[\s\S]*?Back to contents page\s*/g,
      "\n",
    )
    .replace(/\s*www\.cambridgeinternational\.org\/alevel\s*\d*\s*/g, "\n")
    .replace(/\nSubject content\s*\n\d+\s*\n/g, "\n")
    .replace(/\nBack to contents page\s*\n/g, "\n");
}

let work = stripFooters(body).replace(/\r\n/g, "\n");
/* Biology PDF text sometimes omits newline before "Learning outcomes". */
work = work.replace(/([a-z)])(\s*Learning outcomes)/gi, "$1\n$2");

const firstSub = work.search(/\d+\.\d+\s/);
if (firstSub > 0) work = work.slice(firstSub);

function parseSubtopics(text) {
  const chunks = text.split(/\n(?=\d+\.\d+\s)/);
  const blocks = [];
  for (const chunk of chunks) {
    const t = chunk.trim();
    if (!t) continue;
    const loIdx = t.search(/\nLearning outcomes\s*\n/i);
    if (loIdx === -1) continue;
    const head = t.slice(0, loIdx).trim().replace(/\s*\n\s*/g, " ");
    const rest = t.slice(loIdx);
    const cand = rest.search(/Candidates should be able to:\s*\n/i);
    if (cand === -1) continue;
    let loText = rest.slice(cand).replace(/^Candidates should be able to:\s*\n/i, "");
    /* Stop before next topic heading merged into LO text (…\n3 Chemical bonding\n3.1 or …\n2 Biological molecules\nThis…). */
    loText = loText.replace(
      /\n(?=\d{1,2}\s+[A-Z][^\n]{2,100}\n(?:[A-Z][a-z]|\d+\.\d+))/s,
      "\n<<<TOPIC>>>",
    );
    loText = loText.split("<<<TOPIC>>>")[0];
    const titleLine = head.split("\n")[0]?.trim() ?? head;
    const m = titleLine.match(/^(\d+\.\d+)\s+(.+)/);
    if (!m) continue;
    const code = m[1];
    const title = m[2].replace(/\s*\(continued\)\s*$/i, "").trim();
    blocks.push({ code, title, loText });
  }
  return blocks;
}

/** Split learning outcomes on lines starting with a number (syllabus item). */
function loTextToBullets(loText) {
  const rawLines = loText.split("\n").map((l) => l.trim()).filter(Boolean);
  const items = [];
  let cur = "";
  for (const l of rawLines) {
    if (/^\d+\s/.test(l)) {
      if (cur) items.push(cur.trim());
      cur = l.replace(/^\d+\s+/, "").trim();
    } else {
      cur = cur ? `${cur} ${l}` : l;
    }
  }
  if (cur) items.push(cur.trim());
  return items;
}

const blocks = parseSubtopics(work);

let md = `# ${TITLE} — learning outcomes by subtopic

**Source:** [Syllabus for examination in 2025, 2026 and 2027 (PDF)](${PDF_URL}) — Section 3 Subject content.

**Use:** Internal reference for drafting notes. **Not** shown in the app. Registered centres may copy syllabus material for internal use per Cambridge copyright notice.

**Note:** A Level–only learning outcomes are **bold** in the official PDF; bold may be lost below — confirm wording in the PDF before teaching or publishing.

**Convention:** Each bullet is one numbered learning outcome (or sub-part (a), (b)…) as in the syllabus.

**Generated:** Extracted from PDF text with \`scripts/syllabus-text-to-learning-outcomes-md.mjs\` (pdf-parse). Continued subtopics may appear as extra \`###\` blocks. Verify wording, numbering, and formulae against the official PDF.

---
`;

let currentTopicNum = null;
let insertedALevel = false;

function topicNumFromCode(code) {
  return parseInt(code.split(".")[0], 10);
}

for (const b of blocks) {
  const tn = topicNumFromCode(b.code);
  if (!insertedALevel && tn >= A_LEVEL_FIRST_TOPIC) {
    md += `\n## A Level subject content\n\n`;
    insertedALevel = true;
  }
  if (tn !== currentTopicNum) {
    currentTopicNum = tn;
    md += `\n## Topic ${tn}\n\n`;
  }
  md += `### ${b.code} ${b.title}\n\n`;
  const loVerb =
    /\b(define|explain|describe|state|recall|use|calculate|sketch|understand|apply|predict|deduce|show|outline|determine|construct|carry|perform|select|write|identify|measure|compare|suggest|evaluate|analyse|analyze|discuss|derive|recognise|recognize|appreciate|distinguish|classify|interpret)\b/i;

  for (let item of loTextToBullets(b.loText)) {
    item = item.replace(/\s+continued\s*$/i, "").trim();
    item = item.replace(/\bB R CA1\b/g, "BRCA1").replace(/\bB R CA2\b/g, "BRCA2");
    if (
      /^Details of the assessment/i.test(item) ||
      (/^Practical assessment/i.test(item) && item.length > 80) ||
      (/This topic /i.test(item) && item.length > 120) ||
      (!loVerb.test(item) && item.length < 48)
    ) {
      continue;
    }
    md += `- ${item}\n`;
  }
  md += "\n";
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, md.trim() + "\n");
console.log("Wrote", OUT, "subtopics", blocks.length);
