import Link from "next/link";
import {
  ArrowClockwise,
  BookOpen,
  CalendarCheck,
  ChartLine,
  Cloud,
  GridFour,
  ListChecks,
} from "@phosphor-icons/react/ssr";
import s from "./Hero.module.css";
import Logo from "@/components/ui/Logo";
import ThemeToggle from "@/components/ui/ThemeToggle";

function DashboardPreview() {
  return (
    <article className={s.previewWindow}>
      <aside className={s.previewSidebar}>
        <div className={s.previewBrand}>
          <Logo size={16} />
          <span>Lattice</span>
        </div>
        <nav className={s.previewNav} aria-label="Preview navigation">
          <span className={s.previewNavItem} aria-current="page">
            <GridFour size={10} weight="bold" aria-hidden />
            Overview
          </span>
          <span className={s.previewNavGroup}>General</span>
          <span className={s.previewNavItem}>
            <BookOpen size={10} aria-hidden />
            Notes
          </span>
          <span className={s.previewNavItem}>
            <ListChecks size={10} aria-hidden />
            Drills
          </span>
          <span className={s.previewNavItem}>
            <ArrowClockwise size={10} aria-hidden />
            Archive
          </span>
        </nav>
        <div className={s.previewSidebarFoot}>
          <span>Upgrade to Full</span>
        </div>
      </aside>

      <div className={s.previewMain}>
        <header className={s.previewToolbar}>
          <div>
            <p>Overview</p>
            <h3>Study operations</h3>
          </div>
          <div className={s.previewFilters}>
            <span>This week</span>
            <span>All subjects</span>
          </div>
        </header>

        <section className={s.previewKpis}>
          <article className={`${s.previewCard} ${s.previewRunway}`}>
            <p>Session runway</p>
            <span>Oct/Nov 2026</span>
            <strong>159</strong>
            <span>days until window opens</span>
          </article>

          <article className={`${s.previewCard} ${s.previewWeak}`}>
            <div className={s.previewCardHead}>
              <p>Weakest areas</p>
              <span>Drill now</span>
            </div>
            {[
              ["Turning effects of forces", "PHYS · forces, density and pressure", "0%"],
              ["Formulas", "CHEM · Atoms, molecules and stoichiometry", "11%"],
              ["Fluid mosaic membranes", "BIOL · Cell membranes and transport", "0%"],
            ].map(([title, meta, score]) => (
              <div className={s.previewWeakRow} key={title}>
                <span className={s.previewRail} />
                <span>
                  <strong>{title}</strong>
                  <small>{meta}</small>
                </span>
                <b>{score}</b>
              </div>
            ))}
          </article>

          <article className={`${s.previewCard} ${s.previewSignal}`}>
            <p>
              <Cloud size={10} weight="bold" aria-hidden />
              Study signal
            </p>
            <span>Needs targeted repair</span>
            <div>
              <small>Drill accuracy</small>
              <strong>42%</strong>
            </div>
            <div>
              <small>Streak</small>
              <strong>1d</strong>
            </div>
          </article>
        </section>

        <section className={s.previewGrid}>
          <article className={`${s.previewCard} ${s.previewGraph}`}>
            <div className={s.previewCardHead}>
              <p>
                <ChartLine size={10} weight="bold" aria-hidden />
                Performance trend
              </p>
              <strong>43 min total</strong>
            </div>
            <h4>Weekly activity</h4>
            <div className={s.previewChart}>
              <svg viewBox="0 0 408 84" role="img" aria-label="Weekly activity line chart">
                <path d="M10 58H275L340 16L398 58" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <line x1="10" y1="58" x2="398" y2="58" />
                <line x1="10" y1="18" x2="398" y2="18" />
              </svg>
              <div className={s.previewDays}>
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
          </article>

          <article className={`${s.previewCard} ${s.previewExam}`}>
            <p>
              <CalendarCheck size={10} weight="bold" aria-hidden />
              Exam setup
            </p>
            <h4>Oct/Nov 2026</h4>
            <span>159 days until the session opens</span>
            <div className={s.previewToggle}>
              <small>Exam period</small>
              <span>May/June</span>
              <b>Oct/Nov</b>
              <strong>Update</strong>
            </div>
          </article>

          <article className={`${s.previewCard} ${s.previewAccuracy}`}>
            <div className={s.previewCardHead}>
              <p>Breakdown</p>
              <span>Based on completed drill answers, not topic completion</span>
            </div>
            <h4>Accuracy by subject</h4>
            {[
              ["Physics", "38%", "38"],
              ["Chemistry", "33%", "33"],
              ["Biology", "67%", "67"],
            ].map(([subject, score, width]) => (
              <div className={s.previewSubject} key={subject}>
                <span>{subject}</span>
                <div>
                  <i style={{ width: `${width}%` }} />
                </div>
                <b>{score}</b>
              </div>
            ))}
          </article>

          <article className={`${s.previewCard} ${s.previewQueue}`}>
            <p>
              <ArrowClockwise size={10} weight="bold" aria-hidden />
              Next best action
            </p>
            <h4>Resume queue</h4>
            <div className={s.previewQueueHead}>
              <span>Recent</span>
              <span>Continue</span>
            </div>
            {["Drill", "Note"].map((kind) => (
              <div className={s.previewQueueRow} key={kind}>
                <b>{kind}</b>
                <span>
                  <strong>The mole and the Av...</strong>
                  <small>{kind === "Drill" ? "Drill set · Atoms, molec..." : "Atoms, molecules and s..."}</small>
                </span>
                <small>4h ago</small>
                <em>Continue</em>
              </div>
            ))}
          </article>
        </section>
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────────
   Hero — full hero section for the landing page.
   ───────────────────────────────────────────────── */
export default function Hero() {
  return (
    <div className={s.page}>
      {/* ── Topbar ── */}
      <header className={s.topbar}>
        <div className={s.topbarInner}>
          <Link href="/" className={s.brand} aria-label="Lattice home">
            <Logo size={24} />
          </Link>
          <nav className={s.nav} aria-label="Marketing navigation">
            <a href="#features" className={s.navLink}>Features</a>
            <a href="#pricing" className={s.navLink}>Pricing</a>
            <Link href="/login" className={s.navLink}>Sign in</Link>
            <Link href="/signup" className={s.navCta}>
              Start free
            </Link>
            <ThemeToggle className={s.themeToggle} />
          </nav>
        </div>
      </header>

      {/* ── Hero grid ── */}
      <section className={s.hero} aria-label="Hero">
        {/* Left: copy */}
        <div className={s.copy}>
          <div className={s.kicker}>
            <span className={s.kickerDot} aria-hidden="true" />
            Cambridge A Level &middot; Physics, Chemistry, Biology
          </div>

          <h1 className={s.headline}>
            Study smarter.<br />
            Score higher in&nbsp;A&nbsp;Levels.
          </h1>

          <p className={s.lede}>
            Topic-organised notes, focused drills, and flashcards —
            everything you need for Physics, Chemistry, and Biology in
            one calm workspace.
          </p>

          <div className={s.actions}>
            <Link href="/signup" className={s.btnPrimary}>
              Start free
            </Link>
            <a href="#features" className={s.btnGhost}>
              See how it works
            </a>
          </div>

          <p className={s.fineprint}>
            <strong>$0 limited</strong> for the first 3 topics &middot;{" "}
            <strong>$2.99 full</strong> for complete access
          </p>
        </div>

        {/* Right: product preview */}
        <div className={s.stage} aria-hidden="true">
          <div className={s.watermark}>Lattice</div>

          <div className={s.stack}>
            <div className={`${s.previewLayer} ${s.previewLayerBack}`} />
            <div className={`${s.previewLayer} ${s.previewLayerMid}`} />
            <DashboardPreview />
          </div>
        </div>
      </section>
    </div>
  );
}
