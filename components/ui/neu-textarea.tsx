import * as React from "react";
import { cn } from "@/lib/utils";

interface NeuTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const NeuTextArea = React.forwardRef<HTMLTextAreaElement, NeuTextAreaProps>(
  ({ label, className = "", ...props }, ref) => {
    return (
      <div className="mb-6 w-full">
        {label && (
          <label className="block text-gray-700 font-bold mb-2 ml-1 text-sm">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={cn(
            "w-full bg-[#E0E5EC] rounded-xl px-4 py-3",
            "shadow-neu-pressed",
            "focus:outline-none focus:ring-2 focus:ring-primary/50",
            "transition-shadow placeholder:text-gray-400 resize-none",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

NeuTextArea.displayName = "NeuTextArea";

export { NeuTextArea };
export type { NeuTextAreaProps };
