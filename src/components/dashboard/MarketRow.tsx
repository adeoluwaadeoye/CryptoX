"use client";

import { LucideIcon } from "lucide-react";

export default function MarketRow({
  name,
  price,
  change,
  icon: Icon,
}: {
  name: string;
  price: string;
  change: string;
  icon?: LucideIcon;
}) {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl hover:bg-muted/40 transition">
      <div className="flex items-center gap-3">
        {Icon && <Icon size={18} />}
        <span className="font-medium text-sm">{name}</span>
      </div>

      <div className="text-right">
        <p className="text-sm font-semibold">{price}</p>
        <p className="text-xs text-muted-foreground">{change}</p>
      </div>
    </div>
  );
}