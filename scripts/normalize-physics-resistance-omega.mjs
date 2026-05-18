/**
 * Use Ω for resistance unit in physics electricity notes (keep ω for angular frequency).
 * Run: node scripts/normalize-physics-resistance-omega.mjs
 */

import fs from "node:fs";
import path from "node:path";

const ROOT = path.join(import.meta.dirname, "..", "lib", "notes");
const FILES = [
  "physics-topic9-drafts.ts",
  "physics-topic10-drafts.ts",
  "physics-topic19-drafts.ts",
];

function normalizeResistanceOhm(text) {
  let out = text;
  out = out.replace(/\b(\d[\d.×x10⁻⁰¹²³⁴⁵⁶⁷⁸⁹]*)\s*ohm\b/gi, "$1 Ω");
  out = out.replace(/\bohm\s*m\b/gi, "Ω m");
  out = out.replace(/\bohm\)/g, "Ω)");
  out = out.replace(/\(ohm\)/gi, "(Ω)");
  out = out.replace(/unit is the ohm \(ohm\)/gi, "unit is the ohm (Ω)");
  out = out.replace(/unit of stress, Pa, because strain is dimensionless/g, "unit of stress, Pa, because strain is dimensionless");
  out = out.replace(/,\s*ohm,/g, ", Ω,");
  out = out.replace(/"\s*(\d[\d.]*)\s*ohm/g, '"$1 Ω');
  return out;
}

for (const f of FILES) {
  const fp = path.join(ROOT, f);
  const before = fs.readFileSync(fp, "utf8");
  const after = normalizeResistanceOhm(before);
  if (after !== before) {
    fs.writeFileSync(fp, after, "utf8");
    const n = (before.match(/\bohm\b/gi) || []).length - (after.match(/\bohm\b/gi) || []).length;
    console.log(`${f}: updated (${n} ohm→Ω replacements approx)`);
  } else {
    console.log(`${f}: no change`);
  }
}
