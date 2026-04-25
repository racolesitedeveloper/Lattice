import { redirect } from "next/navigation";

/** Legacy route: topics hub removed; send readers to notes. */
export default async function TopicsPageRedirect({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject } = await params;
  redirect(`/${subject}/notes`);
}
