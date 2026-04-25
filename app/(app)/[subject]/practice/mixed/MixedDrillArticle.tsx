"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { CaretLeft, CaretRight, CheckCircle, WarningCircle } from "@phosphor-icons/react";
import type { DrillQuestion } from "@/lib/practice/types";
import { archiveMistake } from "@/lib/practice/mistakes";
import { markRecentActivity } from "@/lib/recent-activity";
import { renderExamText } from "@/lib/practice/render-exam-text";
import s from "../practice.module.css";
import sm from "./mixed.module.css";

export type MixedItem = {
  noteId: string;
  topicTitle: string;
  subtopicTitle: string;
  subtopicCode: string;
  question: DrillQuestion;
  mistakeId?: string;
};

type MixedDrillArticleProps = {
  items: MixedItem[];
  subject: string;
  selectedNoteIds: string[];
  sessionLabel?: string;
  sessionHint?: string;
  completeTitle?: string;
  completeText?: string;
  storagePrefix?: string;
  sessionSignature?: string;
  canArchiveMistakes: boolean;
  onItemCorrect?: (item: MixedItem) => void;
};

function seededRandom(seed: string): () => number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i += 1) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }

  return () => {
    h += 0x6d2b79f5;
    let t = h;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle<T>(items: readonly T[], seed: string): T[] {
  const out = [...items];
  const random = seededRandom(seed);
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [out[i], out[j]] = [out[j]!, out[i]!];
  }
  return out;
}

