/**
 * Downloads the official Cambridge International 9702 syllabus PDF
 * (2025–2027) into ./tmp/ for local parsing or reference.
 *
 * Copyright remains with Cambridge University Press & Assessment.
 * Run: node scripts/fetch-9702-syllabus-pdf.mjs
 */

import fs from "node:fs";
import https from "node:https";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const OUT_DIR = path.join(ROOT, "tmp");
const OUT_FILE = path.join(OUT_DIR, "9702-2025-2027-syllabus.pdf");
const URL =
  "https://www.cambridgeinternational.org/Images/664565-2025-2027-syllabus.pdf";

fs.mkdirSync(OUT_DIR, { recursive: true });

https
  .get(URL, (res) => {
    if (res.statusCode !== 200) {
      console.error("HTTP", res.statusCode);
      process.exit(1);
    }
    const dest = fs.createWriteStream(OUT_FILE);
    res.pipe(dest);
    dest.on("finish", () => {
      console.log("Saved:", OUT_FILE);
    });
  })
  .on("error", (err) => {
    console.error(err);
    process.exit(1);
  });
