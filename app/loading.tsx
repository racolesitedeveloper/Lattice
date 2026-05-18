/**
 * Intentionally empty: a root `loading.tsx` with visible UI stacked above real
 * page content on Next.js App Router navigations. Segment loaders under
 * `(auth)`, `(app)/[subject]`, etc. still show where we want them.
 */
export default function RootLoading() {
  return null;
}
