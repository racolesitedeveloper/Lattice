import { Suspense } from "react";
import { getAuthUser } from "@/lib/auth/session";
import LandingExperience from "./LandingExperience";

async function LandingWithAuth() {
  const user = await getAuthUser();
  return <LandingExperience isSignedIn={Boolean(user)} />;
}

/** Streams the landing shell immediately; auth only gates CTA copy. */
export default function LandingAuthGate() {
  return (
    <Suspense fallback={<LandingExperience isSignedIn={false} />}>
      <LandingWithAuth />
    </Suspense>
  );
}
