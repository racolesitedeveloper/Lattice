"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { buildSubtopicLookup, subtopicDisplayFields, type SubtopicInfo } from "@/lib/course/subtopic-lookup";
import { readMistakes, removeMistakeEverywhere, type MistakeRecord } from "@/lib/practice/mistakes";
import MixedDrillArticle, { type MixedItem } from "../../practice/mixed/MixedDrillArticle";
import ms from "../mistakes.module.css";

const SUBJECT_LABELS: Record<string, string> = {
  physics: "Physics",
  chemistry: "Chemistry",
  biology: "Biology",
};

export default function MistakesDrillClient({ subject }: { subject: string }) {
  const normalizedSubject = subject.toLowerCase();
  const [records, setRecords] = useState<MistakeRecord[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [subtopicLookup, setSubtopicLookup] = useState<Map<string, SubtopicInfo> | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setRecords(readMistakes(normalizedSubject));
      setHydrated(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, [normalizedSubject]);

  useEffect(() => {
    if (!hydrated) return;
    if (records.length === 0) {
      const timer = window.setTimeout(() => setSubtopicLookup(new Map()), 0);
      return () => window.clearTimeout(timer);
    }
    let cancelled = false;
    const timer = window.setTimeout(() => setSubtopicLookup(null), 0);
    (async () => {
      const map = await buildSubtopicLookup([normalizedSubject]);
      if (!cancelled) setSubtopicLookup(map);
    })();
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [hydrated, normalizedSubject, records]);

  const items = useMemo<MixedItem[]>(
    () =>
      records.map((record) => {
        const fields = subtopicDisplayFields(record, subtopicLookup, subjectLabel(record.subject));
        return {
          noteId: record.noteId,
          topicTitle: fields.topicTitle,
          subtopicTitle: fields.subtopicTitle,
          subtopicCode: fields.subtopicCode,
          question: record.question,
          mistakeId: record.id,
        };
      }),
    [records, subtopicLookup],
  );

  const sessionSignature = useMemo(
    () => records.map((record) => `${record.id}:${record.lastArchivedAt}`).sort().join("|"),
    [records],
  );

  const recordIds = useMemo(() => records.map((record) => record.id), [records]);

  if (!hydrated) {
    return (
      <div className={ms.emptyState} aria-busy="true">
        <p className={ms.emptyTitle}>Loading mistakes drill</p>
        <p className={ms.emptyText}>Checking your local {subjectLabel(normalizedSubject)} archive.</p>
      </div>
    );
  }

  if (records.length > 0 && subtopicLookup === null) {
    return (
      <div className={ms.emptyState} aria-busy="true">
        <p className={ms.emptyTitle}>Loading mistakes drill</p>
        <p className={ms.emptyText}>Resolving subtopic names…</p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className={ms.emptyState}>
        <p className={ms.emptyTitle}>No {subjectLabel(normalizedSubject)} mistakes yet</p>
        <p className={ms.emptyText}>Once you archive mistakes for this subject, you can drill them here.</p>
        <Link href={`/${normalizedSubject}/mistakes`} className={ms.retryLink}>
          Back to mistakes
        </Link>
      </div>
    );
  }

  return (
    <MixedDrillArticle
      items={items}
      subject={normalizedSubject}
      selectedNoteIds={recordIds}
      sessionLabel={`${subjectLabel(normalizedSubject)} mistakes drill`}
      sessionHint="Only archived mistakes from this subject are included. Complete current item to unlock the next."
      completeTitle="Mistakes drill complete"
      completeText={`You finished all ${items.length} archived ${subjectLabel(normalizedSubject)} mistakes.`}
      storagePrefix="practice-mistakes-session"
      sessionSignature={sessionSignature}
      canArchiveMistakes={true}
      onItemCorrect={(item) => {
        if (item.mistakeId) removeMistakeEverywhere(item.mistakeId);
      }}
    />
  );
}

function subjectLabel(subject: string): string {
  return SUBJECT_LABELS[subject] ?? subject;
}
