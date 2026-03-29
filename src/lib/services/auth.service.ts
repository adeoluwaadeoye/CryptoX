export const signupUser = async (payload: {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}) => {
  const res = await fetch("/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data?.message || "Signup failed");
  }

  return data;
};