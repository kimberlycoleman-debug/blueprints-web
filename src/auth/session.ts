"use server";

import { cookies } from "next/headers";

const SESSION_COOKIE = "bp_session";

export function setSession(token: string) {
  cookies().set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  });
}

export function clearSession() {
  cookies().delete(SESSION_COOKIE);
}

export function getSession() {
  return cookies().get(SESSION_COOKIE)?.value ?? null;
}
