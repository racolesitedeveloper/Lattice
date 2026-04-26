"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { persistStudyStateAction } from "@/app/actions/study-state";
import { initStudyKv, registerStudyKvPersister } from "@/lib/study-kv";

export default function StudyStateBridge({
  initialKv,
  children,
}: {
  initialKv: Record<string, unknown> | null;
  children: ReactNode;
}) {
  const ran = useRef(false);

  useLayoutEffect(() => {
    if (ran.current) return;
    ran.current = true;
    registerStudyKvPersister(persistStudyStateAction);
    initStudyKv(initialKv);
  }, [initialKv]);

  return children;
}
