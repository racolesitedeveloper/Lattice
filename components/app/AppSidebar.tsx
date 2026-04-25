"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import type { Icon } from "@phosphor-icons/react/lib";
import { BookOpen, ClockCounterClockwise, DotsThree, ListChecks, SquaresFour } from "@phosphor-icons/react";
import { logout } from "@/app/actions/auth";
import { APP_SECTIONS, type AppSection } from "@/lib/app-sections";
import BillingActionButton from "@/components/app/BillingActionButton";
import Logo from "@/components/ui/Logo";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { useBillingPlan } from "@/components/app/ProfileProvider";
import IntentPrefetchLink from "@/components/app/IntentPrefetchLink";
import s from "@/app/(app)/app.module.css";

const SECTION_LABELS: Record<AppSection, string> = {
  notes: "Notes",
  practice: "Drills",
  mistakes: "Archive",
};

const SECTION_ICONS: Record<AppSection, Icon> = {
  notes: BookOpen,
  practice: ListChecks,
  mistakes: ClockCounterClockwise,
};

const LAST_SECTION_ROUTES_KEY = "lattice:last-section-routes:v1";
type LastSectionRoutes = Partial<Record<AppSection, string>>;

function sectionActive(pathname: string, section: AppSection): boolean {
  if (pathname.startsWith(`/pick/${section}`)) return true;
  const re = new RegExp(`^/(physics|chemistry|biology)/${section}(/|$)`);
  return re.test(pathname);
}

function sectionFromPathname(pathname: string): AppSection | null {
  const path = pathname.split(/[?#]/)[0] ?? "";
  const pickMatch = /^\/pick\/([^/]+)(?:\/|$)/.exec(path);
  const pickSection = pickMatch?.[1];
  if (pickSection && (APP_SECTIONS as readonly string[]).includes(pickSection)) {
    return pickSection as AppSection;
  }

  const match = /^\/(?:physics|chemistry|biology)\/([^/]+)(?:\/|$)/.exec(path);
  const section = match?.[1];
  if (!section || !(APP_SECTIONS as readonly string[]).includes(section)) return null;
  return section as AppSection;
}

function readLastSectionRoutes(): LastSectionRoutes {
  if (typeof window === "undefined") return {};
  try {
    const parsed = JSON.parse(
      window.localStorage.getItem(LAST_SECTION_ROUTES_KEY) ?? "{}",
    ) as Record<string, unknown>;
    const routes: LastSectionRoutes = {};
    for (const section of APP_SECTIONS) {
      const href = parsed[section];
      if (
        typeof href === "string" &&
        sectionFromPathname(href) === section
      ) {
        routes[section] = href;
      }
    }
    return routes;
  } catch {
    return {};
  }
}

export default function AppSidebar() {
  const plan = useBillingPlan();
  const pathname = usePathname() ?? "";
  const searchParams = useSearchParams();
  const [lastSectionRoutes, setLastSectionRoutes] = useState<LastSectionRoutes>({});
  const dashboardOn =
    pathname === "/dashboard" || pathname.startsWith("/dashboard/");

  useEffect(() => {
    const stored = readLastSectionRoutes();
    const section = sectionFromPathname(pathname);
    const query = searchParams.toString();
    const href = query ? `${pathname}?${query}` : pathname;
    const next = section ? { ...stored, [section]: href } : stored;
    const timer = window.setTimeout(() => setLastSectionRoutes(next), 0);
    if (section) {
      window.localStorage.setItem(LAST_SECTION_ROUTES_KEY, JSON.stringify(next));
    }
    return () => window.clearTimeout(timer);
  }, [pathname, searchParams]);

  return (
    <aside className={s.sidebar}>
      <IntentPrefetchLink href="/dashboard" className={s.brand} aria-label="Lattice home">
        <Logo size={22} />
      </IntentPrefetchLink>

      <nav className={s.navBlock} aria-label="Main">
        <IntentPrefetchLink
          href="/dashboard"
          className={`${s.navItem} ${dashboardOn ? s.navItemOn : ""}`}
        >
          <SquaresFour className={s.navIcon} size={18} weight="regular" aria-hidden />
          <span>Overview</span>
        </IntentPrefetchLink>

        <span className={s.sectionLabel}>General</span>
        {APP_SECTIONS.map((section) => {
          const Icon = SECTION_ICONS[section];
          const href = lastSectionRoutes[section] ?? `/pick/${section}`;
          return (
            <IntentPrefetchLink
              key={section}
              href={href}
              className={`${s.navItem} ${sectionActive(pathname, section) ? s.navItemOn : ""}`}
            >
              <Icon className={s.navIcon} size={18} weight="regular" aria-hidden />
              <span>{SECTION_LABELS[section]}</span>
            </IntentPrefetchLink>
          );
        })}
      </nav>

      <div className={s.bottom}>
        <ThemeToggle />
        {plan === "free" ? (
          <BillingActionButton
            action="checkout"
            interval="monthly"
            className={s.upgradeBtn}
            pendingLabel="Opening..."
          >
            Upgrade to Full
          </BillingActionButton>
        ) : (
          <BillingActionButton
            action="portal"
            className={s.manageBillingBtn}
            pendingLabel="Opening..."
          >
            Manage billing
          </BillingActionButton>
        )}
        <form action={logout}>
          <button type="submit" className={s.signOutBtn}>
            Sign out
          </button>
        </form>
      </div>

      <details className={s.mobileMore}>
        <summary className={s.mobileMoreSummary}>
          <DotsThree className={s.navIcon} size={20} weight="bold" aria-hidden />
          <span>More</span>
        </summary>
        <div className={s.mobileMorePanel}>
          <ThemeToggle />
          {plan === "free" ? (
            <BillingActionButton
              action="checkout"
              interval="monthly"
              className={s.upgradeBtn}
              pendingLabel="Opening..."
            >
              Upgrade to Full
            </BillingActionButton>
          ) : (
            <BillingActionButton
              action="portal"
              className={s.manageBillingBtn}
              pendingLabel="Opening..."
            >
              Manage billing
            </BillingActionButton>
          )}
          <form action={logout}>
            <button type="submit" className={s.signOutBtn}>
              Sign out
            </button>
          </form>
        </div>
      </details>
    </aside>
  );
}
