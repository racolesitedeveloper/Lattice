"use client";

import { useEffect } from "react";
import { markRecentActivity } from "@/lib/recent-activity";

export default function NoteVisitMarker({
  href,
  title,
  subtitle,
}: {
  href: string;
  title: string;
  subtitle: string;
}) {
  useEffect(() => {
    markRecentActivity({ kind: "note", href, title, subtitle });
  }, [href, title, subtitle]);

  return null;
}
