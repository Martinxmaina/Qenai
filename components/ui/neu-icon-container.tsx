import * as React from "react";
import { cn } from "@/lib/utils";

interface NeuIconContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

const NeuIconContainer = React.forwardRef<HTMLDivElement, NeuIconContainerProps>(
  ({ children, className = "", size = "md", ...props }, ref) => {
    const sizeStyles = {
      sm: "w-12 h-12 rounded-xl",
      md: "w-16 h-16 rounded-2xl",
      lg: "w-24 h-24 rounded-3xl",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "bg-[#E0E5EC] flex items-center justify-center text-primary",
          "shadow-neu-pressed",
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

NeuIconContainer.displayName = "NeuIconContainer";

export { NeuIconContainer };
export type { NeuIconContainerProps };
