import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl space-y-4",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <div className="space-y-3">
        <h2 className="font-heading text-3xl font-medium tracking-[-0.05em] text-foreground sm:text-[2.2rem]">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-[0.98rem] leading-8 text-muted-foreground sm:text-[1.02rem]">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
