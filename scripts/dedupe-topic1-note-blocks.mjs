/**
 * Remove duplicate prose in Topic 1 notes: keep rich blocks, shorten paragraphs to pointers.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.join(import.meta.dirname, "..", "lib", "notes");

function dedupeFile(fileName) {
  const fp = path.join(ROOT, fileName);
  let text = fs.readFileSync(fp, "utf8");
  const re =
    /(id: "[^"]+",[\s\S]*?title: "[^"]+",[\s\S]*?paragraphs: )\[[\s\S]*?\]([\s\S]*?blocks: \[)/g;
  let n = 0;
  text = text.replace(re, (_m, before, after) => {
    n += 1;
    return `${before}[\n          "Structured revision blocks below expand this section with tables, diagrams, and exam points.",\n        ]${after}`;
  });
  if (n > 0) {
    fs.writeFileSync(fp, text, "utf8");
    console.log(`${fileName}: ${n} sections deduped`);
  }
}

dedupeFile("biology-topic1-drafts.ts");
dedupeFile("physics-topic1-drafts.ts");
