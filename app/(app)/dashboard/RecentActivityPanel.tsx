"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowClockwise, CaretRight } from "@phosphor-icons/react";
import { readRecentActivities, type RecentActivityItem } from "@/lib/recent-activity";
import s from "./dashboard.module.css";

const KIND_LABEL: Record<RecentActivityItem["kind"], string> = {
  note: "Note",
  drill: "Drill",
  flashcard: "Cards",
};

export default function RecentActivityPanel() {
  const [items, setItems] = useState<RecentActivityItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    window.queueMicrotask(() => {
      setItems(readRecentActivities());
      setHydrated(true);
    });
  }, []);

  return (
    <section className={s.activityPanel} aria-labelledby="recent-activity-title">
      <div className={s.sectionHead}>
        <div>
          <p className={s.panelLabel}>
            <ArrowClockwise className={s.labelIcon} size={13} weight="bold" aria-hidden />
            Next best action
          </p>
          <h2 id="recent-activity-title" className={s.sectionTitle}>
            Resume queue
          </h2>
        </div>
      </div>

      <div className={s.activityList}>
        {hydrated && items.length > 0 ? (
          <div className={s.activityListHead} aria-hidden>
            <span>Recent</span>
            <span>Continue</span>
          </div>
        ) : null}
        {hydrated && items.length > 0 ? (
          items.map((item) => (
            <Link key={item.kind} href={item.href} className={s.activityRow}>
              <span className={s.activityKind}>{KIND_LABEL[item.kind]}</span>
              <span className={s.activityMain}>
                <strong>{item.title}</strong>
                <span>{item.subtitle}</span>
              </span>
              <span className={s.activityMeta}>
                <span className={s.activityTime}>{formatRelative(item.updatedAt)}</span>
                <span className={s.activityContinue}>
                  Continue
                  <CaretRight size={13} weight="bold" aria-hidden />
                </span>
              </span>
            </Link>
          ))
        ) : (
          <div className={s.activityEmpty}>
            <p>No recent sessions yet.</p>
            <span>Open a note, drill set, or flashcard deck and it will appear here.</span>
          </div>
        )}
      </div>
    </section>
  );
}

function formatRelative(timestamp: number): string {
  const diff = Date.now() - timestamp;
  const mins = Math.max(0, Math.floor(diff / 60_000));
  if (mins < 1) return "Just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}
