"use client";

import { Bell } from "lucide-react";

export default function Topbar() {
  return (
    <header className="w-full flex items-center justify-between px-4 md:px-8 py-4 border-b border-border bg-background/70 backdrop-blur-xl">
      <h1 className="text-lg md:text-2xl font-semibold tracking-tight">
        Crypto Dashboard
      </h1>

      <div className="flex items-center gap-3">
        <Bell size={18} />
        <div className="w-9 h-9 rounded-full bg-muted" />
      </div>
    </header>
  );
}