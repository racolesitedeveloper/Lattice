import LandingAuthGate from "@/components/landing/LandingAuthGate";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <main>
        <LandingAuthGate />
      </main>
      <Footer />
    </>
  );
}
