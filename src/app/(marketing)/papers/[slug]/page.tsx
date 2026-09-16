import { redirect } from "next/navigation";

import { getPaperNotes } from "@/lib/content";

export const dynamicParams = false;

export async function generateStaticParams() {
  const papers = await getPaperNotes();

  return papers.map((paper) => ({
    slug: paper.slug,
  }));
}

export default async function PaperRedirectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  redirect(`/papershelf/${slug}`);
}
