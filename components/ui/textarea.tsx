import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-28 w-full rounded-2xl border border-white/10 bg-ink/40 px-4 py-3 text-sm text-paper placeholder:text-paper/35 outline-none transition focus-visible:ring-2 focus-visible:ring-teal/60",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Textarea.displayName = "Textarea";

export { Textarea };
