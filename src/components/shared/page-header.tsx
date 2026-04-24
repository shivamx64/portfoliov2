import { cn } from "@/lib/utils";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
  className?: string;
  actions?: React.ReactNode;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
  actions,
}: PageHeaderProps) {
  return (
    <header className={cn("content-width border-t border-border/60 py-8 sm:py-10", className)}>
      <div className="max-w-3xl space-y-5">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <div className="space-y-4">
          <h1 className="font-heading text-4xl font-medium tracking-[-0.05em] text-foreground sm:text-5xl">
            {title}
          </h1>
          <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            {description}
          </p>
        </div>
        {actions ? <div className="flex flex-wrap items-center gap-3">{actions}</div> : null}
      </div>
    </header>
  );
}
