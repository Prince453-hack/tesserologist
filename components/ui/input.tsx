import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-2xl border border-white/10 bg-ink/40 px-4 py-3 text-sm text-paper placeholder:text-paper/35 outline-none transition focus-visible:ring-2 focus-visible:ring-teal/60",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export { Input };
