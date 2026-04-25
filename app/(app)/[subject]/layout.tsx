import { notFound } from "next/navigation";

const ALLOWED = new Set(["physics", "chemistry", "biology"]);

export default async function SubjectLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ subject: string }>;
}) {
  const { subject } = await params;
  if (!ALLOWED.has(subject.toLowerCase())) notFound();
  return children;
}
