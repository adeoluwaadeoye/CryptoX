"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, BarChart3 } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">

      {/* HERO */}
      <section className="relative px-6 py-14 max-w-7xl mx-auto text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-125 bg-emerald-500/20 blur-[120px] rounded-full" />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
        >
          Trade Crypto
          <span className="block text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-cyan-400 to-blue-500">
            Smarter, Faster, Better
          </span>
        </motion.h1>

        <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
          Professional-grade trading tools, lightning-fast execution, and a seamless experience built for serious traders.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center cursor-pointer">
          <Link href="/dashboard">
            <Button className="px-8 py-6 text-base rounded-xl bg-linear-to-r from-emerald-500 to-cyan-500">
              Start Trading <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="px-6 pb-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 text-center">

          {[{
            icon: ShieldCheck,
            title: "Bank-Level Security",
            desc: "Your assets are fully protected"
          }, {
            icon: Zap,
            title: "Fast Execution",
            desc: "No delays, no slippage"
          }, {
            icon: BarChart3,
            title: "Advanced Analytics",
            desc: "Real-time market insights"
          }].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-xl"
            >
              <item.icon className="mx-auto mb-4 text-emerald-400" size={28} />
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* APP SECTION */}
      <section className="px-2 py-4 border-y aligncenter justify-center border-border bg-mute">
        <div className="grid lg:grid-cols-2 gap-2 items-center max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Trade Anywhere, Anytime
            </h2>

            <p className="text-muted-foreground max-w-md mx-auto lg:mx-0">
              Stay ahead of the market with our powerful mobile trading app. Execute trades, monitor charts, and manage your portfolio on the go.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="outline" className="px-6 py-5 rounded-xl">
                Download iOS
              </Button>

              <Button variant="outline" className="px-6 py-5 rounded-xl">
                Download Android
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-100 sm:h-125"
          >
            <Image
              src="/assets/mobile-app.png"
              alt="mobile app"
              fill
              className="object-contain"
            />
          </motion.div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-8 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Start Trading?
          </h2>

          <p className="text-muted-foreground">
            Join thousands of traders already using our platform.
          </p>

          <Link href="/dashboard">
            <Button className="px-10 py-6 text-lg rounded-xl bg-linear-to-r from-emerald-500 to-cyan-500 cursor-pointer">
              Get Started
            </Button>
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
