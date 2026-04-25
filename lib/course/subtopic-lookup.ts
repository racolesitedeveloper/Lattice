import type { MistakeRecord } from "@/lib/practice/mistakes";
import { getCourseOutline } from "./get-outline";

export type SubtopicInfo = {
  subtopicCode: string;
  subtopicTitle: string;
  topicTitle: string;
};

function normalizeNoteId(id: string): string {
  return id.trim().replace(/\u2011/g, "-");
}

/** UI placeholder from older mistakes drill rows — must not win over real syllabus data. */
export function isPlaceholderSubtopicCode(code: string | undefined | null): boolean {
  if (code == null) return true;
  const t = code.trim();
  if (t === "" || t === "—" || t === "–") return true;
  return t.toLowerCase() === "mistake";
}

/**
 * For client-side display: map `${subject}:${noteId}` → syllabus labels from course JSON.
 */
export async function buildSubtopicLookup(subjects: readonly string[]): Promise<Map<string, SubtopicInfo>> {
  const out = new Map<string, SubtopicInfo>();
  const unique = Array.from(new Set(subjects.map((s) => s.toLowerCase())));

  for (const subj of unique) {
    const outline = await getCourseOutline(subj);
    if (!outline) continue;
    for (const topic of outline.topics) {
      for (const st of topic.subtopics) {
        const id = normalizeNoteId(st.id);
        out.set(`${subj}:${id}`, {
          subtopicCode: st.code,
          subtopicTitle: st.title,
          topicTitle: topic.title,
        });
      }
    }
  }
  return out;
}

/** One line for tables: `code · title` when both exist. */
export function subtopicLineFromRecord(
  record: MistakeRecord,
  lookup: Map<string, SubtopicInfo> | null,
): string {
  const subj = record.subject.toLowerCase();
  const key = `${subj}:${normalizeNoteId(record.noteId)}`;
  const resolved = lookup?.get(key) ?? null;

  const titleIsInternalId =
    !record.subtopicTitle ||
    record.subtopicTitle === record.noteId ||
    /^t\d+-\d+$/i.test(record.subtopicTitle.trim());
  const shouldPreferResolved = Boolean(
    resolved &&
      (isPlaceholderSubtopicCode(record.subtopicCode) || titleIsInternalId),
  );

  const code = shouldPreferResolved
    ? resolved!.subtopicCode
    : (record.subtopicCode && !isPlaceholderSubtopicCode(record.subtopicCode)
        ? record.subtopicCode
        : resolved?.subtopicCode);
  const title = shouldPreferResolved
    ? resolved!.subtopicTitle
    : (record.subtopicTitle && !titleIsInternalId
        ? record.subtopicTitle
        : resolved?.subtopicTitle);

  if (title) {
    return code ? `${code} · ${title}` : title;
  }
  if (resolved) {
    return resolved.subtopicCode
      ? `${resolved.subtopicCode} · ${resolved.subtopicTitle}`
      : resolved.subtopicTitle;
  }
  return record.noteId;
}

/** For drill session rows: `code · subtopicTitle · topicTitle` in MixedDrillArticle. */
export function subtopicDisplayFields(
  record: MistakeRecord,
  lookup: Map<string, SubtopicInfo> | null | undefined,
  fallbackTopicTitle: string,
): { subtopicCode: string; subtopicTitle: string; topicTitle: string } {
  const subj = record.subject.toLowerCase();
  const key = `${subj}:${normalizeNoteId(record.noteId)}`;
  const r = lookup?.get(key) ?? null;

  const titleIsInternalId =
    !record.subtopicTitle ||
    record.subtopicTitle === record.noteId ||
    /^t\d+-\d+$/i.test((record.subtopicTitle || "").trim());
  const shouldPreferResolved = Boolean(
    r && (isPlaceholderSubtopicCode(record.subtopicCode) || titleIsInternalId),
  );

  const subtopicCode = (
    shouldPreferResolved
      ? r!.subtopicCode
      : (record.subtopicCode && !isPlaceholderSubtopicCode(record.subtopicCode)
          ? record.subtopicCode
          : r?.subtopicCode) || ""
  ).trim() || "—";
  const subtopicTitle = (
    shouldPreferResolved
      ? r!.subtopicTitle
      : (record.subtopicTitle && !titleIsInternalId ? record.subtopicTitle : r?.subtopicTitle) || ""
  ).trim() || record.noteId;
  const topicTitle = (record.topicTitle || r?.topicTitle || "").trim() || fallbackTopicTitle;

  return { subtopicCode, subtopicTitle, topicTitle };
}
