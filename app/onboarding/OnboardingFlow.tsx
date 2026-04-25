"use client";

import { useActionState, useMemo, useState } from "react";
import Link from "next/link";
import { Atom, Check, CheckCircle, Flask, Leaf, Lock, X } from "@phosphor-icons/react";
import { completeOnboarding } from "@/app/actions/onboarding";
import { archiveMistake } from "@/lib/practice/mistakes";
import type { McqDrillQuestion } from "@/lib/practice/types";
import Logo from "@/components/ui/Logo";
import s from "./onboarding.module.css";

type Subject = "physics" | "chemistry" | "biology";
type ExamPeriod = "may-june" | "oct-nov";
type StudyLevel = "as" | "a2";

export type OnboardingPreviewQuestion = {
  subject: Subject;
  subjectLabel: string;
  noteId: string;
  topicTitle: string;
  subtopicTitle: string;
  subtopicCode: string;
  question: McqDrillQuestion;
};

type Step = "intro" | "setup" | "preview" | "complete";

type AnswerState = Record<
  Subject,
  {
    selectedOptionId: "A" | "B" | "C" | "D";
    isCorrect: boolean;
  }
>;

const subjectIcon: Record<Subject, typeof Atom> = {
  physics: Atom,
  chemistry: Flask,
  biology: Leaf,
};

const subjects: { id: Subject; label: string; desc: string }[] = [
  {
    id: "physics",
    label: "Physics",
    desc: "Mechanics, waves, electricity, fields, and more.",
  },
  {
    id: "chemistry",
    label: "Chemistry",
    desc: "Physical, organic, and inorganic chemistry.",
  },
  {
    id: "biology",
    label: "Biology",
    desc: "Cell biology, genetics, ecology, and physiology.",
  },
];

const levels: { id: StudyLevel; label: string; desc: string }[] = [
  { id: "as", label: "AS", desc: "First-year topics and foundations." },
  { id: "a2", label: "A2", desc: "Second-year topics and full A Level prep." },
];

const examPeriods: { id: ExamPeriod; label: string; desc: string }[] = [
  {
    id: "may-june",
    label: "May/June",
    desc: "For the summer Cambridge exam series.",
  },
  {
    id: "oct-nov",
    label: "Oct/Nov",
    desc: "For the autumn Cambridge exam series.",
  },
];

const freeItems = [
  "Notes and drills for the first 3 topics per subject",
  "A lightweight diagnostic that can seed your archive",
  "Switch between Physics, Chemistry, and Biology freely",
];

const lockedItems = [
  "Mistakes archive for the full course",
  "Full notes and practice beyond topic 3",
];

const STEP_INDEX: Record<Step, number> = {
  intro: 1,
  setup: 2,
  preview: 3,
  complete: 4,
};

const levelLabels: Record<StudyLevel, string> = {
  as: "AS Level",
  a2: "A2 Level",
};

const examPeriodLabels: Record<ExamPeriod, string> = {
  "may-june": "May/June",
  "oct-nov": "Oct/Nov",
};

