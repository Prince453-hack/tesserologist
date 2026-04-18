import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
};

const styles = {
  primary:
    "bg-[linear-gradient(135deg,rgba(214,168,92,1),rgba(255,225,170,1))] text-ink shadow-glow hover:translate-y-[-1px]",
  secondary: "border border-white/12 bg-white/5 text-paper hover:bg-white/10",
  ghost: "text-paper/80 hover:text-paper hover:bg-white/5",
};

export function Button({
  className,
  href,
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold/60 focus:ring-offset-0",
    styles[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
