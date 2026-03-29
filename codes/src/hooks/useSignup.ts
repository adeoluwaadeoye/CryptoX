"use client";

import { useState } from "react";
import { signupUser } from "@/lib/services/auth.service";

export const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const signup = async (form: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    setLoading(true);
    setError("");

    try {
      const res = await signupUser(form);
      return res;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Signup failed");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading, error };
};