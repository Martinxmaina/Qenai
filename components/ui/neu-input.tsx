import * as React from "react";
import { cn } from "@/lib/utils";

interface NeuInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const NeuInput = React.forwardRef<HTMLInputElement, NeuInputProps>(
  ({ label, className = "", ...props }, ref) => {
    return (
      <div className="mb-6 w-full">
        {label && (
          <label className="block text-gray-700 font-bold mb-2 ml-1 text-sm">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            "w-full bg-[#E0E5EC] rounded-xl px-4 py-3",
            "shadow-neu-pressed",
            "focus:outline-none focus:ring-2 focus:ring-primary/50",
            "transition-shadow placeholder:text-gray-400",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

NeuInput.displayName = "NeuInput";

export { NeuInput };
export type { NeuInputProps };
