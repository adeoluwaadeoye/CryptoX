"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// shadcn UI
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

// icons
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignInPage = () => {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (loading) return;

        setLoading(true);
        setError("");
        setSuccess("");

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data?.message || "Invalid credentials");
                return;
            }

            setSuccess("Login successful. Redirecting...");

            setTimeout(() => {
                router.push("/dashboard");
            }, 1000);

        } catch (_error) {
            console.error("Login error:", _error);
            setError("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-full flex items-center justify-center bg-[#1b0918]">
            <Card className="w-[90%] sm:w-105 p-4 sm:p-6">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-center text-xl">
                        Sign in
                    </CardTitle>

                    <CardDescription className="text-sm text-center text-accent-foreground">
                        Welcome back — sign in to continue
                    </CardDescription>
                </CardHeader>

                <CardContent className="px-2 sm:px-4">

                    {error && (
                        <p className="text-red-500 text-sm mb-2 text-center">
                            {error}
                        </p>
                    )}

                    {success && (
                        <p className="text-green-500 text-sm mb-2 text-center">
                            {success}
                        </p>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-3">
                        <Input
                            type="email"
                            placeholder="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            disabled={loading}
                        />

                        <Input
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            disabled={loading}
                        />

                        <Button
                            className="w-full"
                            size="lg"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? "loading..." : "continue"}
                        </Button>
                    </form>

                    <Separator className="my-3" />

                    <div className="flex justify-evenly items-center">
                        <Button
                            type="button"
                            disabled={loading}
                            variant="outline"
                            size="lg"
                            className="bg-slate-300 hover:bg-slate-400 hover:scale-105 transition"
                        >
                            <FcGoogle className="size-6" />
                        </Button>

                        <Button
                            type="button"
                            disabled={loading}
                            variant="outline"
                            size="lg"
                            className="bg-slate-300 hover:bg-slate-400 hover:scale-105 transition"
                        >
                            <FaGithub className="size-6" />
                        </Button>
                    </div>


                    <div>
                        <div>
                            <p className="text-center text-sm mt-3 text-muted-foreground">
                                Don’t have an account?
                                <Link
                                    className="text-sky-700  hover:underline"
                                    href="/sign-up"
                                >
                                    Sign up
                                </Link>
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default SignInPage;