import Hero from "@/components/landing/Hero";
import SocialProof from "@/components/landing/SocialProof";
import Features from "@/components/landing/Features";
import Pricing from "@/components/landing/Pricing";
import FinalCta from "@/components/landing/FinalCta";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Features />
        <SocialProof />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
