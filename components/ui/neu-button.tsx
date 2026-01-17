import * as React from "react";
import { cn } from "@/lib/utils";

interface NeuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const NeuButton = React.forwardRef<HTMLButtonElement, NeuButtonProps>(
  ({ children, className = "", variant = "secondary", size = "md", ...props }, ref) => {
    const baseStyle = "rounded-full font-medium transition-all active:scale-95 duration-200";
    
    const sizeStyles = {
      sm: "px-4 py-2 text-xs",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
    };

    const variantStyles = {
      primary: cn(
        "bg-primary text-white",
        "shadow-[6px_6px_12px_rgba(39,33,247,0.3),-6px_-6px_12px_rgba(255,255,255,0.8)]",
        "hover:bg-primary-dark"
      ),
      secondary: cn(
        "bg-[#E0E5EC] text-gray-700",
        "shadow-neu-button",
        "hover:text-primary"
      ),
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyle, sizeStyles[size], variantStyles[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

NeuButton.displayName = "NeuButton";

export { NeuButton };
export type { NeuButtonProps };
