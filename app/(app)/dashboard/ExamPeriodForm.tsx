"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { updateExamPeriod } from "@/app/actions/dashboard";
import s from "./dashboard.module.css";

type ExamPeriod = "may-june" | "oct-nov";

const PERIODS: Array<{ id: ExamPeriod; label: string }> = [
  { id: "may-june", label: "May/June" },
  { id: "oct-nov", label: "Oct/Nov" },
];

export default function ExamPeriodForm({ currentPeriod }: { currentPeriod?: ExamPeriod | null }) {
  const router = useRouter();
  const [state, action, pending] = useActionState(updateExamPeriod, null);

  useEffect(() => {
    if (state?.ok) router.refresh();
  }, [router, state?.ok]);

  return (
    <form action={action} className={s.dateForm}>
      <fieldset className={s.periodChoice}>
        <legend className={s.dateFormLabel}>Exam period</legend>
        <div className={s.periodOptions}>
          {PERIODS.map((period) => (
            <label key={period.id} className={s.periodOption}>
              <input
                type="radio"
                name="examPeriod"
                value={period.id}
                defaultChecked={currentPeriod === period.id}
                required
              />
              <span>{period.label}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <button type="submit" className={s.dateSubmit} disabled={pending}>
        {pending ? "Saving..." : currentPeriod ? "Update" : "Save"}
      </button>
      {state?.error ? <p className={s.formError}>{state.error}</p> : null}
    </form>
  );
}
