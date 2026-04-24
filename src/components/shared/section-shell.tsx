import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";

type SectionShellProps = React.ComponentProps<"section"> & {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  className,
  children,
  ...props
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn("section-anchor border-t border-border/60 py-12 sm:py-14", className)}
      {...props}
    >
      <div className="content-width">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          align={align}
        />
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