export default function MixedDrillArticle({
  items,
  subject,
  selectedNoteIds,
  sessionLabel = "Mixed drill session",
  sessionHint = "Mixed across selected subtopics. Complete current item to unlock the next.",
  completeTitle = "Mixed drill complete",
  completeText,
  storagePrefix = "practice-mixed-session",
  sessionSignature,
  canArchiveMistakes,
  onItemCorrect,
}: MixedDrillArticleProps) {
  const stripRef = useRef<HTMLElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const setSignature = useMemo(
    () => sessionSignature ?? [...selectedNoteIds].sort().join(","),
    [selectedNoteIds, sessionSignature],
  );
  const shuffled = useMemo(() => shuffle(items, `${subject}:${setSignature}`), [items, subject, setSignature]);
  const storageKey = useMemo(
    () => `${storagePrefix}:${subject}:${setSignature}`,
    [storagePrefix, subject, setSignature],
  );
  const [hydrated, setHydrated] = useState(false);
  const [index, setIndex] = useState(0);
  const [completed, setCompleted] = useState<string[]>([]);
  const [mcqSelected, setMcqSelected] = useState<"A" | "B" | "C" | "D" | null>(null);
  const [mcqSubmitted, setMcqSubmitted] = useState(false);
  const [structuredRevealed, setStructuredRevealed] = useState(false);
  const [reflection, setReflection] = useState<"had-this" | "more-practice" | null>(null);
  const [outcomes, setOutcomes] = useState<Record<string, "correct" | "needs-work">>({});

  const current = shuffled[index];
  const q = current.question;
  const key = `${current.noteId}:${q.id}`;
  const currentComplete = completed.includes(key);
  const idsInOrder = shuffled.map((item) => `${item.noteId}:${item.question.id}`);
  let highestContiguousCompleted = -1;
  for (let i = 0; i < idsInOrder.length; i += 1) {
    if (completed.includes(idsInOrder[i]!)) highestContiguousCompleted = i;
    else break;
  }
  const unlockedMaxIndex = Math.min(highestContiguousCompleted + 1, shuffled.length - 1);
  const progressPct = Math.round((completed.length / shuffled.length) * 100);
  const showFinishAction = index === shuffled.length - 1 && currentComplete;
  const correctCount = Object.values(outcomes).filter((v) => v === "correct").length;
  const needsWorkCount = Object.values(outcomes).filter((v) => v === "needs-work").length;
  const answeredCount = correctCount + needsWorkCount;
  const accuracy = answeredCount ? Math.round((correctCount / answeredCount) * 100) : 0;
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const timer = window.setTimeout(() => {
      try {
        const raw = window.localStorage.getItem(storageKey);
        if (!raw) {
          setHydrated(true);
          return;
        }
        const parsed = JSON.parse(raw) as {
          setSignature?: string;
          index?: number;
          completed?: string[];
          outcomes?: Record<string, "correct" | "needs-work">;
          showSummary?: boolean;
        };
        if (parsed.setSignature !== setSignature) {
          setHydrated(true);
          return;
        }
        const allKeys = new Set(shuffled.map((item) => `${item.noteId}:${item.question.id}`));
        const safeCompleted = (parsed.completed ?? []).filter((id) => allKeys.has(id));
        const safeOutcomes: Record<string, "correct" | "needs-work"> = {};
        for (const [k, v] of Object.entries(parsed.outcomes ?? {})) {
          if (allKeys.has(k) && (v === "correct" || v === "needs-work")) safeOutcomes[k] = v;
        }
        setCompleted(safeCompleted);
        setOutcomes(safeOutcomes);
        setIndex(Math.max(0, Math.min(parsed.index ?? 0, Math.max(shuffled.length - 1, 0))));
        setShowSummary(Boolean(parsed.showSummary));
      } catch {
        // ignore malformed mixed session
      } finally {
        setHydrated(true);
      }
    }, 0);
    return () => window.clearTimeout(timer);
  }, [setSignature, shuffled, storageKey]);

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;

    function update() {
      const nav = stripRef.current;
      if (!nav) return;
      const max = nav.scrollWidth - nav.clientWidth;
      const eps = 2;
      setCanScrollLeft(nav.scrollLeft > eps);
      setCanScrollRight(nav.scrollLeft < max - eps);
    }

    const frame = window.requestAnimationFrame(update);
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      window.cancelAnimationFrame(frame);
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      ro.disconnect();
    };
  }, [shuffled.length]);

  useLayoutEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    const btn = el.children.item(index) as HTMLElement | null;
    btn?.scrollIntoView({ inline: "center", block: "nearest" });
  }, [index]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!hydrated) return;
    window.localStorage.setItem(
      storageKey,
      JSON.stringify({
        setSignature,
        selectedNoteIds,
        index,
        completed,
        outcomes,
        showSummary,
        total: shuffled.length,
        updatedAt: Date.now(),
      }),
    );
    markRecentActivity({
      kind: "drill",
      href: `/${subject}/practice/mixed?sets=${encodeURIComponent(selectedNoteIds.join(","))}`,
      title: sessionLabel,
      subtitle: `${selectedNoteIds.length} subtopics selected`,
    });
  }, [
    hydrated,
    setSignature,
    selectedNoteIds,
    index,
    completed,
    outcomes,
    showSummary,
    shuffled.length,
    storageKey,
    subject,
    sessionLabel,
  ]);

  function markDone(outcome: "correct" | "needs-work", selectedOptionId?: "A" | "B" | "C" | "D") {
    if (!completed.includes(key)) setCompleted((prev) => [...prev, key]);
    setOutcomes((prev) => ({ ...prev, [key]: outcome }));
    if (outcome === "correct") {
      onItemCorrect?.(current);
    }
    if (canArchiveMistakes && outcome === "needs-work") {
      archiveMistake({
        subject,
        noteId: current.noteId,
        question: q,
        reason: q.kind === "mcq" ? "mcq-wrong" : "structured-needs-practice",
        selectedOptionId,
        topicTitle: current.topicTitle,
        subtopicTitle: current.subtopicTitle,
        subtopicCode: current.subtopicCode,
      });
    }
  }

  function resetQuestionState() {
    setMcqSelected(null);
    setMcqSubmitted(false);
    setStructuredRevealed(false);
    setReflection(null);
  }

  function next() {
    if (index < unlockedMaxIndex) {
      setIndex((prev) => prev + 1);
      resetQuestionState();
    }
  }

  function prev() {
    if (index > 0) {
      setIndex((prev) => prev - 1);
      resetQuestionState();
    }
  }

  function scrollStripBy(dir: -1 | 1) {
    const el = stripRef.current;
    if (!el) return;
    const delta = Math.max(160, Math.floor(el.clientWidth * 0.55)) * dir;
    el.scrollBy({ left: delta, behavior: "smooth" });
  }

  return (
    <div className={s.session}>
      <div className={s.contextStrip}>
        <p className={s.sessionLabel}>{sessionLabel}</p>
        <div className={s.contextMain}>
          <div className={s.progressCluster}>
            <span className={s.progressFrac}>
              <span className={s.tabular}>{String(index + 1).padStart(2, "0")}</span>
              <span className={s.progressSep} aria-hidden>
                /
              </span>
              <span className={s.tabular}>{String(shuffled.length).padStart(2, "0")}</span>
            </span>
            <div className={s.progressTrack} aria-hidden>
              <div className={s.progressFill} style={{ width: `${progressPct}%` }} />
            </div>
            <span className={s.progressPct}>
              <span className={s.tabular}>{progressPct}</span>%
            </span>
          </div>
        </div>
        <p className={s.sessionHint}>{sessionHint}</p>
      </div>

      <div className={sm.stepStripShell}>
        <span className={`${sm.fade} ${sm.fadeLeft} ${canScrollLeft ? sm.fadeOn : ""}`} aria-hidden />
        <span className={`${sm.fade} ${sm.fadeRight} ${canScrollRight ? sm.fadeOn : ""}`} aria-hidden />
        <button
          type="button"
          className={`${sm.edgeNudge} ${sm.edgeNudgeLeft} ${canScrollLeft ? sm.edgeNudgeOn : ""}`}
          onClick={() => scrollStripBy(-1)}
          disabled={!canScrollLeft}
          aria-label="Scroll question strip left"
        >
          <CaretLeft size={16} weight="regular" />
        </button>
        <button
          type="button"
          className={`${sm.edgeNudge} ${sm.edgeNudgeRight} ${canScrollRight ? sm.edgeNudgeOn : ""}`}
          onClick={() => scrollStripBy(1)}
          disabled={!canScrollRight}
          aria-label="Scroll question strip right"
        >
          <CaretRight size={16} weight="regular" />
        </button>
        <nav ref={stripRef} className={`${s.stepStrip} ${sm.stepStripScroller}`} aria-label="Mixed drill items">
          {shuffled.map((item, i) => {
            const id = `${item.noteId}:${item.question.id}`;
            const isCurrent = i === index;
            const isDoneItem = completed.includes(id);
            const locked = i > unlockedMaxIndex;
            return (
              <button
                key={id}
                type="button"
                className={[
                  s.stepBtn,
                  isCurrent ? s.stepCurrent : "",
                  isDoneItem ? s.stepDone : "",
                  locked ? s.stepLocked : "",
                ].join(" ")}
                onClick={() => setIndex(i)}
                disabled={locked}
                aria-current={isCurrent ? "step" : undefined}
              >
                <span className={s.tabular}>{i + 1}</span>
              </button>
            );
          })}
        </nav>
      </div>

      <section className={s.focusPanel} aria-live="polite">
        {showSummary ? (
          <div className={s.summaryPanel}>
            <header className={s.summaryHeader}>
              <p className={s.eyebrow}>Performance overview</p>
              <h2 className={s.summaryTitle}>{completeTitle}</h2>
              <p className={s.summaryText}>
                {completeText ?? `You finished all ${shuffled.length} mixed drill questions.`}
              </p>
            </header>
            <div className={s.summaryGrid}>
              <article className={s.summaryStat}>
                <p className={s.summaryStatLabel}>Correct</p>
                <p className={s.summaryStatValue}>{correctCount}</p>
              </article>
              <article className={s.summaryStat}>
                <p className={s.summaryStatLabel}>Needs work</p>
                <p className={s.summaryStatValue}>{needsWorkCount}</p>
              </article>
              <article className={s.summaryStat}>
                <p className={s.summaryStatLabel}>Accuracy</p>
                <p className={s.summaryStatValue}>{accuracy}%</p>
              </article>
            </div>
          </div>
        ) : (
          <div className={s.focusInner}>
            <header className={s.itemHeader}>
              <p className={s.eyebrow}>Question</p>
              <div className={s.itemTitleRow}>
                <h2 className={s.itemHeading}>{q.kind === "mcq" ? "Multiple-choice" : "Structured question"}</h2>
                <span className={s.itemIndex}>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <p className={s.itemMeta}>
                {current.subtopicCode} · {current.subtopicTitle} · {current.topicTitle}
              </p>
            </header>
            <div className={s.stemBlock}>
              <p className={s.stem}>{renderExamText(q.stem)}</p>
            </div>
            {q.kind === "mcq" ? (
              <div className={s.actionBlock}>
                <ul className={s.optionList}>
                  {q.options.map((opt) => (
                    <li key={opt.id}>
                      <button
                        type="button"
                        className={[
                          s.optionRow,
                          mcqSelected === opt.id ? s.optionRowSelected : "",
                          mcqSubmitted && opt.id === q.correctOptionId ? s.optionRowCorrect : "",
                          mcqSubmitted && mcqSelected === opt.id && mcqSelected !== q.correctOptionId ? s.optionRowWrong : "",
                        ].join(" ")}
                        onClick={() => {
                          setMcqSelected(opt.id);
                          if (mcqSubmitted) setMcqSubmitted(false);
                        }}
                      >
                        <span className={s.optionKey}>{opt.id}</span>
                        <span className={s.optionText}>{renderExamText(opt.text)}</span>
                      </button>
                    </li>
                  ))}
                </ul>
                <div className={s.primaryRow}>
                  <button
                    type="button"
                    className={s.primaryBtn}
                    disabled={!mcqSelected}
                    onClick={() => {
                      setMcqSubmitted(true);
                      markDone(
                        mcqSelected === q.correctOptionId ? "correct" : "needs-work",
                        mcqSelected ?? undefined,
                      );
                    }}
                  >
                    Check answer
                  </button>
                </div>
                {mcqSubmitted ? (
                  <div className={`${s.feedbackPanel} ${mcqSelected === q.correctOptionId ? s.feedbackOk : s.feedbackBad}`}>
                    <p className={s.feedbackTitle}>
                      {mcqSelected === q.correctOptionId ? (
                        <>
                          <CheckCircle size={18} weight="bold" aria-hidden /> Correct
                        </>
                      ) : (
                        <>
                          <WarningCircle size={18} weight="bold" aria-hidden /> Not quite
                        </>
                      )}
                    </p>
                    <p className={s.feedbackBody}>{renderExamText(q.explanation)}</p>
                  </div>
                ) : null}
              </div>
            ) : (
              <div className={s.actionBlock}>
                {!structuredRevealed ? (
                  <div className={s.primaryRow}>
                    <button
                      type="button"
                      className={s.primaryBtn}
                      onClick={() => {
                        setStructuredRevealed(true);
                      }}
                    >
                      Show model answer and mark scheme
                    </button>
                  </div>
                ) : (
                  <div className={s.answerStack}>
                    <section className={s.answerSection}>
                      <h3 className={s.answerSectionLabel}>
                        <span className={s.answerSectionIndex}>1</span>
                        Model answer
                      </h3>
                      <ol className={s.stepsList}>
                        {q.workedSolution.map((p, i) => (
                          <li key={i} className={s.stepRow}>
                            <span className={s.stepNum}>{i + 1}</span>
                            <span className={s.stepBody}>{renderExamText(p)}</span>
                          </li>
                        ))}
                      </ol>
                    </section>
                    <section className={s.answerSection}>
                      <h3 className={s.answerSectionLabel}>
                        <span className={s.answerSectionIndex}>2</span>
                        Mark scheme
                      </h3>
                      <ul className={s.markList}>
                        {q.modelAnswerPoints.map((p, i) => (
                          <li key={i} className={s.markRow}>
                            <span className={s.markBullet} aria-hidden />
                            <span>{renderExamText(p)}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                    <section className={`${s.answerSection} ${s.answerSectionMistake}`}>
                      <h3 className={s.answerSectionLabel}>
                        <span className={s.answerSectionIndex}>3</span>
                        Common mistake
                      </h3>
                      <p className={s.mistakeBody}>{renderExamText(q.commonMistake)}</p>
                    </section>
                    <section className={s.reflectPanel}>
                      <div className={s.reflectHead}>
                        <p className={s.reflectLabel}>Required checkpoint</p>
                        <p className={s.reflectPrompt}>How did this feel before you revealed the solution?</p>
                      </div>
                      <div className={s.reflectActions}>
                        <button
                          type="button"
                          className={`${s.reflectBtn} ${reflection === "had-this" ? s.reflectBtnOnHadThis : ""}`}
                          onClick={() => {
                            setReflection("had-this");
                            markDone("correct");
                          }}
                        >
                          I had this
                        </button>
                        <button
                          type="button"
                          className={`${s.reflectBtn} ${reflection === "more-practice" ? s.reflectBtnOnMorePractice : ""}`}
                          onClick={() => {
                            setReflection("more-practice");
                            markDone("needs-work");
                          }}
                        >
                          I need more practice
                        </button>
                      </div>
                    </section>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {!showSummary ? (
          <footer className={s.panelFooter}>
            <div className={s.tagRow}>
              {q.tags.map((tag) => (
                <span key={tag} className={s.tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className={s.navCluster}>
              <button type="button" className={s.ghostBtn} disabled={index === 0} onClick={prev}>
                Previous
              </button>
              <button
                type="button"
                className={s.ghostBtn}
                disabled={showFinishAction ? false : index === shuffled.length - 1 || !currentComplete}
                onClick={showFinishAction ? () => setShowSummary(true) : next}
              >
                {showFinishAction ? "Finish" : "Next"}
              </button>
            </div>
          </footer>
        ) : null}
      </section>
    </div>
  );
}
