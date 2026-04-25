"use client";

import { useEffect, useMemo, useState } from "react";
import { ChartLineUp } from "@phosphor-icons/react";
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

  const points = useMemo(() => {
    if (days.length === 0) return [];
    return days.map((day, i) => {
      const x = days.length === 1 ? 0 : (i / (days.length - 1)) * 100;
      const y = 92 - (day.seconds / maxSeconds) * 84;
      return { x, y, day, i };
    });
  }, [days, maxSeconds]);

  const polylinePoints = useMemo(() => {
    if (points.length === 0) return "";
    return points.map((p) => `${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(" ");
  }, [points]);

  return (
    <section className={s.studyPanel} aria-labelledby="study-hours-title">
      <div className={s.sectionHead}>
        <div>
          <p className={s.panelLabel}>
            <ChartLineUp className={s.labelIcon} size={13} weight="bold" aria-hidden />
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

      <div className={s.lineGraph}>
        <div className={s.lineGraphChart} aria-hidden="true">
          <span className={s.graphScaleTop}>{formatMinutesDisplay(maxSeconds)}m</span>
          <span className={s.graphScaleBottom}>0m</span>
          <svg
            className={s.lineGraphSvg}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            <polyline points={polylinePoints} />
            {points.map((p) => {
              const mins = formatDayMinutes(p.day.seconds);
              const label = `${p.day.label} ${mins === "0" ? "0 min" : `${mins} min`}`;
              return (
                <circle
                  key={p.day.date}
                  className={s.graphPoint}
                  cx={p.x}
                  cy={p.y}
                  r={1.65}
                  role="presentation"
                >
                  <title>{label}</title>
                </circle>
              );
            })}
          </svg>
        </div>
        <ul className={s.graphDayAxis} aria-label="Minutes studied each day this week">
          {points.map((p) => {
            const m = formatDayMinutes(p.day.seconds);
            const has = p.day.seconds > 0;
            return (
              <li key={p.day.date} className={s.graphDayCell}>
                <span className={s.graphDayName}>{p.day.label}</span>
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
