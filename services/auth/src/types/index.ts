import { User, Role } from "@prisma/client";

export interface TokenPayload {
  userId: string;
  email: string;
  role?: string;
}

export interface RegisterRequest {
  email: string;
  username: string;
  displayName: string;
  password: string;
  timezone?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export type UserResponse = Omit<
  User,
  "passwordHash" | "resetToken" | "resetTokenExpiry" | "providerId"
>;

export interface AuthResponse {
  user: UserResponse;
  token: string;
}

export interface ErrorResponse {
  error: string;
  message: string;
  statusCode: number;
}

export type { User, Role };
