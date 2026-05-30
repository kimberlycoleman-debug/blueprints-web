export type UserRole = "guest" | "member" | "admin";

export interface AuthSession {
  userId: string;
  email: string;
  role: UserRole;
  expiresAt: string;
}

export interface ApiResult<T> {
  ok: boolean;
  data?: T;
  error?: string;
}
