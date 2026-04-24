import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import GithubSlugger from "github-slugger";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import type { ContentHeading } from "@/types/content";

export const mdxOptions: MDXRemoteProps["options"] = {
  parseFrontmatter: false,
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
        },
      ],
    ],
  },
};

export function extractHeadings(source: string): ContentHeading[] {
  const slugger = new GithubSlugger();
  const headings: ContentHeading[] = [];
  const headingPattern = /^(##|###)\s+(.+)$/gm;

  for (const match of source.matchAll(headingPattern)) {
    const level = match[1] === "##" ? 2 : 3;
    const rawTitle = match[2]
      .replace(/\[(.*?)\]\(.*?\)/g, "$1")
      .replace(/[`*_~]/g, "")
      .trim();

    headings.push({
      id: slugger.slug(rawTitle),
      level,
      title: rawTitle,
    });
  }

  return headings;
}
