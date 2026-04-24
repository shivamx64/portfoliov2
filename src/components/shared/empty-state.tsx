import type { PropsWithChildren } from "react";

type EmptyStateProps = PropsWithChildren<{
  title: string;
  description: string;
}>;

export function EmptyState({ title, description, children }: EmptyStateProps) {
  return (
    <div className="border-t border-border/60 py-6">
      <div className="space-y-2">
        <h2 className="font-heading text-xl font-medium tracking-[-0.04em] text-foreground">
          {title}
        </h2>
        <p className="max-w-xl text-sm leading-7 text-muted-foreground">
          {description}
        </p>
      </div>
      {children ? <div className="flex flex-wrap items-center gap-3">{children}</div> : null}
    </div>
  );
}
