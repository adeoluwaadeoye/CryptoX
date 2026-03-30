"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
        relative flex items-center w-14 h-8 rounded-full
         border-4 border-emerald-600 bg-background
        shadow-sm
        transition-colors duration-300
        px-1
      "
    >
      {/* track highlight */}
      <div
        className={`
          absolute inset-0 rounded-full transition-colors duration-300
          ${isDark ? "bg-slate-900/30" : "bg-yellow-100/40"}
        `}
      />

      {/* sliding knob */}
      <div
        className={`
          relative z-10 h-6 w-6 rounded-full
          bg-background border border-border
          shadow-md flex items-center justify-center
          transition-transform duration-300 ease-in-out
          ${isDark ? "translate-x-0" : "translate-x-6"}
        `}
      >
        {isDark ? (
          <Moon size={14} className="text-blue-400" />
        ) : (
          <Sun size={14} className="text-yellow-500" />
        )}
      </div>
    </button>
  );
}