import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn("section-frame rounded-[var(--radius)] p-6", className)}
      {...props}
    />
  );
}
