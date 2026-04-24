import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border text-[0.76rem] font-medium uppercase tracking-[0.16em] transition-colors outline-none focus-visible:ring-4 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 font-heading",
  {
    variants: {
      variant: {
        default:
          "border-foreground/10 bg-foreground text-background hover:bg-foreground/90",
        secondary:
          "border-border/70 bg-secondary/60 text-secondary-foreground hover:bg-secondary/90",
        outline:
          "border-border/75 bg-background/30 text-foreground hover:bg-muted/35",
        ghost:
          "border-transparent bg-transparent text-muted-foreground hover:text-foreground",
        link: "rounded-none border-transparent px-0 text-foreground underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-3.5",
        sm: "h-8 px-3 text-[0.72rem]",
        lg: "h-10 px-4",
        icon: "size-8 rounded-md px-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

type ButtonLinkProps = React.ComponentProps<typeof Link> &
  VariantProps<typeof buttonVariants> & {
    className?: string;
  };

function ButtonLink({
  className,
  variant,
  size,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, ButtonLink, buttonVariants };
