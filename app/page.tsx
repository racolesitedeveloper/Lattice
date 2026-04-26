import LandingExperience from "@/components/landing/LandingExperience";
import Footer from "@/components/landing/Footer";
import { createClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const isSignedIn = Boolean(user);

  return (
    <>
      <main>
        <LandingExperience isSignedIn={isSignedIn} />
      </main>
      <Footer />
    </>
  );
}
