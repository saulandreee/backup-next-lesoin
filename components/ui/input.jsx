import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, icon, iconPlacement, iconClassName, ...props }, ref) => {
  if (icon) {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "flex px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium",
            iconPlacement === "left" ? "pl-6" : "pr-6",
            className
          )}
          ref={ref}
          {...props}
        />
        {icon && (
          <span className={cn("absolute top-1/2 -translate-y-1/2", iconPlacement === "left" ? "left-2" : "right-2", iconClassName)}>{icon}</span>
        )}
      </div>
    );
  }
  return (
    <input
      type={type}
      className={cn("flex px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium", className)}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
