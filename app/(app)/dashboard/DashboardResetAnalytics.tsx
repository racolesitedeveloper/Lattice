"use client";

import { useRef, useState } from "react";
import { persistStudyStateAction } from "@/app/actions/study-state";
import { clearAllStudyAnalytics } from "@/lib/study-kv";
import s from "./dashboard-reset-analytics.module.css";

export default function DashboardResetAnalytics() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [pending, setPending] = useState(false);

  function openDialog() {
    dialogRef.current?.showModal();
  }

  function dismissDialog() {
    if (pending) return;
    dialogRef.current?.close();
  }

  async function confirmReset() {
    setPending(true);
    try {
      clearAllStudyAnalytics();
      await persistStudyStateAction({});
    } finally {
      setPending(false);
      dialogRef.current?.close();
    }
  }

  return (
    <>
      <button type="button" className={s.trigger} onClick={openDialog}>
        Reset analytics
      </button>

      <dialog
        ref={dialogRef}
        className={s.dialog}
        aria-labelledby="reset-analytics-title"
        onCancel={(e) => {
          if (pending) e.preventDefault();
        }}
      >
        <div className={s.inner}>
          <h2 id="reset-analytics-title" className={s.title}>
            Reset all study analytics?
          </h2>
          <div className={s.body}>
            <p>This clears saved progress used on your dashboard and in practice — as if you had just opened the app:</p>
            <ul>
              <li>Drill completion and scores (including mixed packs)</li>
              <li>Mistakes bank</li>
              <li>Weekly study-time bars and study-day markers</li>
              <li>Exam timetable entries you logged here</li>
              <li>Recent resume shortcuts</li>
            </ul>
            <p>Your account, course access, and profile settings (such as exam session) stay as they are.</p>
          </div>
          <p className={s.warning}>You cannot undo this. Only continue if you are sure.</p>
          <div className={s.actions}>
            <button type="button" className={`${s.btn} ${s.cancelBtn}`} onClick={dismissDialog} disabled={pending}>
              Cancel
            </button>
            <button type="button" className={`${s.btn} ${s.dangerBtn}`} onClick={confirmReset} disabled={pending}>
              {pending ? "Resetting…" : "Reset everything listed"}
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
