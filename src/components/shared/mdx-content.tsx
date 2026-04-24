import { MDXRemote } from "next-mdx-remote/rsc";

import { mdxComponents } from "@/components/blog/mdx-components";
import { mdxOptions } from "@/lib/mdx";
import { cn } from "@/lib/utils";

type MdxContentProps = {
  source: string;
};

export async function MdxContent({ source }: MdxContentProps) {
  return (
    <div className={cn("content-prose")}>
      <MDXRemote source={source} options={mdxOptions} components={mdxComponents} />
    </div>
  );
}
