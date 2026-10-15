import React, { createContext, useContext } from "react";
import { cn } from "../../lib/utils";

const ToggleGroupContext = createContext(null);

export function ToggleGroup({ type = "single", value, onValueChange, className, children, ...props }) {
  const isSelected = (itemValue) => {
    if (type === "single") return value === itemValue;
    if (Array.isArray(value)) return value.includes(itemValue);
    return false;
  };

  const handleSelect = (itemValue) => {
    if (type === "single") {
      onValueChange?.(itemValue === value ? null : itemValue);
    } else {
      const arr = Array.isArray(value) ? value : [];
      if (arr.includes(itemValue)) {
        onValueChange?.(arr.filter((v) => v !== itemValue));
      } else {
        onValueChange?.([...arr, itemValue]);
      }
    }
  };

  return (
    <ToggleGroupContext.Provider value={{ isSelected, handleSelect }}>
      <div className={cn("inline-flex items-center gap-1 rounded-xl bg-slate-900 p-1 border border-slate-800", className)} {...props}>
        {children}
      </div>
    </ToggleGroupContext.Provider>
  );
}

export function ToggleGroupItem({ value, className, children, ...props }) {
  const ctx = useContext(ToggleGroupContext);
  const selected = ctx?.isSelected(value);

  return (
    <button
      type="button"
      onClick={() => ctx?.handleSelect(value)}
      className={cn(
        "inline-flex items-center justify-center rounded-lg px-3 py-1.5 text-xs font-medium transition-all focus-visible:outline-none",
        selected
          ? "bg-amber-500 text-slate-950 font-bold shadow-sm"
          : "text-slate-400 hover:text-slate-200 hover:bg-slate-800",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
