"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import ThemeToggle from "../theme/ThemeToggle";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export default function Header() {
  const { data: session, status } = useSession();

  const name = session?.user?.name;

  const initials =
    name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase() || "";

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background backdrop-blur">
      <div className="flex items-center justify-between px-6 py-4">

        {/* BRAND */}
        <Link href="/" className="text-lg font-semibold">
          CryptoX
        </Link>

        {/* CENTER ACTIONS */}
        <ThemeToggle />

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4">

          {status === "loading" && (
            <div className="h-8 w-20 animate-pulse rounded bg-muted" />
          )}

          {status === "unauthenticated" && (
            <Link href="/sign-in">
              <Button>Login</Button>
            </Link>
          )}

          {status === "authenticated" && session?.user && (
            <>
              <div className="flex items-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full mr-2 text-xs font-bold bg-emerald-500">
                  {initials}
                </div>

                <span className="hidden md:block font-medium">
                  {name}
                </span>
              </div>

              <Button
                variant="destructive"
                onClick={() => signOut({ callbackUrl: "/" })}
                className="cursor-pointer"
              >
                <LogOut size={16} />
                Logout
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}