export default function OnboardingFlow({ previewQuestions }: { previewQuestions: OnboardingPreviewQuestion[] }) {
  const [step, setStep] = useState<Step>("intro");
  const [selectedSubjects, setSelectedSubjects] = useState<Subject[]>([]);
  const [level, setLevel] = useState<StudyLevel | null>(null);
  const [examPeriod, setExamPeriod] = useState<ExamPeriod | null>(null);
  const [answers, setAnswers] = useState<AnswerState>({} as AnswerState);
  const [state, action, pending] = useActionState(completeOnboarding, null);

  const selectedQuestions = useMemo(
    () => previewQuestions.filter((item) => selectedSubjects.includes(item.subject)),
    [previewQuestions, selectedSubjects],
  );
  const canContinueSetup = selectedSubjects.length > 0 && level !== null && examPeriod !== null;
  const answeredCount = selectedQuestions.filter((item) => answers[item.subject]).length;
  const canCompletePreview = selectedQuestions.length > 0 && answeredCount === selectedQuestions.length;
  const archivedCount = selectedQuestions.filter((item) => answers[item.subject]?.isCorrect === false).length;

  function toggleSubject(subject: Subject) {
    setSelectedSubjects((prev) =>
      prev.includes(subject) ? prev.filter((item) => item !== subject) : [...prev, subject],
    );
    setAnswers((prev) => {
      const next = { ...prev };
      delete next[subject];
      return next;
    });
  }

  function answerQuestion(item: OnboardingPreviewQuestion, selectedOptionId: "A" | "B" | "C" | "D") {
    const isCorrect = selectedOptionId === item.question.correctOptionId;
    setAnswers((prev) => ({ ...prev, [item.subject]: { selectedOptionId, isCorrect } }));

    if (!isCorrect) {
      archiveMistake({
        subject: item.subject,
        noteId: item.noteId,
        question: item.question,
        reason: "mcq-wrong",
        selectedOptionId,
        topicTitle: item.topicTitle,
        subtopicTitle: item.subtopicTitle,
        subtopicCode: item.subtopicCode,
      });
    }
  }

  return (
    <main className={step === "setup" ? `${s.shell} ${s.shellSetup}` : s.shell}>
      <div className={s.inner}>
        <div className={s.top}>
          <Link href="/" className={s.brand} aria-label="Lattice home">
            <Logo size={24} />
          </Link>
          <div className={s.progress} aria-label={`Step ${STEP_INDEX[step]} of 4`}>
            <div className={s.progressFill} style={{ width: `${(STEP_INDEX[step] / 4) * 100}%` }} />
          </div>
        </div>

        {step === "intro" ? (
          <section className={`${s.content} ${s.contentIntro}`}>
            <div className={s.titleBlock}>
              <p className={s.kicker}>Welcome to Lattice</p>
              <h1 className={s.heading}>A calm study shell for Cambridge A Level science.</h1>
              <p className={s.sub}>
                Syllabus-aware notes, short drills, flashcards, and a mistake archive that turns revision into a plan.
              </p>
              <button type="button" className={s.submit} onClick={() => setStep("setup")}>
                Set up my workspace
              </button>
            </div>
            <div className={s.tierNote}>
              <p className={s.tierNoteHeading}>What you get first</p>
              <ul className={s.tierList}>
                {freeItems.map((item) => (
                  <li key={item} className={s.tierItem}>
                    <Check className={s.checkIcon} size={14} weight="bold" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <div className={s.tierDivider} aria-hidden="true" />
              <ul className={s.tierList}>
                {lockedItems.map((item) => (
                  <li key={item} className={`${s.tierItem} ${s.tierItemLocked}`}>
                    <span className={s.lockIconWrap} aria-hidden="true">
                      <Lock className={s.lockIcon} weight="bold" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        {step === "setup" ? (
          <section className={`${s.content} ${s.contentSetup}`}>
            <div className={s.titleBlock}>
              <p className={s.setupKicker}>Workspace</p>
              <h1 className={s.heading}>Tell us what you’re studying.</h1>
              <p className={s.sub}>
                This shapes the first dashboard. You can change subjects and exam timing later.
              </p>
            </div>

            <div className={s.setupStack}>
              <div className={s.setupSurface}>
                <section className={s.setupSection} aria-labelledby="level-heading">
                  <div>
                    <h2 id="level-heading" className={s.setupSectionLabel}>
                      Level
                    </h2>
                    <p className={s.setupSectionHint}>Choose the level you are working through right now.</p>
                  </div>
                  <div className={s.periodGrid} role="radiogroup" aria-label="Study level">
                    {levels.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        role="radio"
                        aria-checked={level === item.id}
                        className={`${s.periodCard} ${level === item.id ? s.periodCardOn : ""}`}
                        onClick={() => setLevel(item.id)}
                      >
                        <span className={s.periodName}>{item.label}</span>
                        <span className={s.periodDesc}>{item.desc}</span>
                      </button>
                    ))}
                  </div>
                </section>

                <section className={s.setupSection} aria-labelledby="exam-period-heading">
                  <div>
                    <h2 id="exam-period-heading" className={s.setupSectionLabel}>
                      Exam period
                    </h2>
                    <p className={s.setupSectionHint}>
                      Pick the series you are aiming for. You can change this later.
                    </p>
                  </div>
                  <div className={s.periodGrid} role="radiogroup" aria-label="Exam period">
                    {examPeriods.map((period) => (
                      <button
                        key={period.id}
                        type="button"
                        role="radio"
                        aria-checked={examPeriod === period.id}
                        className={`${s.periodCard} ${examPeriod === period.id ? s.periodCardOn : ""}`}
                        onClick={() => setExamPeriod(period.id)}
                      >
                        <span className={s.periodName}>{period.label}</span>
                        <span className={s.periodDesc}>{period.desc}</span>
                      </button>
                    ))}
                  </div>
                </section>

                <section className={s.setupSection} aria-labelledby="subjects-heading">
                  <div>
                    <h2 id="subjects-heading" className={s.setupSectionLabel}>
                      Subjects
                    </h2>
                    <p className={s.setupSectionHint}>Select every subject you currently take.</p>
                  </div>
                  <div className={s.subjectGrid} aria-label="Subjects">
                    {subjects.map((subj) => {
                      const SubIcon = subjectIcon[subj.id];
                      return (
                        <button
                          key={subj.id}
                          type="button"
                          aria-pressed={selectedSubjects.includes(subj.id)}
                          className={`${s.subjectCard} ${selectedSubjects.includes(subj.id) ? s.subjectCardOn : ""}`}
                          onClick={() => toggleSubject(subj.id)}
                        >
                          <span className={s.subjectIcon} aria-hidden>
                            <SubIcon size={20} weight="duotone" />
                          </span>
                          <span className={s.subjectName}>{subj.label}</span>
                          <span className={s.subjectDesc}>{subj.desc}</span>
                        </button>
                      );
                    })}
                  </div>
                </section>
              </div>
            </div>

            <div className={`${s.stepActions} ${s.stepActionsSetup}`}>
              <button type="button" className={s.secondaryButton} onClick={() => setStep("intro")}>
                Back
              </button>
              <button
                type="button"
                className={s.submit}
                disabled={!canContinueSetup}
                onClick={() => {
                  if (canContinueSetup) setStep("preview");
                }}
              >
                Preview drills
              </button>
            </div>
          </section>
        ) : null}

        {step === "preview" ? (
          <section className={`${s.content} ${s.contentPreview}`}>
            <div className={s.titleBlock}>
              <h1 className={s.heading}>Try one question per subject.</h1>
              <p className={s.sub}>
                Missed answers seed your archive so the first dashboard already has a useful next step.
              </p>
            </div>

            <div className={s.previewStack}>
              {selectedQuestions.map((item) => {
                const answer = answers[item.subject];
                return (
                  <article key={item.subject} className={s.previewCard}>
                    <div className={s.previewMeta}>
                      <span>{item.subjectLabel}</span>
                      <span>{item.subtopicCode} · {item.subtopicTitle}</span>
                    </div>
                    <h2 className={s.previewStem}>{item.question.stem}</h2>
                    <div className={s.optionList} role="radiogroup" aria-label={`${item.subjectLabel} preview question`}>
                      {item.question.options.map((option) => {
                        const selected = answer?.selectedOptionId === option.id;
                        const correct = option.id === item.question.correctOptionId;
                        return (
                          <button
                            key={option.id}
                            type="button"
                            className={`${s.optionButton} ${selected ? s.optionButtonOn : ""} ${
                              answer && correct ? s.optionButtonCorrect : ""
                            } ${answer && selected && !correct ? s.optionButtonWrong : ""}`}
                            disabled={Boolean(answer)}
                            onClick={() => answerQuestion(item, option.id)}
                          >
                            <span>{option.id}</span>
                            {option.text}
                          </button>
                        );
                      })}
                    </div>
                    {answer ? (
                      <div className={`${s.feedback} ${answer.isCorrect ? s.feedbackGood : s.feedbackBad}`}>
                        {answer.isCorrect ? (
                          <Check size={15} weight="bold" aria-hidden />
                        ) : (
                          <X size={15} weight="bold" aria-hidden />
                        )}
                        <p>{answer.isCorrect ? "Correct. Nice start." : "Saved to your archive for review."}</p>
                      </div>
                    ) : null}
                  </article>
                );
              })}
            </div>

            <div className={s.stepActions}>
              <button type="button" className={s.secondaryButton} onClick={() => setStep("setup")}>
                Back
              </button>
              <button
                type="button"
                className={s.submit}
                disabled={!canCompletePreview}
                onClick={() => {
                  if (canCompletePreview) setStep("complete");
                }}
              >
                Continue
              </button>
            </div>
          </section>
        ) : null}

        {step === "complete" ? (
          <section className={`${s.content} ${s.contentComplete}`}>
            <div className={s.completeCard}>
              <div className={s.completeMark} aria-hidden="true">
                <CheckCircle size={34} weight="fill" />
              </div>
              <div className={s.titleBlock}>
                <p className={s.kicker}>Setup complete</p>
                <h1 className={s.heading}>Your workspace is ready.</h1>
                <p className={s.sub}>
                  {archivedCount > 0
                    ? `${archivedCount} preview question${archivedCount === 1 ? "" : "s"} added to your archive.`
                    : "No preview mistakes yet. Your archive will fill as you drill."}
                </p>
              </div>
              <dl className={s.completeSummary} aria-label="Workspace summary">
                <div>
                  <dt>Subjects</dt>
                  <dd>{selectedSubjects.length}</dd>
                </div>
                <div>
                  <dt>Level</dt>
                  <dd>{level ? levelLabels[level] : "Not set"}</dd>
                </div>
                <div>
                  <dt>Series</dt>
                  <dd>{examPeriod ? examPeriodLabels[examPeriod] : "Not set"}</dd>
                </div>
              </dl>
            </div>
            <form action={action} className={s.form}>
              {selectedSubjects.map((subject) => (
                <input key={subject} type="hidden" name="subjects" value={subject} readOnly />
              ))}
              <input type="hidden" name="level" value={level ?? ""} readOnly />
              <input type="hidden" name="examPeriod" value={examPeriod ?? ""} readOnly />

              {state?.error ? <p className={s.error} role="alert">{state.error}</p> : null}

              <div className={s.stepActions}>
                <button type="button" className={s.secondaryButton} onClick={() => setStep("preview")}>
                  Back
                </button>
                <button type="submit" className={s.submit} disabled={pending}>
                  {pending ? "Starting..." : "Open dashboard"}
                </button>
              </div>
            </form>
          </section>
        ) : null}
      </div>
    </main>
  );
}
