import { getCourseOutline } from "@/lib/course/get-outline";
import type { NoteMeta } from "./types";

function normalizeNoteId(id: string): string {
  return id.trim().replace(/\u2011/g, "-");
}

export async function resolveNoteMeta(
  subject: string,
  noteId: string,
): Promise<NoteMeta | null> {
  const nid = normalizeNoteId(noteId);
  const outline = await getCourseOutline(subject);
  if (!outline) return null;

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

export async function getAdjacentNoteIds(
  subject: string,
  noteId: string,
): Promise<{ prev: string | null; next: string | null }> {
  const nid = normalizeNoteId(noteId);
  const outline = await getCourseOutline(subject);
  if (!outline) return { prev: null, next: null };

  const flat = outline.topics.flatMap((topic) => topic.subtopics.map((st) => st.id));
  const i = flat.indexOf(nid);
  if (i === -1) return { prev: null, next: null };
  return {
    prev: i > 0 ? flat[i - 1]! : null,
    next: i < flat.length - 1 ? flat[i + 1]! : null,
  };
}
