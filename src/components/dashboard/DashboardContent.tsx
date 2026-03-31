"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import MarketChart from "@/components/dashboard/MarketChart";

import {
  Wallet,
  TrendingUp,
  Activity,
  BarChart3,
  TrendingDown,
  Coins,
} from "lucide-react";

import StatCard from "./StatCard";
import MarketRow from "./MarketRow";

export default function DashboardContent() {
  return (
    <div className="p-4 md:p-8 space-y-8">

      {/* HERO */}
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="grid lg:grid-cols-[1fr_0.9fr] gap-2 items-center max-w-5xl mx-auto"
      >
        <div className="space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
            Real-time crypto intelligence.
          </h2>

          <p className="text-muted-foreground max-w-md">
            Track markets, manage assets, and execute trades with precision-grade analytics.
          </p>
        </div>

        <div className="relative w-full h-64 md:h-96">
          <Image
            src="/assets/mobile-app.png"
            alt="crypto"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
          />
        </div>
      </motion.div>

      {/* STATS */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <StatCard label="Portfolio" value="$42,310" change="+14.2%" icon={Wallet} iconClass="text-blue-500" />

        <StatCard label="Profit" value="$2,180" change="+5.8%" icon={TrendingUp} iconClass="text-emerald-500" />

        <StatCard label="Trades" value="24" change="+3 new" icon={Activity} iconClass="text-purple-500" />

        <StatCard label="Win Rate" value="81%" change="+6%" icon={BarChart3} iconClass="text-indigo-500" />

        <StatCard label="Loss Today" value="-$1,240" change="-3.8%" icon={TrendingDown} iconClass="text-red-500" />
      </div>

      {/* MARKET */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* CHART SECTION */}
        <div className="lg:col-span-2 p-6 rounded-2xl border border-border bg-background/60">
          <h3 className="font-semibold mb-4">Market Overview</h3>

          <MarketChart />
        </div>

        {/* TOP ASSETS */}
        <div className="p-6 rounded-2xl border border-border bg-background/60 space-y-2">
          <h3 className="font-semibold mb-2">Top Assets</h3>

          <MarketRow
            name="Bitcoin"
            price="$67,240"
            change="+2.4%"
            icon={Coins}
          />

          <MarketRow
            name="Ethereum"
            price="$3,420"
            change="-1.2%"
            icon={Coins}
          />

          <MarketRow
            name="Solana"
            price="$148"
            change="+4.1%"
            icon={Coins}
          />
        </div>

      </div>

      {/* INSIGHTS */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl border border-border bg-background/60">
          <h3 className="font-semibold mb-2">Market Insight</h3>
          <p className="text-sm text-muted-foreground">
            Institutional inflows continue to strengthen bullish momentum across crypto markets.
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-border bg-background/60">
          <h3 className="font-semibold mb-2">Risk Signal</h3>
          <p className="text-sm text-muted-foreground">
            Volatility remains elevated — maintain disciplined position sizing.
          </p>
        </div>
      </div>

    </div>
  );
}