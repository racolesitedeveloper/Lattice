/**
 * Binds the dev server to all interfaces and sets NEXT_DEV_LAN_HOST for
 * `allowedDevOrigins` in next.config.ts. Without it, phone browsers on
 * http://<lan-ip>:3000 hit Next.js 16’s dev cross-origin block on /_next/*.
 */
import { readFileSync, existsSync } from "node:fs";
import { networkInterfaces } from "node:os";
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const nextCli = path.join(ROOT, "node_modules", "next", "dist", "bin", "next");

const PRIVATE_RE =
  /^(10\.|192\.168\.|172\.(1[6-9]|2[0-9]|3[0-1])\.)/;

function readRootEnvKey(key) {
  const file = path.join(ROOT, ".env.local");
  if (!existsSync(file)) return null;
  try {
    const s = readFileSync(file, "utf8");
    for (const line of s.split("\n")) {
      if (line.startsWith("#") || !line.trim()) continue;
      const eq = line.indexOf("=");
      if (eq < 0) continue;
      if (line.slice(0, eq).trim() !== key) continue;
      let v = line.slice(eq + 1).trim();
      if (
        (v.startsWith('"') && v.endsWith('"')) ||
        (v.startsWith("'") && v.endsWith("'"))
      ) {
        v = v.slice(1, -1);
      }
      return v;
    }
  } catch {
    /* empty */
  }
  return null;
}

function pickLanIPv4() {
  for (const addrs of Object.values(networkInterfaces())) {
    if (!addrs) continue;
    for (const a of addrs) {
      if (a.internal || a.family !== "IPv4" || !PRIVATE_RE.test(a.address)) {
        continue;
      }
      return a.address;
    }
  }
  return null;
}

const fromFile = readRootEnvKey("NEXT_DEV_LAN_HOST");
const auto = pickLanIPv4();
const host = fromFile || process.env.NEXT_DEV_LAN_HOST || auto;

if (host) {
  process.env.NEXT_DEV_LAN_HOST = host;
  if (!fromFile && auto) {
    console.info(`[dev:lan] NEXT_DEV_LAN_HOST=${host} (auto; add to .env.local to override)`);
  } else {
    console.info(`[dev:lan] NEXT_DEV_LAN_HOST=${host}`);
  }
} else {
  console.warn(
    "[dev:lan] Could not detect a private IPv4. Set NEXT_DEV_LAN_HOST in .env.local (ipconfig) or allowedDevOrigins will be empty; phone may hang on /_next."
  );
}

const child = spawn(
  process.execPath,
  [nextCli, "dev", "--hostname", "0.0.0.0", "--port", "3000"],
  { stdio: "inherit", env: process.env, cwd: ROOT }
);
child.on("exit", (code) => process.exit(code ?? 0));
