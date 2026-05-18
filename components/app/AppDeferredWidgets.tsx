"use client";

import NavigationWarmup from "./NavigationWarmup";
import StudyTimeTracker from "./StudyTimeTracker";

/** Client-only widgets; imported here so the app layout stays a Server Component. */
export default function AppDeferredWidgets() {
  return (
    <>
      <NavigationWarmup />
      <StudyTimeTracker />
    </>
  );
}
