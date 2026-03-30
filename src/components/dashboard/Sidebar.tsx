"use client";

import {
  Home,
  Wallet,
  BarChart3,
  Activity,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  const links = [
    { icon: Home, label: "Overview" },
    { icon: Wallet, label: "Portfolio" },
    { icon: BarChart3, label: "Markets" },
    { icon: Activity, label: "Trades" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <aside className="hidden md:flex md:w-64 lg:w-72 flex-col border-r border-border bg-background/80 backdrop-blur-xl p-6">
      <h1 className="text-2xl font-bold tracking-tight mb-10">
        CryptoX<span className="text-emerald-500">.</span>
      </h1>

      <nav className="space-y-2">
        {links.map((item) => (
          <button
            key={item.label}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium hover:bg-muted transition cursor-pointer"
          >
            <item.icon size={18} />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="mt-auto p-4 rounded-xl bg-muted/40 text-xs text-muted-foreground">
        Market status:{" "}
        <span className="text-emerald-500 font-medium">Live</span>
      </div>
    </aside>
  );
}