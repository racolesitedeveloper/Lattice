"use client";

import { useCallback, useEffect } from "react";
import FinalCta from "@/components/landing/FinalCta";
import Hero from "@/components/landing/Hero";
import LandingStory from "@/components/landing/LandingStory";
import Pricing from "@/components/landing/Pricing";
import { navigateToSection } from "@/lib/landing/scroll-to-section";

export default function LandingExperience({ isSignedIn = false }: { isSignedIn?: boolean }) {
  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash;
      if (hash === "#pricing") {
        navigateToSection("pricing");
      } else if (hash === "#revision-path") {
        navigateToSection("revision-path");
      }
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const onRevealPricing = useCallback(() => {
    navigateToSection("pricing");
  }, []);

  const onScrollToRevisionPath = useCallback(() => {
    navigateToSection("revision-path");
  }, []);

  return (
    <>
      <Hero
        isSignedIn={isSignedIn}
        onRevealPricing={onRevealPricing}
        onScrollToRevisionPath={onScrollToRevisionPath}
      />
      <LandingStory />
      <Pricing isSignedIn={isSignedIn} />
      <FinalCta isSignedIn={isSignedIn} />
    </>
  );
}
