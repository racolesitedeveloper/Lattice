"use client";

import { useEffect, useMemo, useState } from "react";
import { CheckCircle, WarningCircle } from "@phosphor-icons/react";
import type { NoteMeta } from "@/lib/notes/types";
import type { DrillQuestion, Flashcard, SubtopicPracticePack } from "@/lib/practice/types";
import { archiveMistake } from "@/lib/practice/mistakes";
import { markRecentActivity } from "@/lib/recent-activity";
import { studyStorageGetItem, studyStorageSetItem } from "@/lib/study-kv";
import { renderExamText } from "@/lib/practice/render-exam-text";
import s from "../practice.module.css";

type Props = {
  pack: SubtopicPracticePack;
  subject: string;
  noteMeta: NoteMeta;
  canArchiveMistakes: boolean;
};

type DrillOutcome = "correct" | "needs-work";
type DrillCompletion = {
  outcome: DrillOutcome;
  selectedOptionId?: "A" | "B" | "C" | "D";
};

function metaLine(q: DrillQuestion): string {
  if (q.kind === "mcq") {
    return `Multiple-choice · Difficulty ${q.difficulty}`;
  }
  return `${q.marks} marks · Difficulty ${q.difficulty}`;
}

function DrillCard({
  q,
  idx,
  onComplete,
}: {
  q: DrillQuestion;
  idx: number;
  onComplete: (completion: DrillCompletion) => void;
}) {
  const [selected, setSelected] = useState<"A" | "B" | "C" | "D" | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [reflection, setReflection] = useState<"had-this" | "more-practice" | null>(null);

  function revealStructured() {
    if (!revealed) {
      setRevealed(true);
    }
  }

  return (
    <div className={s.focusInner}>
      <header className={s.itemHeader}>
        <p className={s.eyebrow}>Question</p>
        <div className={s.itemTitleRow}>
          <h2 className={s.itemHeading}>
            {q.kind === "mcq" ? "Multiple-choice" : "Structured question"}
          </h2>
          <span className={s.itemIndex} aria-label={`Question ${idx + 1}`}>
            {String(idx + 1).padStart(2, "0")}
          </span>
        </div>
        <p className={s.itemMeta}>{metaLine(q)}</p>
      </header>

      <div className={s.stemBlock}>
        <p className={s.stem}>{renderExamText(q.stem)}</p>
      </div>

      {q.kind === "mcq" ? (
        <div className={s.actionBlock}>
          <ul className={s.optionList} aria-label="Answer choices">
            {q.options.map((opt) => (
              <li key={opt.id}>
                <button
                  type="button"
                  className={[
                    s.optionRow,
                    selected === opt.id ? s.optionRowSelected : "",
                    submitted && opt.id === q.correctOptionId ? s.optionRowCorrect : "",
                    submitted && selected === opt.id && selected !== q.correctOptionId
                      ? s.optionRowWrong
                      : "",
                  ].join(" ")}
                  onClick={() => {
                    setSelected(opt.id);
                    if (submitted) setSubmitted(false);
                  }}
                >
                  <span className={s.optionKey} aria-hidden>
                    {opt.id}
                  </span>
                  <span className={s.optionText}>{renderExamText(opt.text)}</span>
                </button>
              </li>
            ))}
          </ul>
          <div className={s.primaryRow}>
            <button
              type="button"
              className={s.primaryBtn}
              disabled={!selected}
              onClick={() => {
                setSubmitted(true);
                onComplete({
                  outcome: selected === q.correctOptionId ? "correct" : "needs-work",
                  selectedOptionId: selected ?? undefined,
                });
              }}
            >
              Check answer
            </button>
          </div>
          {submitted ? (
            <div
              className={`${s.feedbackPanel} ${
                selected === q.correctOptionId ? s.feedbackOk : s.feedbackBad
              }`}
              role="status"
            >
              <p className={s.feedbackTitle}>
                {selected === q.correctOptionId ? (
                  <>
                    <CheckCircle size={18} weight="bold" aria-hidden /> Correct
                  </>
                ) : (
                  <>
                    <WarningCircle size={18} weight="bold" aria-hidden /> Not quite
                  </>
                )}
              </p>
              {selected !== q.correctOptionId ? (
                <p className={s.feedbackMeta}>Correct option: {q.correctOptionId}</p>
              ) : null}
              <p className={s.feedbackBody}>{renderExamText(q.explanation)}</p>
            </div>
          ) : null}
        </div>
      ) : (
        <div className={s.actionBlock}>
          {!revealed ? (
            <div className={s.primaryRow}>
              <button type="button" className={s.primaryBtn} onClick={revealStructured}>
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

              <section className={s.reflectPanel} aria-label="Required self-check after reveal">
                <div className={s.reflectHead}>
                  <p className={s.reflectLabel}>Required checkpoint</p>
                  <p className={s.reflectPrompt}>How did this feel before you revealed the solution?</p>
                </div>
                <div className={s.reflectActions}>
                  <button
                    type="button"
                    className={`${s.reflectBtn} ${
                      reflection === "had-this" ? s.reflectBtnOnHadThis : ""
                    }`}
                    onClick={() => {
                      setReflection("had-this");
                      onComplete({ outcome: "correct" });
                    }}
                  >
                    I had this
                  </button>
                  <button
                    type="button"
                    className={`${s.reflectBtn} ${
                      reflection === "more-practice" ? s.reflectBtnOnMorePractice : ""
                    }`}
                    onClick={() => {
                      setReflection("more-practice");
                      onComplete({ outcome: "needs-work" });
                    }}
                  >
                    I need more practice
                  </button>
                </div>
                {reflection ? (
                  <p className={s.reflectDone}>Checkpoint saved. You can continue.</p>
                ) : (
                  <p className={s.reflectPending}>Choose one option to unlock the next question.</p>
                )}
              </section>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function FlashcardCard({
  card,
  idx,
  onComplete,
}: {
  card: Flashcard;
  idx: number;
  onComplete: () => void;
}) {
  const [revealed, setRevealed] = useState(false);

  function reveal() {
    if (!revealed) {
      setRevealed(true);
      onComplete();
    }
  }

  return (
    <div className={s.focusInner}>
      <header className={s.itemHeader}>
        <p className={s.eyebrow}>Card</p>
        <div className={s.itemTitleRow}>
          <h2 className={s.itemHeading}>Flashcard</h2>
          <span className={s.itemIndex} aria-label={`Flashcard ${idx + 1}`}>
            {String(idx + 1).padStart(2, "0")}
          </span>
        </div>
        <p className={s.itemMeta}>Difficulty {card.difficulty}</p>
      </header>

      <div className={s.stemBlock}>
        <p className={s.stem}>{renderExamText(card.front)}</p>
      </div>

      <div className={s.actionBlock}>
        {!revealed ? (
          <div className={s.primaryRow}>
            <button type="button" className={s.primaryBtn} onClick={reveal}>
              Reveal answer
            </button>
          </div>
        ) : (
          <div className={s.flashBack}>
            <p className={s.flashBackLead}>{renderExamText(card.back)}</p>
            <dl className={s.flashMeta}>
              <div className={s.flashMetaRow}>
                <dt>Exam phrasing</dt>
                <dd>{renderExamText(card.examPhrasing)}</dd>
              </div>
              {card.confusionPair ? (
                <div className={s.flashMetaRow}>
                  <dt>Common confusion</dt>
                  <dd>{renderExamText(card.confusionPair)}</dd>
                </div>
              ) : null}
            </dl>
          </div>
        )}
      </div>
    </div>
  );
}

export default function PracticeArticle({ pack, subject, noteMeta, canArchiveMistakes }: Props) {
  const storageKey = `practice-session:${subject}:${pack.noteId}`;
  const lastSessionKey = `practice-last-session:${subject}`;
  const [hydrated, setHydrated] = useState(false);
  const [resumeNotice, setResumeNotice] = useState<string | null>(null);
  const [view, setView] = useState<"drills" | "flashcards">("drills");
  const [indexByView, setIndexByView] = useState<{ drills: number; flashcards: number }>({
    drills: 0,
    flashcards: 0,
  });
  const [checkedByView, setCheckedByView] = useState<{ drills: string[]; flashcards: string[] }>({
    drills: [],
    flashcards: [],
  });
  const [drillOutcomes, setDrillOutcomes] = useState<Record<string, DrillOutcome>>({});
  const [showDrillSummary, setShowDrillSummary] = useState(false);
  const [showFlashSummary, setShowFlashSummary] = useState(false);
  const data = useMemo(() => (view === "drills" ? pack.drills : pack.flashcards), [pack, view]);
  const total = data.length;
  const currentIndex = Math.min(indexByView[view], total - 1);
  const current = data[currentIndex];
  const currentId = (current as DrillQuestion | Flashcard).id;
  const checkedIds = checkedByView[view];
  const completedCount = checkedIds.length;
  const progressPct = Math.round((completedCount / total) * 100);
  const currentComplete = checkedIds.includes(currentId);
  const idsInOrder = data.map((item) => (item as DrillQuestion | Flashcard).id);
  let highestContiguousCompleted = -1;
  for (let i = 0; i < idsInOrder.length; i += 1) {
    if (checkedIds.includes(idsInOrder[i]!)) highestContiguousCompleted = i;
    else break;
  }
  const unlockedMaxIndex = Math.min(highestContiguousCompleted + 1, total - 1);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const timer = window.setTimeout(() => {
      try {
        const raw = studyStorageGetItem(storageKey);
        if (!raw) {
          setHydrated(true);
          return;
        }
        const parsed = JSON.parse(raw) as {
          view?: "drills" | "flashcards";
          indexByView?: { drills?: number; flashcards?: number };
          checkedByView?: { drills?: string[]; flashcards?: string[] };
          drillOutcomes?: Record<string, DrillOutcome>;
          showDrillSummary?: boolean;
          showFlashSummary?: boolean;
        };
        const drillIds = new Set(pack.drills.map((q) => q.id));
        const flashIds = new Set(pack.flashcards.map((q) => q.id));

        setView(parsed.view === "flashcards" ? "flashcards" : "drills");
        setIndexByView({
          drills: Math.max(
            0,
            Math.min(parsed.indexByView?.drills ?? 0, Math.max(pack.drills.length - 1, 0)),
          ),
          flashcards: Math.max(
            0,
            Math.min(parsed.indexByView?.flashcards ?? 0, Math.max(pack.flashcards.length - 1, 0)),
          ),
        });
        setCheckedByView({
          drills: (parsed.checkedByView?.drills ?? []).filter((id) => drillIds.has(id)),
          flashcards: (parsed.checkedByView?.flashcards ?? []).filter((id) => flashIds.has(id)),
        });
        const nextOutcomes: Record<string, DrillOutcome> = {};
        for (const [id, outcome] of Object.entries(parsed.drillOutcomes ?? {})) {
          if (drillIds.has(id) && (outcome === "correct" || outcome === "needs-work")) {
            nextOutcomes[id] = outcome;
          }
        }
        setDrillOutcomes(nextOutcomes);
        setShowDrillSummary(Boolean(parsed.showDrillSummary));
        setShowFlashSummary(Boolean(parsed.showFlashSummary));
        const restoredView = parsed.view === "flashcards" ? "flashcards" : "drills";
        const restoredIdx = Math.max(
          0,
          restoredView === "flashcards"
            ? Math.min(parsed.indexByView?.flashcards ?? 0, Math.max(pack.flashcards.length - 1, 0))
            : Math.min(parsed.indexByView?.drills ?? 0, Math.max(pack.drills.length - 1, 0)),
        );
        if (restoredIdx > 0) {
          const totalItems = restoredView === "flashcards" ? pack.flashcards.length : pack.drills.length;
          setResumeNotice(
            `Resumed ${restoredView === "flashcards" ? "flashcards" : "drills"} at ${restoredIdx + 1}/${totalItems}.`,
          );
        }
      } catch {
        // Ignore malformed persisted sessions.
      } finally {
        setHydrated(true);
      }
    }, 0);
    return () => window.clearTimeout(timer);
  }, [pack.drills, pack.flashcards, storageKey]);

  useEffect(() => {
    if (!resumeNotice) return;
    const timer = window.setTimeout(() => setResumeNotice(null), 2600);
    return () => window.clearTimeout(timer);
  }, [resumeNotice]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!hydrated) return;
    studyStorageSetItem(
      storageKey,
      JSON.stringify({
        view,
        indexByView,
        checkedByView,
        drillOutcomes,
        showDrillSummary,
        showFlashSummary,
        updatedAt: Date.now(),
      }),
    );
    studyStorageSetItem(
      lastSessionKey,
      JSON.stringify({
        noteId: pack.noteId,
        view,
        updatedAt: Date.now(),
      }),
    );
    markRecentActivity({
      kind: view === "drills" ? "drill" : "flashcard",
      href: `/${subject}/practice/${pack.noteId}`,
      title: noteMeta.subtopicTitle,
      subtitle: view === "drills" ? `Drill set · ${noteMeta.topicTitle}` : `Flashcard deck · ${noteMeta.topicTitle}`,
    });
  }, [
    hydrated,
    view,
    indexByView,
    checkedByView,
    drillOutcomes,
    showDrillSummary,
    showFlashSummary,
    storageKey,
    lastSessionKey,
    pack.noteId,
    subject,
    noteMeta.subtopicTitle,
    noteMeta.topicTitle,
    canArchiveMistakes,
  ]);

  function switchView(nextView: "drills" | "flashcards") {
    setView(nextView);
    setShowDrillSummary(false);
    setShowFlashSummary(false);
  }

  function goPrev() {
    setIndexByView((prev) => ({
      ...prev,
      [view]: prev[view] > 0 ? prev[view] - 1 : prev[view],
    }));
  }

  function goNext() {
    setIndexByView((prev) => ({
      ...prev,
      [view]: prev[view] < unlockedMaxIndex ? prev[view] + 1 : prev[view],
    }));
  }

  function markCurrentComplete(completion?: DrillCompletion) {
    if (!checkedByView[view].includes(currentId)) {
      setCheckedByView((prev) => ({
        ...prev,
        [view]: [...prev[view], currentId],
      }));
    }
    if (view === "drills" && completion) {
      setDrillOutcomes((prev) => ({ ...prev, [currentId]: completion.outcome }));
      if (canArchiveMistakes && completion.outcome === "needs-work") {
        archiveMistake({
          subject,
          noteId: pack.noteId,
          question: current as DrillQuestion,
          reason:
            (current as DrillQuestion).kind === "mcq"
              ? "mcq-wrong"
              : "structured-needs-practice",
          selectedOptionId: completion.selectedOptionId,
          topicTitle: noteMeta.topicTitle,
          subtopicTitle: noteMeta.subtopicTitle,
          subtopicCode: noteMeta.subtopicCode,
        });
      }
    }
  }

  const modeLabel = view === "drills" ? "Drill questions" : "Flashcards";
  const allCompleted = completedCount === total;
  const showFinishAction =
    currentIndex === total - 1 &&
    currentComplete &&
    !showDrillSummary &&
    !showFlashSummary;
  const answeredDrills = pack.drills.filter((q) => drillOutcomes[q.id]).length;
  const correctDrills = pack.drills.filter((q) => drillOutcomes[q.id] === "correct").length;
  const needsWorkDrills = pack.drills.filter((q) => drillOutcomes[q.id] === "needs-work").length;
  const correctPct = answeredDrills === 0 ? 0 : Math.round((correctDrills / answeredDrills) * 100);

  return (
    <div className={s.session}>
      <div className={s.contextStrip}>
        {resumeNotice ? (
          <p className={s.resumeToast} role="status">
            {resumeNotice}
          </p>
        ) : null}
        <p className={s.sessionLabel}>Practice session</p>
        <div className={s.contextMain}>
          <div className={s.segmented} role="tablist" aria-label="Practice type">
            <button
              type="button"
              role="tab"
              aria-selected={view === "drills"}
              className={`${s.segmentedBtn} ${view === "drills" ? s.segmentedOn : ""}`}
              onClick={() => switchView("drills")}
            >
              Drills
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={view === "flashcards"}
              className={`${s.segmentedBtn} ${view === "flashcards" ? s.segmentedOn : ""}`}
              onClick={() => switchView("flashcards")}
            >
              Flashcards
            </button>
          </div>
          <div className={s.progressCluster}>
            <span className={s.progressFrac}>
              <span className={s.tabular}>{String(currentIndex + 1).padStart(2, "0")}</span>
              <span className={s.progressSep} aria-hidden>
                /
              </span>
              <span className={s.tabular}>{String(total).padStart(2, "0")}</span>
            </span>
            <div className={s.progressTrack} aria-hidden>
              <div className={s.progressFill} style={{ width: `${progressPct}%` }} />
            </div>
            <span className={s.progressPct}>
              <span className={s.tabular}>{progressPct}</span>%
            </span>
          </div>
        </div>
        <p className={s.sessionHint}>
          {modeLabel}. Complete the current item to move on.
        </p>
      </div>

      <nav className={s.stepStrip} aria-label="Items in this set">
        {data.map((item, i) => {
          const id = (item as DrillQuestion | Flashcard).id;
          const isCurrent = i === currentIndex;
          const isDone = checkedIds.includes(id);
          const locked = i > unlockedMaxIndex;
          return (
            <button
              key={id}
              type="button"
              className={[
                s.stepBtn,
                isCurrent ? s.stepCurrent : "",
                isDone ? s.stepDone : "",
                locked ? s.stepLocked : "",
              ].join(" ")}
              onClick={() =>
                setIndexByView((prev) => ({
                  ...prev,
                  [view]: i,
                }))
              }
              disabled={locked}
              aria-current={isCurrent ? "step" : undefined}
              aria-label={
                locked
                  ? `Item ${i + 1}, locked`
                  : isDone
                    ? `Item ${i + 1}, completed`
                    : `Item ${i + 1}`
              }
            >
              <span className={s.tabular}>{i + 1}</span>
            </button>
          );
        })}
      </nav>

      <section className={s.focusPanel} aria-live="polite">
        {view === "drills" && showDrillSummary ? (
          <div className={s.summaryPanel}>
            <header className={s.summaryHeader}>
              <p className={s.eyebrow}>Performance overview</p>
              <h2 className={s.summaryTitle}>Drill session complete</h2>
              <p className={s.summaryText}>
                You finished all {total} drill questions. Review your breakdown before moving on.
              </p>
            </header>
            <div className={s.summaryGrid}>
              <article className={s.summaryStat}>
                <p className={s.summaryStatLabel}>Correct</p>
                <p className={s.summaryStatValue}>
                  <span className={s.tabular}>{correctDrills}</span>
                </p>
              </article>
              <article className={s.summaryStat}>
                <p className={s.summaryStatLabel}>Needs work</p>
                <p className={s.summaryStatValue}>
                  <span className={s.tabular}>{needsWorkDrills}</span>
                </p>
              </article>
              <article className={s.summaryStat}>
                <p className={s.summaryStatLabel}>Accuracy</p>
                <p className={s.summaryStatValue}>
                  <span className={s.tabular}>{correctPct}</span>%
                </p>
              </article>
            </div>
            <div className={s.summaryActions}>
              <button
                type="button"
                className={s.ghostBtn}
                onClick={() => {
                  setShowDrillSummary(false);
                  setIndexByView((prev) => ({ ...prev, drills: 0 }));
                }}
              >
                Review drills
              </button>
              <button type="button" className={s.primaryBtn} onClick={() => switchView("flashcards")}>
                Continue to flashcards
              </button>
            </div>
          </div>
        ) : view === "flashcards" && showFlashSummary ? (
          <div className={s.summaryPanel}>
            <header className={s.summaryHeader}>
              <p className={s.eyebrow}>Completion overview</p>
              <h2 className={s.summaryTitle}>Flashcard set complete</h2>
              <p className={s.summaryText}>
                You completed all {total} flashcards for this subtopic.
              </p>
            </header>
            <div className={s.summaryGrid}>
              <article className={s.summaryStat}>
                <p className={s.summaryStatLabel}>Reviewed</p>
                <p className={s.summaryStatValue}>
                  <span className={s.tabular}>{completedCount}</span>
                </p>
              </article>
              <article className={s.summaryStat}>
                <p className={s.summaryStatLabel}>Total cards</p>
                <p className={s.summaryStatValue}>
                  <span className={s.tabular}>{total}</span>
                </p>
              </article>
              <article className={s.summaryStat}>
                <p className={s.summaryStatLabel}>Completion</p>
                <p className={s.summaryStatValue}>
                  <span className={s.tabular}>{progressPct}</span>%
                </p>
              </article>
            </div>
            <div className={s.summaryActions}>
              <button
                type="button"
                className={s.ghostBtn}
                onClick={() => {
                  setShowFlashSummary(false);
                  setIndexByView((prev) => ({ ...prev, flashcards: 0 }));
                }}
              >
                Review flashcards
              </button>
              <button type="button" className={s.primaryBtn} onClick={() => switchView("drills")}>
                Back to drills
              </button>
            </div>
          </div>
        ) : view === "drills" ? (
          <DrillCard
            key={(current as SubtopicPracticePack["drills"][number]).id}
            q={current as DrillQuestion}
            idx={currentIndex}
            onComplete={markCurrentComplete}
          />
        ) : (
          <FlashcardCard
            key={(current as SubtopicPracticePack["flashcards"][number]).id}
            card={current as Flashcard}
            idx={currentIndex}
            onComplete={markCurrentComplete}
          />
        )}

        {!showDrillSummary && !showFlashSummary ? (
          <footer className={s.panelFooter}>
            <div className={s.tagRow} aria-label="Topic tags">
              {(current as DrillQuestion | Flashcard).tags.map((tag) => (
                <span key={tag} className={s.tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className={s.navCluster}>
              <button
                type="button"
                className={s.ghostBtn}
                onClick={goPrev}
                disabled={currentIndex === 0}
              >
                Previous
              </button>
              <button
                type="button"
                className={s.ghostBtn}
                onClick={
                  showFinishAction
                    ? () => {
                        if (!allCompleted) return;
                        if (view === "drills") {
                          setShowDrillSummary(true);
                        } else {
                          setShowFlashSummary(true);
                        }
                      }
                    : goNext
                }
                disabled={
                  showFinishAction ? !allCompleted : currentIndex === total - 1 || !currentComplete
                }
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
