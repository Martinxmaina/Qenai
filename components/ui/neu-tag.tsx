import * as React from "react";
import { cn } from "@/lib/utils";

interface NeuTagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "default" | "primary";
}

const NeuTag = React.forwardRef<HTMLSpanElement, NeuTagProps>(
  ({ children, className = "", variant = "default", ...props }, ref) => {
    const variantStyles = {
      default: "bg-[#E0E5EC] text-gray-600 shadow-neu-sm",
      primary: "bg-primary/10 text-primary shadow-none",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest",
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

NeuTag.displayName = "NeuTag";

export { NeuTag };
export type { NeuTagProps };
