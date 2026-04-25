/** Sections that require choosing a subject before opening. */
export const APP_SECTIONS = ["notes", "practice", "mistakes"] as const;

export type AppSection = (typeof APP_SECTIONS)[number];

export function isAppSection(s: string): s is AppSection {
  return (APP_SECTIONS as readonly string[]).includes(s);
}
