"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Wallet,
  LineChart,
  Settings,
  LogOut,
  Bell,
  BarChart3,
  FileText,
  Activity,
} from "lucide-react";

type User = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
};

export default function DashboardShell({
  children,
  user,
}: {
  children: React.ReactNode;
  user: User;
}) {
  const pathname = usePathname();

  const navItems = [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "Wallet", href: "/dashboard/wallet", icon: Wallet },
    { label: "Markets", href: "/dashboard/markets", icon: LineChart },
    { label: "Settings", href: "/dashboard/settings", icon: Settings },

    // NEW MODULES
    { label: "Transactions", href: "/dashboard/transactions", icon: Activity },
    { label: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
    { label: "Alerts", href: "/dashboard/alerts", icon: Bell },
    { label: "Reports", href: "/dashboard/reports", icon: FileText },
  ];

  return (
    <div className="flex min-h-screen bg-background text-foreground">

      {/* SIDEBAR */}
      <aside className="w-72 bg-card border-r border-border p-6 flex flex-col justify-between">

        <div>
          {/* BRAND */}
          <div className="mb-8">
            <h1 className="text-xl font-bold tracking-tight">CryptoX</h1>
            <p className="text-xs text-muted-foreground">
              Next-gen trading OS
            </p>
          </div>

          {/* NAV */}
          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition
                    ${
                      active
                        ? "bg-emerald-500/10 text-emerald-500"
                        : "text-muted-foreground hover:bg-muted"
                    }`}
                >
                  <Icon size={18} />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* USER SECTION */}
        <div className="border-t border-border pt-4 space-y-3">
          <div>
            <p className="text-sm font-semibold">
              {user?.name ?? "Trader"}
            </p>
            <p className="text-xs text-muted-foreground">
              Premium Account
            </p>
          </div>

          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-red-500 hover:opacity-80"
          >
            <LogOut size={16} />
            Logout
          </Link>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 md:p-10 space-y-8">
        {children}
      </main>
    </div>
  );
}