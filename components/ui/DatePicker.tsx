"use client";

import { CalendarBlank, CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useEffect, useId, useRef, useState } from "react";
import s from "./DatePicker.module.css";

const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"] as const;
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

type CalendarDay = {
  dateKey: string;
  day: number;
  inMonth: boolean;
};

export default function DatePicker({
  id,
  value,
  onChange,
  placeholder = "Pick a date",
  required,
  "aria-describedby": ariaDescribedBy,
}: {
  id: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  "aria-describedby"?: string;
}) {
  const listId = useId();
  const wrapRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [popoverStyle, setPopoverStyle] = useState<React.CSSProperties>({});

  const todayKey = localDateKey(new Date());
  const parsed = value ? parseLocalDate(value) : null;
  const [viewYear, setViewYear] = useState(() => parsed?.getFullYear() ?? new Date().getFullYear());
  const [viewMonth, setViewMonth] = useState(() => parsed?.getMonth() ?? new Date().getMonth());

  const days = buildCalendarDays(viewYear, viewMonth);

  useEffect(() => {
    if (!open) return;
    const parsedValue = value ? parseLocalDate(value) : null;
    if (parsedValue) {
      setViewYear(parsedValue.getFullYear());
      setViewMonth(parsedValue.getMonth());
    }
    const trigger = triggerRef.current;
    if (!trigger) return;
    const rect = trigger.getBoundingClientRect();
    const popoverHeight = 320;
    const gap = 6;
    const openUp = rect.bottom + popoverHeight + gap > window.innerHeight;
    const top = openUp ? rect.top - popoverHeight - gap : rect.bottom + gap;
    setPopoverStyle({
      position: "fixed",
      top: Math.max(8, top),
      left: rect.left,
      width: Math.max(rect.width, 280),
    });
  }, [open, value]);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: PointerEvent) {
      if (!wrapRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function selectDate(dateKey: string) {
    onChange(dateKey);
    setOpen(false);
  }

  function shiftMonth(delta: number) {
    const next = new Date(viewYear, viewMonth + delta, 1);
    setViewYear(next.getFullYear());
    setViewMonth(next.getMonth());
  }

  const displayLabel = value
    ? parseLocalDate(value).toLocaleDateString(undefined, {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : null;

  return (
    <div className={s.wrap} ref={wrapRef}>
      <button
        ref={triggerRef}
        type="button"
        id={id}
        className={s.trigger}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-controls={open ? listId : undefined}
        aria-required={required || undefined}
        aria-describedby={ariaDescribedBy}
      >
        <span className={displayLabel ? undefined : s.triggerPlaceholder}>
          {displayLabel ?? placeholder}
        </span>
        <CalendarBlank className={s.triggerIcon} size={18} weight="regular" aria-hidden />
      </button>

      {open ? (
        <div
          id={listId}
          className={s.popover}
          style={popoverStyle}
          role="dialog"
          aria-label="Choose a date"
        >
          <div className={s.header}>
            <button
              type="button"
              className={s.navBtn}
              onClick={() => shiftMonth(-1)}
              aria-label="Previous month"
            >
              <CaretLeft size={16} weight="bold" aria-hidden />
            </button>
            <p className={s.monthLabel}>
              {MONTHS[viewMonth]} {viewYear}
            </p>
            <button
              type="button"
              className={s.navBtn}
              onClick={() => shiftMonth(1)}
              aria-label="Next month"
            >
              <CaretRight size={16} weight="bold" aria-hidden />
            </button>
          </div>

          <div className={s.weekdays}>
            {WEEKDAYS.map((day) => (
              <span key={day} className={s.weekday}>
                {day}
              </span>
            ))}
          </div>

          <div className={s.grid} role="grid">
            {days.map((cell) => {
              const isSelected = value === cell.dateKey;
              const isToday = todayKey === cell.dateKey;
              return (
                <button
                  key={cell.dateKey}
                  type="button"
                  role="gridcell"
                  className={[
                    s.day,
                    !cell.inMonth ? s.dayOutside : "",
                    isToday ? s.dayToday : "",
                    isSelected ? s.daySelected : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => selectDate(cell.dateKey)}
                  aria-selected={isSelected}
                  aria-current={isToday ? "date" : undefined}
                >
                  {cell.day}
                </button>
              );
            })}
          </div>

          <div className={s.footer}>
            <button
              type="button"
              className={`${s.footerBtn} ${s.footerBtnMuted}`}
              onClick={() => {
                onChange("");
                setOpen(false);
              }}
            >
              Clear
            </button>
            <button
              type="button"
              className={s.footerBtn}
              onClick={() => selectDate(todayKey)}
            >
              Today
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function buildCalendarDays(year: number, month: number): CalendarDay[] {
  const first = new Date(year, month, 1);
  const startOffset = (first.getDay() + 6) % 7;
  const gridStart = new Date(year, month, 1 - startOffset);

  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(gridStart.getFullYear(), gridStart.getMonth(), gridStart.getDate() + index);
    return {
      dateKey: localDateKey(date),
      day: date.getDate(),
      inMonth: date.getMonth() === month,
    };
  });
}

function localDateKey(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function parseLocalDate(key: string): Date {
  const [year, month, day] = key.split("-").map(Number);
  return new Date(year ?? 1970, (month ?? 1) - 1, day ?? 1);
}
