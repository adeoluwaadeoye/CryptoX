"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignInPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError("");

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (res?.error) {
      setError("Invalid credentials. Try again.");
      return;
    }

    router.push("/dashboard");
  };

  return (
    <div className="flex items-center py-24 justify-center bg-muted/40 px-4">
      <div className="w-full max-w-md space-y-6">
        {/* BRAND HEADER */}
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold tracking-tight">CryptoX</h1>
          <p className="text-sm text-muted-foreground">
            Secure access to your trading dashboard
          </p>
        </div>

        {/* CARD */}
        <Card className="border-border shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl text-center">
              Sign in
            </CardTitle>
            <CardDescription className="text-center">
              Welcome back. Let’s get you moving.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">

            {error && (
              <p className="text-sm text-red-500 text-center">
                {error}
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <Button
                className="w-full bg-muted text-muted-foreground cursor-pointer"
                type="submit"
                disabled={loading}
              >
                {loading ? "Signing In..." : "Sign in"}
              </Button>
            </form>

            <Separator />

            {/* SOCIAL LOGIN */}
            <div className="grid grid-cols-2 gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() =>
                  signIn("google", { callbackUrl: "/dashboard" })
                }
                className="flex items-center gap-2 cursor-pointer"
              >
                <FcGoogle className="size-5" />
                Google
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={() =>
                  signIn("github", { callbackUrl: "/dashboard" })
                }
                className="flex items-center gap-2 cursor-pointer"
              >
                <FaGithub className="size-5" />
                GitHub
              </Button>
            </div>

            {/* SIGNUP LINK */}
            <p className="text-center text-sm text-muted-foreground">
              Don’t have an account?{" "}
              <Link
                className="text-emerald-500 hover:underline font-medium"
                href="/sign-up"
              >
                Create one
              </Link>
            </p>

          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignInPage;