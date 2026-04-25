"use client";

import { useEffect, useState } from "react";
import { readStudyStreak, type StudyStreak } from "@/lib/study-time";
import s from "./dashboard.module.css";

export default function DailyStreakIndicator() {
  const [streak, setStreak] = useState<StudyStreak>({ count: 0, studiedToday: false });
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    function refresh() {
      setStreak(readStudyStreak());
      setHydrated(true);
    }

    refresh();
    const interval = window.setInterval(refresh, 30_000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className={s.streakInline} aria-label="Daily study streak">
      <span className={hydrated && streak.studiedToday ? s.streakDotOn : s.streakDot} aria-hidden />
      <span className={s.streakLabel}>Streak</span>
      <strong className={s.streakValue}>
        <span className={s.tabular}>{hydrated ? streak.count : "—"}</span>d
      </strong>
      <span className={s.streakHint}>{hydrated && streak.studiedToday ? "logged today" : "not logged today"}</span>
    </div>
  );
}
