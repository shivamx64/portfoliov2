import { cn } from "@/lib/utils";

type CompanyNameProps = {
  children: React.ReactNode;
  confidential?: boolean;
  className?: string;
};

export function CompanyName({
  children,
  confidential = false,
  className,
}: CompanyNameProps) {
  return (
    <span
      className={cn(
        confidential &&
          "inline-block select-none blur-[3px]",
        className,
      )}
    >
      {children}
    </span>
  );
}
