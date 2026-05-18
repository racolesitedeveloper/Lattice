import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  globalMasteryTotals,
  parsePracticeStorageEntries,
  weakAreaCandidatesBySubject,
} from "./study-analytics";

describe("parsePracticeStorageEntries", () => {
  it("deduplicates the same drill across subtopic and mixed sessions (latest wins)", () => {
    const keys = [
      "practice-session:physics:t1-1",
      "practice-mixed-session:physics:t1-1,t2-1",
    ];
    const store: Record<string, string> = {
      "practice-session:physics:t1-1": JSON.stringify({
        drillOutcomes: { q1: "needs-work" },
        updatedAt: 100,
      }),
      "practice-mixed-session:physics:t1-1,t2-1": JSON.stringify({
        outcomes: { "t1-1:q1": "correct" },
        updatedAt: 200,
      }),
    };

    const records = parsePracticeStorageEntries(keys, (key) => store[key] ?? null);
    const totals = globalMasteryTotals(records);

    assert.equal(totals.answered, 1);
    assert.equal(totals.correct, 1);
    assert.equal(totals.accuracy, 100);
  });

  it("aggregates unique drills per subtopic for weakest area", () => {
    const keys = ["practice-session:chemistry:t2-1", "practice-mistakes-session:chemistry:archived"];
    const store: Record<string, string> = {
      "practice-session:chemistry:t2-1": JSON.stringify({
        drillOutcomes: { q1: "correct", q2: "correct", q3: "needs-work" },
        updatedAt: 50,
      }),
      "practice-mistakes-session:chemistry:archived": JSON.stringify({
        outcomes: { "t2-1:q1": "needs-work" },
        updatedAt: 100,
      }),
    };

    const records = parsePracticeStorageEntries(keys, (key) => store[key] ?? null);
    const weak = weakAreaCandidatesBySubject(records).get("chemistry");

    assert.equal(weak?.noteId, "t2-1");
    assert.equal(weak?.accuracy, 33);
    assert.equal(weak?.answered, 3);
  });
});
