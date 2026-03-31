"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full font-body bg-secondary border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3">

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} CryptoX. All rights reserved.
        </p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="/privacy" className="hover:text-foreground">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-foreground">
            Terms
          </Link>
          <Link href="/contact" className="hover:text-foreground">
            Contact
          </Link>
        </div>

      </div>
    </footer>
  );
}