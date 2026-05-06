import { redirect } from "next/navigation";

export default async function PaperRedirectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  redirect(`/papershelf/${slug}`);
}
