import Link from "next/link";

import { cn, isExternalHref } from "@/lib/utils";

export const mdxComponents = {
  a: ({
    className,
    href = "",
    ...props
  }: React.ComponentPropsWithoutRef<"a">) => {
    if (isExternalHref(href)) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className={cn(
            "text-foreground underline decoration-border underline-offset-4 transition hover:decoration-foreground/60",
            className,
          )}
          {...props}
        />
      );
    }

    return (
      <Link
        href={href}
        className={cn(
          "text-foreground underline decoration-border underline-offset-4 transition hover:decoration-foreground/60",
          className,
        )}
        {...props}
      />
    );
  },
};
