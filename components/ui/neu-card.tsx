import * as React from "react";
import { cn } from "@/lib/utils";

interface NeuCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  inset?: boolean;
  hover?: boolean;
}

const NeuCard = React.forwardRef<HTMLDivElement, NeuCardProps>(
  ({ children, className = "", inset = false, hover = true, ...props }, ref) => {
    const shadowClass = inset ? "shadow-neu-pressed" : "shadow-neu-flat";
    const hoverClass = hover ? "hover:translate-y-[-4px] transition-transform duration-300" : "";
    
    return (
      <div
        ref={ref}
        className={cn(
          "bg-[#E0E5EC] rounded-3xl",
          shadowClass,
          hoverClass,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

NeuCard.displayName = "NeuCard";

export { NeuCard };
export type { NeuCardProps };
