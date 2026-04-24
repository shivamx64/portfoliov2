import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-sm border px-2 py-1 font-mono text-[0.68rem] uppercase tracking-[0.16em]",
  {
    variants: {
      variant: {
        default: "border-border/60 bg-muted/50 text-muted-foreground",
        outline: "border-border/60 text-muted-foreground",
        accent: "border-emerald-500/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type BadgeProps = React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
