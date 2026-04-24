import { cn } from "@/lib/utils";

type BlogTagProps = {
  children: React.ReactNode;
  className?: string;
};

export function BlogTag({ children, className }: BlogTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center border border-border/70 px-2 py-0.5 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
