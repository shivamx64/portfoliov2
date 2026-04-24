import { notFound } from "next/navigation";

import { PaperDetail } from "@/components/papers/paper-detail";
import { getPaperNoteBySlug, getPaperNotes } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export async function generateStaticParams() {
  const papers = await getPaperNotes();

  return papers.map((paper) => ({
    slug: paper.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const paper = await getPaperNoteBySlug(slug);

  if (!paper) {
    return buildPageMetadata({
      title: "Papers",
      pathname: "/papers",
    });
  }

  return buildPageMetadata({
    title: paper.title,
    description: paper.excerpt,
    pathname: paper.url,
  });
}

export default async function PaperDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const paper = await getPaperNoteBySlug(slug);

  if (!paper) {
    notFound();
  }

  return <PaperDetail paper={paper} />;
}
