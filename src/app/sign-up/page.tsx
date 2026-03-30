"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

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

import { useSignup } from "@/hooks/useSignup";

const SignUp = () => {
  const router = useRouter();
  const { signup, loading, error } = useSignup();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [localError, setLocalError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalError("");

    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLocalError("");
    setSuccess("");

    if (loading) return;

    if (form.password !== form.confirmPassword) {
      setLocalError("Passwords do not match");
      return;
    }

    if (form.password.length < 6) {
      setLocalError("Password must be at least 6 characters");
      return;
    }

    const res = await signup(form);

    if (res) {
      setSuccess("Account created. Redirecting...");

      setTimeout(() => {
        router.push("/sign-in");
      }, 1200);
    }
  };

  return (
    <div className="flex items-center justify-center font-body py-24 bg-muted/40 px-4">

      <div className="w-full max-w-md space-y-6">

        {/* BRAND */}
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold tracking-tight">CryptoX</h1>
          <p className="text-sm text-muted-foreground">
            Create your trading account
          </p>
        </div>

        {/* CARD */}
        <Card className="border-border shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl text-center">
              Sign up
            </CardTitle>
            <CardDescription className="text-center">
              Start your trading journey in seconds
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">

            {/* ERRORS / SUCCESS */}
            {localError && (
              <p className="text-sm text-red-500 text-center">
                {localError}
              </p>
            )}

            {error && (
              <p className="text-sm text-red-500 text-center">
                {error}
              </p>
            )}

            {success && (
              <p className="text-sm text-green-500 text-center">
                {success}
              </p>
            )}

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-3">

              <Input
                name="name"
                type="text"
                placeholder="Full name"
                value={form.name}
                onChange={handleChange}
                disabled={loading}
                required
              />

              <Input
                name="email"
                type="email"
                placeholder="Email address"
                value={form.email}
                onChange={handleChange}
                disabled={loading}
                required
              />

              <Input
                name="password"
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                disabled={loading}
                required
              />

              <Input
                name="confirmPassword"
                type="password"
                placeholder="Confirm password"
                value={form.confirmPassword}
                onChange={handleChange}
                disabled={loading}
                required
              />

              <Button
                type="submit"
                className="w-full bg-muted text-muted-foreground cursor-pointer"
                disabled={loading}

              >
                {loading ? "Creating account..." : "Create account"}
              </Button>
            </form>

            <Separator />

            {/* SOCIAL LOGIN */}
            <div className="grid grid-cols-2 gap-3">

              <Button
                type="button"
                variant="outline"
                disabled={loading}
                onClick={() => { }}
                className="flex items-center gap-2 cursor-pointer"
              >
                <FcGoogle className="size-5" />
                Google
              </Button>

              <Button
                type="button"
                variant="outline"
                disabled={loading}
                onClick={() => { }}
                className="flex items-center gap-2 cursor-pointer"
              >
                <FaGithub className="size-5" />
                GitHub
              </Button>

            </div>

            {/* SWITCH */}
            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                className="text-emerald-500 hover:underline font-medium"
                href="/sign-in"
              >
                Sign in
              </Link>
            </p>

          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;