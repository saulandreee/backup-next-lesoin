import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex font-karla text-xs font-semibold tracking-[2px] uppercase items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-base-dark text-stone-50 border border-base-dark hover:bg-base-dark/10 hover:border-base-cream hover:text-base-dark-brown",
        secondary: "bg-base-cream text-stone-800 hover:bg-base-dark hover:text-stone-50",
        outline: "border border-stone-200 bg-white hover:bg-stone-700/90 hover:text-base-light-cream hover:border-stone-700/90",
        destructive: "bg-red-600 text-stone-50 hover:bg-red-600/90",
        ghost: "hover:text-base-cream",
        // link: "text-stone-700 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-10 px-4 py-2",
        lg: "h-12 px-10",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };
