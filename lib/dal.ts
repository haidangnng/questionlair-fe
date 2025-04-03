import "server-only";
import { cookies } from "next/headers";
import { decrypt } from "@/lib/session";
import { redirect } from "next/navigation";

const baseUrl = process.env.API_BASE_URL ?? "http://localhost:5085";

export async function verifySession() {
  const session = (await cookies()).get("session")?.value;
  const payload = await decrypt(session);
  console.log("payload", payload);

  if (!payload?.sub) {
    redirect("/auth");
  }

  return {
    isAuth: true,
    userId: payload.sub,
    role: payload.role,
  };
}

export const getUser = async () => {
  const session = await verifySession();

  const res = await fetch(`${baseUrl}/users/${session.userId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session.userId}`,
    },
  });

  if (!res.ok) return null;
  return await res.json();
};
