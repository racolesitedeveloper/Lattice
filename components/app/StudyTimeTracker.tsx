"use client";

import { useEffect } from "react";
import { addStudySeconds } from "@/lib/study-time";

const TICK_SECONDS = 30;

export default function StudyTimeTracker() {
  useEffect(() => {
    function shouldTrack() {
      return document.visibilityState === "visible" && document.hasFocus();
    }

    const interval = window.setInterval(() => {
      if (shouldTrack()) addStudySeconds(TICK_SECONDS);
    }, TICK_SECONDS * 1000);

    return () => window.clearInterval(interval);
  }, []);

  return null;
}
