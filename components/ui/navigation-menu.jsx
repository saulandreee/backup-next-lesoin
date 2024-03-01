import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const NavigationMenu = React.forwardRef(({ className, children, viewPortClass, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn("relative z-10 flex flex-1 items-center justify-center", className)}
    {...props}
  >
    {children}
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn("group flex flex-1 list-none items-center justify-center space-x-1", className)}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = React.forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Item
    ref={ref}
    className={cn("relative", className)}
    {...props}
  />
));
NavigationMenuItem.displayName = "NavigationMenuItem";

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 items-center justify-center rounded-md px-2 py-2 text-sm font-medium transition-colors bg-base-darker text-stone-50 uppercase text-xs tracking-[2px] rounded hover:bg-base-dark-brown/50 data-[state=open]:bg-base-dark-brown/50"
);

const NavigationMenuTrigger = React.forwardRef(({ className, withChild, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {withChild ? (
      <>
        {children}
        {""}
        <ChevronDown
          className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
          aria-hidden="true"
        />
      </>
    ) : (
      <>{children}</>
    )}
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-full mt-1 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",
      className
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-fit rounded-md border border-base-brown text-slate-50 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)] ",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-slate-200 shadow-md" />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

const NavigationSubMenu = React.forwardRef(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn("relative z-20 w-full", className)}
    {...props}
  >
    {children}
  </NavigationMenuPrimitive.Root>
));
NavigationSubMenu.displayName = "NavigationSubMenu";

const NavigationSubMenuContent = React.forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-full top-0 relative bg-blue-500 ml-1 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-bottom-52 data-[motion=from-start]:slide-in-from-top-52 data-[motion=to-end]:slide-out-to-bottom-52 data-[motion=to-start]:slide-out-to-top-52 md:absolute md:w-auto",
      className
    )}
    {...props}
  />
));
NavigationSubMenuContent.displayName = "NavigationSubMenuContent";

const NavigationSubMenuLink = NavigationMenuPrimitive.Link;

const NavigationSubMenuItem = React.forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Item
    ref={ref}
    className={cn("relative z-20", className)}
    {...props}
  />
));
NavigationSubMenuItem.displayName = "NavigationSubMenuItem";

const navigationSubMenuTriggerStyle = cva(
  "group inline-flex w-full items-center text-left rounded-md px-2 py-2 text-sm font-medium transition-colors bg-base-brown hover:bg-base-cream/50 rounded data-[state=open]:bg-base-cream/50"
);

const NavigationSubMenuTrigger = React.forwardRef(({ className, withChild, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationSubMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {withChild ? (
      <>
        {children}
        {""}
        <ChevronDown
          className="relative top-[1px]  ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
          aria-hidden="true"
        />
      </>
    ) : (
      <>{children}</>
    )}
  </NavigationMenuPrimitive.Trigger>
));
NavigationSubMenuTrigger.displayName = "NavigationSubMenuTrigger";

export {
  navigationMenuTriggerStyle,
  navigationSubMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  NavigationSubMenu,
  NavigationSubMenuLink,
  NavigationSubMenuTrigger,
  NavigationSubMenuContent,
  NavigationSubMenuItem,
};
