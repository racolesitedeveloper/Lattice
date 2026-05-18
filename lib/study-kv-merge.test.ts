import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { mergeStudyWeekJson } from "./study-kv-merge";

describe("mergeStudyWeekJson", () => {
  const now = new Date(2026, 4, 14); // Thu 14 May 2026 — week starts Mon 11 May (local)

  it("keeps per-day max for the current week from both devices", () => {
    const a = JSON.stringify({
      weekStart: "2026-05-11",
      days: { "2026-05-11": 600, "2026-05-12": 300 },
      updatedAt: 50,
    });
    const b = JSON.stringify({
      weekStart: "2026-05-05",
      days: { "2026-05-11": 1200, "2026-05-14": 900 },
      updatedAt: 500,
    });

    const merged = JSON.parse(mergeStudyWeekJson(a, b, now)) as {
      weekStart: string;
      days: Record<string, number>;
    };

    assert.equal(merged.weekStart, "2026-05-11");
    assert.equal(merged.days["2026-05-11"], 1200);
    assert.equal(merged.days["2026-05-12"], 300);
    assert.equal(merged.days["2026-05-14"], 900);
  });

  it("does not zero the current week when a stale blob has a newer updatedAt", () => {
    const current = JSON.stringify({
      weekStart: "2026-05-11",
      days: { "2026-05-14": 1800 },
      updatedAt: 100,
    });
    const stale = JSON.stringify({
      weekStart: "2026-05-05",
      days: { "2026-05-07": 3600 },
      updatedAt: 9999,
    });

    const merged = JSON.parse(mergeStudyWeekJson(current, stale, now)) as {
      days: Record<string, number>;
    };

    assert.equal(merged.days["2026-05-14"], 1800);
  });
});
