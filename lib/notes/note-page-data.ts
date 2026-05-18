import { cache } from "react";
import { getCourseOutline } from "@/lib/course/get-outline";
import type { NoteMeta } from "./types";

function normalizeNoteId(id: string): string {
  return id.trim().replace(/\u2011/g, "-");
}

function resolveMetaFromOutline(
  outline: NonNullable<Awaited<ReturnType<typeof getCourseOutline>>>,
  noteId: string,
): NoteMeta | null {
  const nid = normalizeNoteId(noteId);
  for (const topic of outline.topics) {
    for (const st of topic.subtopics) {
      if (st.id === nid) {
        return {
          syllabusCode: outline.syllabusCode,
          topicNumber: topic.number,
          topicTitle: topic.title,
          subtopicCode: st.code,
          subtopicTitle: st.title,
        };
      }
    }
  }
  return null;
}

/** Single outline load for meta + prev/next navigation on note pages. */
export const getNotePageContext = cache(
  async (
    subject: string,
    noteId: string,
  ): Promise<{
    meta: NoteMeta | null;
    prev: string | null;
    next: string | null;
  }> => {
    const outline = await getCourseOutline(subject);
    if (!outline) return { meta: null, prev: null, next: null };

    const nid = normalizeNoteId(noteId);
    const flat = outline.topics.flatMap((topic) => topic.subtopics.map((st) => st.id));
    const i = flat.indexOf(nid);

    return {
      meta: resolveMetaFromOutline(outline, noteId),
      prev: i > 0 ? flat[i - 1]! : null,
      next: i < flat.length - 1 ? flat[i + 1]! : null,
    };
  },
);
