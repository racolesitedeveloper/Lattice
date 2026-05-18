"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import SectionLoading from "@/components/app/SectionLoading";
import s from "./navigation-loading-gate.module.css";

/** Only show overlay if navigation still hasn’t finished after this long (ms). */
const SHOW_DELAY_MS = 600;

function routeKey(pathname: string, search: string): string {
  return `${pathname}?${search}`;
}

function isInternalNavigation(href: string, origin: string): string | null {
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return null;
  }
  if (href.startsWith("http://") || href.startsWith("https://")) {
    try {
      const url = new URL(href);
      if (url.origin !== origin) return null;
      return routeKey(url.pathname, url.searchParams.toString());
    } catch {
      return null;
    }
  }
  const path = href.split("#")[0] ?? href;
  const [pathname, query = ""] = path.split("?");
  return routeKey(pathname || "/", query.replace(/^\?/, ""));
}

export default function NavigationLoadingGate({ children }: { children: ReactNode }) {
  const pathname = usePathname() ?? "/";
  const searchParams = useSearchParams();
  const search = searchParams.toString();
  const currentRoute = routeKey(pathname, search);

  const [showOverlay, setShowOverlay] = useState(false);
  const pendingRef = useRef(false);
  const delayRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    pendingRef.current = false;
    if (delayRef.current) {
      clearTimeout(delayRef.current);
      delayRef.current = null;
    }
    setShowOverlay(false);
  }, [currentRoute]);

  useEffect(() => {
    function onPageShow() {
      pendingRef.current = false;
      if (delayRef.current) {
        clearTimeout(delayRef.current);
        delayRef.current = null;
      }
      setShowOverlay(false);
    }

    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, []);

  useEffect(() => {
    if (!showOverlay) return;
    const t = window.setTimeout(() => setShowOverlay(false), 12_000);
    return () => window.clearTimeout(t);
  }, [showOverlay]);

  useEffect(() => {
    function clearDelay() {
      if (delayRef.current) {
        clearTimeout(delayRef.current);
        delayRef.current = null;
      }
    }

    function onClick(event: MouseEvent) {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      if (anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const nextRoute = isInternalNavigation(anchor.getAttribute("href") ?? "", window.location.origin);
      if (!nextRoute || nextRoute === currentRoute) return;

      pendingRef.current = true;
      clearDelay();
      delayRef.current = setTimeout(() => {
        if (pendingRef.current) setShowOverlay(true);
      }, SHOW_DELAY_MS);
    }

    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      clearDelay();
    };
  }, [currentRoute]);

  return (
    <div className={s.host}>
      {children}
      {showOverlay ? (
        <div className={s.overlay} role="status" aria-live="polite" aria-busy="true">
          <SectionLoading overlay />
        </div>
      ) : null}
    </div>
  );
}
