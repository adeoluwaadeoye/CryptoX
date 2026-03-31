"use client";

import { LucideIcon } from "lucide-react";

export default function StatCard({
  label,
  value,
  change,
  icon: Icon,
}: {
  label: string;
  value: string;
  change: string;
  icon?: LucideIcon;
}) {
  return (
    <div className="p-5 rounded-2xl border border-border bg-background/60 hover:shadow-lg transition">
      <div className="flex items-center justify-between">
        <p className="text-xs text-muted-foreground">{label}</p>
        {Icon && <Icon size={16} className="text-muted-foreground" />}
      </div>

      <h3 className="text-xl font-semibold mt-2">{value}</h3>
      <p className="text-xs mt-1 text-emerald-500">{change}</p>
    </div>
  );
}