"use client";

import { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import s from "./upgrade-success-dialog.module.css";

export default function UpgradeSuccessDialog() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const show = searchParams.get("checkout") === "success";

  useEffect(() => {
    if (!show) return;
    const el = dialogRef.current;
    if (el && !el.open) {
      el.showModal();
    }
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <dialog
      ref={dialogRef}
      className={s.dialog}
      aria-labelledby="upgrade-success-title"
      aria-describedby="upgrade-success-desc upgrade-success-refresh"
      onClose={() => {
        router.replace("/dashboard", { scroll: false });
      }}
    >
      <div className={s.inner}>
        <p className={s.kicker}>Full plan</p>
        <h2 id="upgrade-success-title" className={s.title}>
          You&apos;re all set
        </h2>
        <p id="upgrade-success-desc" className={s.message}>
          Congrats — you now have full access to notes, drills, and you&apos;ve unlocked Archive.
        </p>
        <p id="upgrade-success-refresh" className={s.hint}>
          Refresh your browser to put everything in place.
        </p>
        <div className={s.actions}>
          <button
            type="button"
            className={s.primary}
            onClick={() => dialogRef.current?.close()}
            autoFocus
          >
            Continue
          </button>
        </div>
      </div>
    </dialog>
  );
}
