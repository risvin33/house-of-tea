import React, { useState } from "react";
import { cn } from "../../lib/utils";

export function TooltipProvider({ children }) {
  return <>{children}</>;
}

export function Tooltip({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child, { isOpen: open });
      })}
    </div>
  );
}

export function TooltipTrigger({ children, className, asChild, ...props }) {
  return (
    <span className={cn("inline-flex cursor-pointer", className)} {...props}>
      {children}
    </span>
  );
}

export function TooltipContent({ children, className, isOpen, ...props }) {
  if (!isOpen) return null;

  return (
    <div
      role="tooltip"
      className={cn(
        "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 overflow-hidden rounded-lg bg-slate-900 border border-slate-700 px-3 py-1.5 text-xs text-slate-100 shadow-xl animate-in fade-in zoom-in-95 pointer-events-none whitespace-nowrap",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
