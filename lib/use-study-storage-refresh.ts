"use client";

import { useEffect } from "react";
import { STUDY_STORAGE_CHANGED_EVENT } from "@/lib/study-kv";

/** Re-run when study_kv-backed analytics change (local writes or cross-tab storage). */
export function useStudyStorageRefresh(onRefresh: () => void, deps: readonly unknown[] = []): void {
  useEffect(() => {
    onRefresh();
    const handle = () => onRefresh();
    window.addEventListener(STUDY_STORAGE_CHANGED_EVENT, handle);
    window.addEventListener("storage", handle);
    const interval = window.setInterval(handle, 30_000);
    return () => {
      window.removeEventListener(STUDY_STORAGE_CHANGED_EVENT, handle);
      window.removeEventListener("storage", handle);
      window.clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- caller supplies refresh deps
  }, deps);
}
