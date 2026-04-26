"use client";

import { useEffect, useMemo, useState } from "react";
import { ChartBar } from "@phosphor-icons/react";
import { readCurrentWeekStudy, type StudyDay } from "@/lib/study-time";
import s from "./dashboard.module.css";

export default function StudyHoursGraph() {
  const [days, setDays] = useState<StudyDay[]>([]);

  useEffect(() => {
    function refresh() {
      setDays(readCurrentWeekStudy());
    }

    refresh();
    const interval = window.setInterval(refresh, 30_000);
    return () => window.clearInterval(interval);
  }, []);

  const totalSeconds = days.reduce((sum, day) => sum + day.seconds, 0);
  const maxSeconds = getChartMaxSeconds(Math.max(...days.map((day) => day.seconds), 0));

  const barHeights = useMemo(() => {
    if (maxSeconds <= 0) return days.map(() => 0);
    return days.map((day) => Math.min(100, (day.seconds / maxSeconds) * 100));
  }, [days, maxSeconds]);

  return (
    <section className={s.studyPanel} aria-labelledby="study-hours-title">
      <div className={s.sectionHead}>
        <div>
          <p className={s.panelLabel}>
            <ChartBar className={s.labelIcon} size={13} weight="bold" aria-hidden />
            Performance trend
          </p>
          <h2 id="study-hours-title" className={s.sectionTitle}>
            Weekly activity
          </h2>
        </div>
        <p className={s.studyTotal}>
          <span className={s.tabular}>{formatMinutesDisplay(totalSeconds)}</span> min total
        </p>
      </div>

      <div className={s.weekBarGraph} role="group" aria-labelledby="study-hours-title">
        <div className={s.weekBarChartArea}>
          <div className={s.weekBarYAxis} aria-hidden="true">
            <span className={s.weekBarScaleTop}>{formatMinutesDisplay(maxSeconds)}m</span>
            <span className={s.weekBarScaleBottom}>0m</span>
          </div>
          <ul className={s.weekBarList}>
          {days.map((day, i) => {
            const h = barHeights[i] ?? 0;
            const mins = formatDayMinutes(day.seconds);
            const label = `${day.label} ${day.seconds <= 0 ? "0 min" : `${mins} min`}`;
            return (
              <li key={day.date} className={s.weekBarCell} aria-label={label}>
                <div className={s.weekBarTrack}>
                  <div
                    className={s.weekBarFill}
                    style={{
                      height: `${h}%`,
                      minHeight: day.seconds > 0 && h < 1 ? 3 : 0,
                    }}
                  />
                </div>
              </li>
            );
          })}
          </ul>
        </div>
        <ul className={s.graphDayAxis} aria-label="Day totals in minutes">
          {days.map((day) => {
            const m = formatDayMinutes(day.seconds);
            const has = day.seconds > 0;
            return (
              <li key={day.date} className={s.graphDayCell}>
                <span className={s.graphDayName}>{day.label}</span>
                <span className={has ? s.graphDayMinsOn : s.graphDayMins}>
                  {m}m
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function getChartMaxSeconds(maxSeconds: number): number {
  const maxMinutes = Math.ceil(maxSeconds / 60);
  if (maxMinutes <= 5) return 5 * 60;
  if (maxMinutes <= 15) return 15 * 60;
  if (maxMinutes <= 30) return 30 * 60;
  if (maxMinutes <= 45) return 45 * 60;
  return Math.ceil(maxMinutes / 30) * 30 * 60;
}

/** Rounded whole minutes; sub-minute activity shows `<1`. */
function formatMinutesDisplay(seconds: number): string {
  if (seconds <= 0) return "0";
  const m = Math.round(seconds / 60);
  return m < 1 ? "<1" : String(m);
}

/** Axis / row labels: always show a digit or &lt;1 for sub-minute. */
function formatDayMinutes(seconds: number): string {
  if (seconds <= 0) return "0";
  const m = Math.round(seconds / 60);
  return m < 1 ? "<1" : String(m);
}
