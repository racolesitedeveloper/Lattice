"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import HeroPreviewStack from "@/components/landing/HeroPreviewStack";
import s from "./Hero.module.css";
import Logo from "@/components/ui/Logo";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Hero({
  isSignedIn = false,
  onRevealPricing,
  onScrollToRevisionPath,
}: {
  isSignedIn?: boolean;
  onRevealPricing: () => void;
  onScrollToRevisionPath: () => void;
}) {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const reset = () => {
      stage.style.setProperty("--ry", "-10deg");
      stage.style.setProperty("--rx", "5deg");
    };
    reset();

    const onMove = (e: PointerEvent) => {
      const rect = stage.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      stage.style.setProperty("--ry", `${-10 + x * 8}deg`);
      stage.style.setProperty("--rx", `${5 - y * 6}deg`);
    };

    stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerleave", reset);
    return () => {
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerleave", reset);
    };
  }, []);

  return (
    <div className={s.page}>
      <header className={s.topbar}>
        <div className={s.topbarInner}>
          <Link href="/" className={s.brand} aria-label="Lattice home">
            <Logo size={24} />
          </Link>
          <nav className={s.nav} aria-label="Marketing navigation">
            <a
              href="#revision-path"
              className={s.navLink}
              onClick={(e) => {
                e.preventDefault();
                onScrollToRevisionPath();
              }}
            >
              Your path
            </a>
            <a
              href="#pricing"
              className={s.navLink}
              onClick={(e) => {
                e.preventDefault();
                onRevealPricing();
              }}
            >
              Pricing
            </a>
            {isSignedIn ? (
              <Link href="/dashboard" className={s.navCta}>
                Open app
              </Link>
            ) : (
              <>
                <Link href="/login" className={s.navLink}>
                  Sign in
                </Link>
                <button
                  type="button"
                  className={s.navCtaOutline}
                  onClick={onRevealPricing}
                >
                  Start free
                </button>
              </>
            )}
            <ThemeToggle variant="icon" className={s.themeToggle} />
          </nav>
        </div>
      </header>

      <section className={s.hero} aria-label="Hero">
        <div className={s.copyCol}>
          <p className={s.eyebrow}>
            Cambridge International A Level
            <span className={s.eyebrowSep} aria-hidden="true">
              ·
            </span>
            <span className={s.eyebrowCodes}>9702 · 9701 · 9700</span>
          </p>

          <div className={s.subjectChips} aria-label="Subjects">
            <span className={s.chip}>Physics</span>
            <span className={s.chip}>Chemistry</span>
            <span className={s.chip}>Biology</span>
          </div>

          <h1 className={s.headline}>
            Stop losing the questions
            <br />
            <span className={s.headlineAccent}>that trip you up.</span>
          </h1>

          <p className={s.lede}>
            One syllabus map for notes, drills, and every mistake you make — across Physics,
            Chemistry, and Biology.
          </p>

          <div className={s.actions}>
            {isSignedIn ? (
              <Link href="/dashboard" className={s.btnPrimary}>
                Open your workspace
              </Link>
            ) : (
              <>
                <button type="button" className={s.btnPrimary} onClick={onRevealPricing}>
                  Start studying free
                </button>
                <p className={s.ctaMicro}>
                  No card required · first 3 topics free per subject · full access{" "}
                  <strong className={s.ctaMicroStrong}>$2.99</strong>/mo
                </p>
              </>
            )}
            <a
              href="#revision-path"
              className={s.btnTextLink}
              onClick={(e) => {
                e.preventDefault();
                onScrollToRevisionPath();
              }}
            >
              See the revision loop
            </a>
          </div>

        </div>

        <div className={s.visualCol}>
          <figure className={s.previewFigure} aria-label="Lattice app preview">
            <div ref={stageRef} className={s.previewStage}>
              <div className={s.previewStack}>
                <HeroPreviewStack />
              </div>
            </div>
          </figure>
        </div>
      </section>
    </div>
  );
}
