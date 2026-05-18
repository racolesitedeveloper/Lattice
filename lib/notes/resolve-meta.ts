import { cache } from "react";
import { getNotePageContext } from "./note-page-data";
import type { NoteMeta } from "./types";

export const resolveNoteMeta = cache(
  async (subject: string, noteId: string): Promise<NoteMeta | null> => {
    const { meta } = await getNotePageContext(subject, noteId);
    return meta;
  },
);

export const getAdjacentNoteIds = cache(
  async (
    subject: string,
    noteId: string,
  ): Promise<{ prev: string | null; next: string | null }> => {
    const { prev, next } = await getNotePageContext(subject, noteId);
    return { prev, next };
  },
);
