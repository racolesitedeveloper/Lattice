"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Trash } from "@phosphor-icons/react";
import {
  clearMistakes,
  readMistakes,
  removeMistakeEverywhere,
  type MistakeRecord,
} from "@/lib/practice/mistakes";
import { buildSubtopicLookup, subtopicLineFromRecord, type SubtopicInfo } from "@/lib/course/subtopic-lookup";
import { renderExamText } from "@/lib/practice/render-exam-text";
import s from "./mistakes.module.css";

const SUBJECT_LABELS: Record<string, string> = {
  physics: "Physics",
  chemistry: "Chemistry",
  biology: "Biology",
};

const SUBJECT_ORDER = ["physics", "chemistry", "biology"] as const;

export default function MistakesClient({ subject }: { subject: string }) {
  const [records, setRecords] = useState<MistakeRecord[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(() => new Set());
  const [subtopicLookup, setSubtopicLookup] = useState<Map<string, SubtopicInfo> | null>(null);

  const subjectKey = useMemo(
    () =>
      Array.from(new Set(records.map((r) => r.subject.toLowerCase())))
        .sort()
        .join(","),
    [records],
  );

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setRecords(readMistakes(subject));
      setHydrated(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, [subject]);

  useEffect(() => {
    if (!hydrated || records.length === 0) return;
    let cancelled = false;
    (async () => {
      const subjects = Array.from(new Set(records.map((r) => r.subject.toLowerCase())));
      const map = await buildSubtopicLookup(subjects);
      if (!cancelled) setSubtopicLookup(map);
    })();
    return () => {
      cancelled = true;
    };
  }, [hydrated, records, subjectKey]);

  const bySubject = useMemo(() => {
    const bySub = new Map<string, MistakeRecord[]>();
    for (const record of records) {
      const subj = record.subject;
      bySub.set(subj, [...(bySub.get(subj) ?? []), record]);
    }
    const subjects = uniqueSubjects(records, bySub);
    return subjects.map((subj) => {
      const subjectRecords = bySub.get(subj)!;
      return {
        subject: subj,
        records: subjectRecords,
        count: subjectRecords.length,
        repeatedCount: subjectRecords.filter((record) => record.timesArchived > 1).length,
      };
    });
  }, [records]);

  function remove(id: string) {
    removeMistakeEverywhere(id);
    setRecords(readMistakes(subject));
  }

  function clearAll() {
    clearMistakes(subject);
    setRecords([]);
  }

  function toggleExpanded(id: string) {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  if (!hydrated) {
    return (
      <div className={s.emptyState} aria-busy="true">
        <p className={s.emptyTitle}>Loading mistakes</p>
        <p className={s.emptyText}>Loading your practice history.</p>
      </div>
    );
  }

  if (records.length === 0) {
    return (
      <div className={s.emptyState}>
        <p className={s.emptyTitle}>No archived mistakes yet</p>
        <p className={s.emptyText}>
          When you miss an MCQ or choose “I need more practice” on a structured question,
          it will appear here for this subject.
        </p>
      </div>
    );
  }

  return (
    <div className={s.archive}>
      <div className={s.archiveHead}>
        <div>
          <p className={s.kicker}>Local archive</p>
          <p className={s.summary}>
            <span className={s.tabular}>{records.length}</span>{" "}
            {records.length === 1 ? "archived mistake" : "archived mistakes"}
          </p>
          <p className={s.summaryNote}>Correct answers leave this subject archive.</p>
        </div>
        <button type="button" className={s.clearBtn} onClick={clearAll}>
          Clear archive
        </button>
      </div>

      <div className={s.subjectSummary} aria-label="Mistakes by subject">
        {bySubject.map((block) => (
          <a key={block.subject} href={`#mistakes-${block.subject}`} className={s.subjectSummaryItem}>
            <span>{subjectLabel(block.subject)}</span>
            <strong className={s.tabular}>{block.count}</strong>
          </a>
        ))}
      </div>

      <div className={s.groupStack}>
        {bySubject.map((block) => (
          <section key={block.subject} id={`mistakes-${block.subject}`} className={s.subjectBlock}>
            <div className={s.subjectHead}>
              <div>
                <h2 className={s.subjectHeading}>{subjectLabel(block.subject)}</h2>
                <p className={s.subjectMeta}>
                  <span className={s.tabular}>{block.count}</span>{" "}
                  {block.count === 1 ? "archived question" : "archived questions"}
                  {block.repeatedCount > 0 ? (
                    <>
                      {" "}
                      · <span className={s.tabular}>{block.repeatedCount}</span> repeated
                    </>
                  ) : null}
                </p>
              </div>
              <Link href={`/${block.subject}/mistakes/drill`} className={s.subjectDrillLink}>
                Start {subjectLabel(block.subject)} mistakes drill
              </Link>
            </div>
            <div className={s.table} aria-label={`${subjectLabel(block.subject)} mistakes`}>
              <div className={s.tableHead} aria-hidden="true">
                <span>Type</span>
                <span>Subtopic</span>
                <span>Question</span>
                <span>Last seen</span>
                <span>Actions</span>
              </div>
              <div className={s.list}>
                {block.records.map((record) => (
                  <MistakeRow
                    key={record.id}
                    record={record}
                    subtopicLine={subtopicLineFromRecord(record, subtopicLookup)}
                    expanded={expandedIds.has(record.id)}
                    onToggleExpanded={toggleExpanded}
                    onRemove={remove}
                  />
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

function reasonLabel(record: MistakeRecord): string {
  return record.reason === "mcq-wrong" ? "Missed MCQ" : "Needs practice";
}

function subjectLabel(subject: string): string {
  return SUBJECT_LABELS[subject] ?? subject;
}

function uniqueSubjects(records: MistakeRecord[], bySub: Map<string, MistakeRecord[]>) {
  const fromOrder = SUBJECT_ORDER.filter((id) => bySub.has(id));
  const rest = Array.from(bySub.keys()).filter((id) => !SUBJECT_ORDER.some((k) => k === id));
  rest.sort();
  if (fromOrder.length || rest.length) return [...fromOrder, ...rest];
  const seen = new Set<string>();
  const order: string[] = [];
  for (const r of records) {
    if (!seen.has(r.subject)) {
      seen.add(r.subject);
      order.push(r.subject);
    }
  }
  return order;
}

function formatDate(timestamp: number): string {
  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
  }).format(new Date(timestamp));
}

function MistakeRow({
  record,
  subtopicLine,
  expanded,
  onToggleExpanded,
  onRemove,
}: {
  record: MistakeRecord;
  subtopicLine: string;
  expanded: boolean;
  onToggleExpanded: (id: string) => void;
  onRemove: (id: string) => void;
}) {
  const question = record.question;
  const typeMeta = question.kind === "mcq" ? "MCQ" : `${question.marks} marks`;

  return (
    <article className={s.row}>
      <div className={s.rowMain}>
        <div className={s.rowType}>
          <span className={s.reason}>{reasonLabel(record)}</span>
          <span>{typeMeta}</span>
        </div>
        <div className={s.rowSubtopic}>
          <span title={subtopicLine}>{subtopicLine}</span>
          <span>Difficulty {record.question.difficulty}</span>
        </div>
        <button type="button" className={s.questionButton} onClick={() => onToggleExpanded(record.id)}>
          {renderExamText(record.question.stem)}
        </button>
        <div className={s.rowSeen}>
          <span>{formatDate(record.lastArchivedAt)}</span>
          {record.timesArchived > 1 ? (
            <span className={s.repeatBadge}>
              Repeated <span className={s.tabular}>{record.timesArchived}</span>x
            </span>
          ) : null}
        </div>
        <div className={s.actions}>
          <button type="button" className={s.detailBtn} onClick={() => onToggleExpanded(record.id)} aria-expanded={expanded}>
            {expanded ? "Hide" : "Details"}
          </button>
          <Link href={`/${record.subject}/practice/${record.noteId}`} className={s.retryLink}>
            Retry
          </Link>
          <button
            type="button"
            className={s.removeBtn}
            onClick={() => onRemove(record.id)}
            aria-label="Remove archived mistake"
          >
            <Trash size={15} weight="regular" aria-hidden />
          </button>
        </div>
      </div>
      {expanded ? (
        <div className={s.rowDetail}>
          {question.kind === "mcq" ? (
            <p className={s.answerLine}>
              Your answer: <strong>{record.selectedOptionId ?? "Not saved"}</strong>
              <span aria-hidden> · </span>
              Correct answer: <strong>{question.correctOptionId}</strong>
            </p>
          ) : (
            <p className={s.answerLine}>
              Common trap: {renderExamText(question.commonMistake)}
            </p>
          )}
        </div>
      ) : null}
    </article>
  );
}
