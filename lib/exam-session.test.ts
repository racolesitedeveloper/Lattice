import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { getExamSessionCountdown, getNextSessionWindow } from "./exam-session";

describe("getExamSessionCountdown", () => {
  it("counts local calendar days until May session start", () => {
    const countdown = getExamSessionCountdown("may-june", new Date(2026, 3, 10)); // 10 Apr 2026 local
    assert.equal(countdown?.days, 21);
    assert.equal(countdown?.formattedDate, "May/June 2026");
  });

  it("returns zero days when the session window is open", () => {
    const countdown = getExamSessionCountdown("may-june", new Date(2026, 5, 15)); // 15 Jun 2026 local
    assert.equal(countdown?.days, 0);
    assert.match(countdown?.label ?? "", /open/i);
  });

  it("rolls to the next year after the window ends", () => {
    const countdown = getExamSessionCountdown("oct-nov", new Date(2026, 11, 5)); // 5 Dec 2026 local
    assert.equal(countdown?.days, 300);
    assert.equal(countdown?.formattedDate, "Oct/Nov 2027");
  });
});

describe("getNextSessionWindow", () => {
  it("uses local month boundaries", () => {
    const window = getNextSessionWindow("may-june", new Date(2026, 4, 1));
    assert.equal(window.year, 2026);
    assert.equal(window.start.getMonth(), 4);
    assert.equal(window.end.getMonth(), 5);
  });
});
