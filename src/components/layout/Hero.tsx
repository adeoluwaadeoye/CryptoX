"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

/* ---------------- TYPES ---------------- */
type Trade = {
  coin: string;
  price: string;
  type: "BUY" | "SELL";
  time: string;
};

/* ---------------- MOCK DATA ---------------- */
const coins = ["BTC", "ETH", "SOL", "BNB", "XRP", "DOGE"];

const ticker = [
  { name: "BTC", price: 64231, change: 1.4 },
  { name: "ETH", price: 3521, change: -0.8 },
  { name: "SOL", price: 142, change: 2.1 },
  { name: "BNB", price: 589, change: 0.6 },
  { name: "XRP", price: 0.62, change: -1.2 },
];

/* ---------------- UTIL ---------------- */
function randomTrade(): Trade {
  const coin = coins[Math.floor(Math.random() * coins.length)];
  const price = (Math.random() * 50000 + 100).toFixed(2);
  const isBuy = Math.random() > 0.5;

  return {
    coin,
    price,
    type: isBuy ? "BUY" : "SELL",
    time: new Date().toLocaleTimeString(),
  };
}

/* ---------------- COMPONENT ---------------- */
export default function Hero() {
  const [trades, setTrades] = useState<Trade[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrades((prev) => [randomTrade(), ...prev.slice(0, 6)]);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">

      {/* ================= MARKET TICKER ================= */}
      <div className="w-full overflow-hidden border-b border-border bg-black/40 backdrop-blur">
        <div className="flex animate-[scroll_18s_linear_infinite] whitespace-nowrap gap-6 sm:gap-10 py-2 sm:py-3 px-4 text-xs sm:text-sm">
          {[...ticker, ...ticker].map((c, i) => (
            <div key={i} className="flex items-center gap-2 shrink-0">
              <span className="font-semibold">{c.name}</span>
              <span>${c.price}</span>
              <span className={c.change >= 0 ? "text-emerald-400" : "text-red-400"}>
                {c.change >= 0 ? "+" : ""}
                {c.change}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ================= HERO ================= */}
      <section className="relative px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mx-auto text-center">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-55 sm:w-125 h-55 sm:h-125 bg-emerald-500/20 blur-[120px] sm:blur-[140px] rounded-full pointer-events-none" />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight"
        >
          Trade Crypto
          <span className="block text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-cyan-400 to-blue-500">
            In Real-Time Flow
          </span>
        </motion.h1>

        <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl sm:max-w-2xl mx-auto">
          Execution meets intelligence. Monitor markets, react instantly, and trade with institutional-grade speed.
        </p>

        <div className="mt-6 sm:mt-8">
          <Link href="/dashboard">
            <Button className="px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base rounded-xl bg-linear-to-r from-emerald-500 to-cyan-500">
              Start Trading <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
        </div>
      </section>

      {/* ================= GRID ================= */}
      <section className="px-4 sm:px-6 pb-14 sm:pb-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">

        {/* LIVE FEED */}
        <div className="rounded-2xl border border-border bg-card/40 backdrop-blur p-4 sm:p-6">
          <h2 className="text-base sm:text-lg font-semibold mb-4 flex items-center gap-2">
            <TrendingUp size={18} className="text-emerald-400" />
            Live Market Activity
          </h2>

          <div className="space-y-3 max-h-65 sm:max-h-80 overflow-hidden">
            {trades.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex justify-between items-center text-xs sm:text-sm p-3 rounded-xl bg-background/40 border border-border"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="font-semibold">{t.coin}</span>
                  <span className={t.type === "BUY" ? "text-emerald-400" : "text-red-400"}>
                    {t.type}
                  </span>
                </div>

                <div className="text-right">
                  <div>${t.price}</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground">
                    {t.time}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* APP PANEL */}
        <div className="rounded-2xl border border-border bg-card/40 backdrop-blur p-4 sm:p-6 flex flex-col justify-center items-center">
          <h2 className="text-2xl md:text-3xl  font-semibold mb-4 sm:mb-6">
            Get the App
          </h2>

          <Image
            src="/assets/mobile-app.png"
            alt="mobile app"
            width={320}
            height={600}
            className="w-50 sm:w-65 md:w-[320px] h-auto drop-shadow-2xl"
          />

          <p className="text-xs sm:text-sm text-muted-foreground mt-5 sm:mt-6 text-center max-w-xs sm:max-w-sm">
            Live trading interface optimized for speed, clarity, and decision velocity.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-4 sm:px-6 py-12 sm:py-14 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
          The Market Doesn’t Wait. Neither Should You.
        </h2>

        <p className="text-sm sm:text-base text-muted-foreground mt-4">
          Join a trading environment built for execution speed and real-time awareness.
        </p>

        <div className="mt-6 sm:mt-8">
          <Link href="/dashboard">
            <Button className="px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg rounded-xl bg-linear-to-r from-emerald-500 to-cyan-500">
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      {/* ANIMATION */}
      <style jsx>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

    </div>
  );
}