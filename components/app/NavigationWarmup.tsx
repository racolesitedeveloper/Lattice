"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { APP_SECTIONS, type AppSection } from "@/lib/app-sections";

const LAST_SECTION_ROUTES_KEY = "lattice:last-section-routes:v1";
const SUBJECTS = ["physics", "chemistry", "biology"] as const;

type LastSectionRoutes = Partial<Record<AppSection, string>>;

function currentSubject(pathname: string): (typeof SUBJECTS)[number] | null {
  const subject = pathname.split("/")[1];
  return SUBJECTS.includes(subject as (typeof SUBJECTS)[number])
    ? (subject as (typeof SUBJECTS)[number])
    : null;
}

function readLastSectionRoutes(): string[] {
  try {
    const parsed = JSON.parse(
      window.localStorage.getItem(LAST_SECTION_ROUTES_KEY) ?? "{}",
    ) as LastSectionRoutes;
    return APP_SECTIONS.flatMap((section) => {
      const href = parsed[section];
      return typeof href === "string" && isInternalHref(href) ? [href] : [];
    });
  } catch {
    return [];
  }
}

function isInternalHref(href: string): boolean {
  return href.startsWith("/") && !href.startsWith("//") && !/[\r\n]/.test(href);
}

function requestIdle(cb: () => void): () => void {
  if ("requestIdleCallback" in window) {
    const id = window.requestIdleCallback(cb, { timeout: 2500 });
    return () => window.cancelIdleCallback(id);
  }
  const id = globalThis.setTimeout(cb, 900);
  return () => globalThis.clearTimeout(id);
}

export default function NavigationWarmup() {
  const router = useRouter();
  const pathname = usePathname() ?? "";

  useEffect(() => {
    const cancel = requestIdle(() => {
      const subject = currentSubject(pathname);
      const subjectHubs = subject
        ? APP_SECTIONS.map((section) => `/${subject}/${section}`)
        : APP_SECTIONS.map((section) => `/pick/${section}`);

      const targets = Array.from(
        new Set([...readLastSectionRoutes(), ...subjectHubs, "/dashboard"]),
      )
        .filter((href) => href !== pathname)
        .slice(0, 7);

      targets.forEach((href, index) => {
        window.setTimeout(() => router.prefetch(href), index * 180);
      });
    });

    return cancel;
  }, [pathname, router]);

  return null;
}
