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
    setLocalError(""); // clear stale errors instantly

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

    // 🔥 client-side validation (fast fail UX)
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
      setSuccess("Account created successfully. Redirecting...");

      setTimeout(() => {
        router.push("/sign-in");
      }, 1200);
    }
  };

  return (

<div className="h-full flex items-center justify-center bg-[#1b0918]">
      <Card className="w-[80%] sm:w-105 p-4 sm:p-6">

        <CardHeader>
          <CardTitle className="text-center text-2xl font-semibold">
            Create Account
          </CardTitle>
          <CardDescription className="text-center text-sm text-muted-foreground">
            Sign up using email or social accounts
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">

          <form onSubmit={handleSubmit} className="space-y-3">

            <Input
              name="name"
              type="text"
              disabled={loading}
              placeholder="Full name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <Input
              name="email"
              type="email"
              disabled={loading}
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <Input
              name="password"
              type="password"
              disabled={loading}
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <Input
              name="confirmPassword"
              type="password"
              disabled={loading}
              placeholder="Confirm password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />

            {/* 🔥 LOCAL VALIDATION ERROR */}
            {localError && (
              <p className="text-sm text-red-500 text-center">
                {localError}
              </p>
            )}

            {/* 🔥 SERVER ERROR */}
            {error && (
              <p className="text-sm text-red-500 text-center">
                {error}
              </p>
            )}

            {/* 🔥 SUCCESS STATE */}
            {success && (
              <p className="text-sm text-green-500 text-center">
                {success}
              </p>
            )}

            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={loading}
            >
              {loading ? "Creating account..." : "Sign up"}
            </Button>

          </form>

          <Separator />

          {/* SOCIAL BUTTONS (disabled for now) */}
          <div className="flex justify-between gap-4">

            <Button
              disabled
              variant="outline"
              className="w-full flex gap-2"
            >
              <FcGoogle className="text-xl" />
              Google
            </Button>

            <Button
              variant="outline"
              className="w-full flex gap-2"
            >
              <FaGithub className="text-xl" />
              GitHub
            </Button>

          </div>

          <p className="text-center text-sm text-muted-foreground pt-2">
            Already have an account?{" "}
            <Link
              className="text-sky-600 hover:underline"
              href="/sign-in"
            >
              Sign in
            </Link>
          </p>

        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;