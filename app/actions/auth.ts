import { apiFetch } from "@/lib/api";
import { redirect } from "next/navigation";

export async function logout() {
  try {
    await apiFetch("/auth/logout", {
      method: "POST",
      credentials: "include",
    });
  } catch (e) {
    console.log(e);
  } finally {
    redirect("/auth");
  }
}

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const res = await apiFetch("/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
    credentials: "include",
  });

  if (!res.ok) {
    return { message: "Invalid email or password" };
  }

  redirect("/dashboard");
}
