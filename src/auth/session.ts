"use server";

import { cookies } from "next/headers";

export async function setSession(token: string) {
  const cookieStore = await cookies();
  cookieStore.set("bp_session", token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  });
}

export async function clearSession() {
  const cookieStore = await cookies();
  cookieStore.delete("bp_session");
}

export async function getSession() {
  const cookieStore = await cookies();
  return cookieStore.get("bp_session")?.value ?? null;
}
