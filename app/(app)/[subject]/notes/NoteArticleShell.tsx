"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import a from "./note.module.css";

const SECTION_IDS = [
  { id: "syllabus-heading", label: "Syllabus" },
  { id: "worked-heading", label: "Examples" },
  { id: "pitfalls-heading", label: "Pitfalls" },
  { id: "selftest-heading", label: "Self-test" },
] as const;

export default function NoteArticleShell({
  children,
  showSectionNav = true,
}: {
  children: React.ReactNode;
  showSectionNav?: boolean;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<string | null>(null);

  const onScroll = useCallback(() => {
    const el = wrapRef.current;
    if (!el) return;
    const max = el.scrollHeight - el.clientHeight;
    setProgress(max <= 0 ? 1 : Math.min(1, Math.max(0, el.scrollTop / max)));
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  useEffect(() => {
    if (!showSectionNav) return;
    const root = wrapRef.current;
    if (!root) return;

    const heads = SECTION_IDS.map(({ id }) => document.getElementById(id)).filter(Boolean);
    if (heads.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { root, rootMargin: "-48px 0px -55% 0px", threshold: [0, 0.1, 0.25, 0.5, 1] },
    );

    heads.forEach((h) => obs.observe(h!));
    return () => obs.disconnect();
  }, [showSectionNav]);

  function scrollToId(id: string) {
    const root = wrapRef.current;
    const target = document.getElementById(id);
    if (!root || !target) return;
    const top = root.getBoundingClientRect().top;
    const y = target.getBoundingClientRect().top - top + root.scrollTop - 12;
    root.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
  }

  return (
    <div ref={wrapRef} className={a.articleWrap}>
      <div className={a.articleStickyHead}>
        <div className={a.readProgressTrack} aria-hidden>
          <div className={a.readProgressFill} style={{ transform: `scaleX(${progress})` }} />
        </div>

        {showSectionNav ? (
          <nav className={a.sectionJump} aria-label="Jump to section">
            <span className={a.sectionJumpLabel}>Jump to</span>
            <div className={a.sectionJumpPills}>
              {SECTION_IDS.map(({ id, label }) => (
                <button
                  key={id}
                  type="button"
                  aria-current={active === id ? "location" : undefined}
                  className={active === id ? a.sectionJumpPillOn : a.sectionJumpPill}
                  onClick={() => scrollToId(id)}
                >
                  {label}
                </button>
              ))}
            </div>
          </nav>
        ) : null}
      </div>

      {children}
    </div>
  );
}
