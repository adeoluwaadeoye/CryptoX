"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, BarChart3 } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen  bg-background text-foreground overflow-hidden">

      {/* HERO */}
      <section className="relative font-body px-6 py-14 max-w-7xl mx-auto text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-125 bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none" />

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
        
        <Link href="/dashboard">
          <Button className="px-8 py-6 text-base rounded-xl mt-4 bg-linear-to-r from-emerald-500 to-cyan-500 cursor-pointer">
            Start Trading <ArrowRight className="ml-2" size={18} />
          </Button>
        </Link>
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
      <section className="px-4 py-12 border-y border-border bg-muted overflow-hidden">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center max-w-3xl mx-auto">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 space-x-2"
          >
            <h2 className="text-2xl md:text-3xl font-bold">
              Trade Anywhere, Anytime
            </h2>

            <p className="text-muted-foreground max-w-sm">
              Stay ahead of the market with our powerful mobile trading app.
              Execute trades, monitor charts, and manage your portfolio on the go.
            </p>

            <div className="flex flex-row gap-3 justify-center lg:justify-start">
              <Button variant="outline" className="px-5 py-4 rounded-xl">
                Download iOS
              </Button>

              <Button variant="outline" className="px-5 py-4 rounded-xl">
                Download Android
              </Button>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <Image
              src="/assets/mobile-app.png"
              alt="mobile app"
              width={360}
              height={700}
              priority
              className="w-55 sm:w-65 md:w-75 lg:w-85 h-auto object-contain drop-shadow-2xl"
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
