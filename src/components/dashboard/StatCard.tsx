"use client";

import { LucideIcon } from "lucide-react";

type Props = {
  label: string;
  value: string;
  change: string;
  icon: LucideIcon;
  iconClass?: string;
};

export default function StatCard({
  label,
  value,
  change,
  icon: Icon,
  iconClass = "text-muted-foreground",
}: Props) {
  const isNegative = change.startsWith("-");

  return (
    <div className="p-4 rounded-2xl border bg-background/60 space-y-2">
      
      <div className="flex items-center justify-between">
        <Icon className={`w-5 h-5 ${iconClass}`} />

        <span
          className={`text-xs ${
            isNegative ? "text-red-500" : "text-emerald-500"
          }`}
        >
          {change}
        </span>
      </div>

      <p className="text-sm text-muted-foreground">{label}</p>

      <h3 className="text-xl font-semibold">{value}</h3>
    </div>
  );
}