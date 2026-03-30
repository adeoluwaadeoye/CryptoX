"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Apple, Smartphone, ArrowRight } from "lucide-react";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">

      {/* HERO */}
      <section className="relative px-6 py-20 text-center max-w-5xl mx-auto">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-emerald-500/20 blur-3xl rounded-full" />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          Trade Crypto
          <span className="block text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-cyan-400 to-blue-500">
            Smarter, Faster, Better
          </span>
        </motion.h1>
        <p className="text-muted-foreground mt-5 text-lg max-w-2xl mx-auto">
          Advanced tools, real-time analytics, and a seamless trading experience designed for performance.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <Link href="/dashboard">
            <Button className="bg-linear-to-r from-emerald-500 to-cyan-500 text-white px-6 py-5 rounded-xl shadow-lg hover:opacity-90">
              Start Trading <ArrowRight className="ml-2" size={16} />
            </Button>
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-16 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {["Real-Time Data", "Secure Wallet", "Low Fees"].map((item, i) => (
          <motion.div key={i} whileHover={{ y: -8, scale: 1.02 }}>
            <Card className="bg-card border-border backdrop-blur-xl hover:border-emerald-400/40 transition-all rounded-2xl">
              <CardContent className="p-7">

                <h3 className="text-lg font-semibold text-foreground">
                  {item}
                </h3>

                <p className="text-muted-foreground mt-3 text-sm">
                  Experience top-tier performance, speed, and reliability in every trade.
                </p>

              </CardContent>
            </Card>

          </motion.div>
        ))}
      </section>

      {/* DOWNLOAD */}
      <section className="px-6 py-20 bg-muted border-y border-border">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">

          <div className="text-center lg:text-center space-y-7">
            <h2 className="text-2xl md:text-3xl font-bold">
              Download Our Mobile App
            </h2>

            <p className="text-muted-foreground max-w-md mx-auto lg:mx-0">
              Trade on the go with powerful tools right in your pocket.
            </p>

            <div className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto lg:mx-0 justify-evenly">

              <Button variant="outline" className="flex gap-2">
                <Apple size={18} /> iOS
              </Button>

              <Button variant="outline" className="flex gap-2">
                <Smartphone size={18} /> Android
              </Button>

            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="relative w-full h-145">
              <Image
                src="/assets/mobile-app.png"
                alt="mobile app"
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
                loading="lazy"
                className="object-contain"
              />
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}

export default LandingPage;