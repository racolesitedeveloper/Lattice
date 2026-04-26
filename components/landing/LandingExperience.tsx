"use client";

import { useCallback, useEffect } from "react";
import Features from "@/components/landing/Features";
import FinalCta from "@/components/landing/FinalCta";
import Hero from "@/components/landing/Hero";
import Pricing from "@/components/landing/Pricing";
import SocialProof from "@/components/landing/SocialProof";

function scrollPricingIntoView() {
  requestAnimationFrame(() => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

export default function LandingExperience({ isSignedIn = false }: { isSignedIn?: boolean }) {
  useEffect(() => {
    const applyHash = () => {
      if (window.location.hash === "#pricing") {
        scrollPricingIntoView();
      }
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const onRevealPricing = useCallback(() => {
    if (window.location.hash !== "#pricing") {
      window.history.pushState(null, "", "#pricing");
    }
    scrollPricingIntoView();
  }, []);

  return (
    <>
      <Hero isSignedIn={isSignedIn} onRevealPricing={onRevealPricing} />
      <Features />
      <SocialProof />
      <Pricing isSignedIn={isSignedIn} />
      <FinalCta isSignedIn={isSignedIn} />
    </>
  );
}
