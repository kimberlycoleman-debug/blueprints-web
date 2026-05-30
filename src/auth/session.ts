"use server";

import { cookies } from "next/headers";

const SESSION_COOKIE = "bp_session";

export async function setSession(token: string) {
  cookies().set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  });
}

export async function clearSession() {
  cookies().delete(SESSION_COOKIE);
}

export async function getSession() {
  return cookies().get(SESSION_COOKIE)?.value ?? null;
}
