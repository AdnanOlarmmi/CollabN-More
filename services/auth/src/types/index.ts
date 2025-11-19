import { User, Role } from "@prisma/client";

// ============================================
// JWT PAYLOAD TYPE
// ============================================

/**
 * JWT token payload structure
 */
export interface TokenPayload {
  userId: string;
  email: string;
  role?: string;
}

// ============================================
// REQUEST TYPES (What clients send)
// ============================================

/**
 * Registration request payload
 */
export interface RegisterRequest {
  email: string;
  username: string;
  displayName: string;
  password: string;
  timezone?: string; // Optional, defaults to UTC
}

/**
 * Login request payload
 */
export interface LoginRequest {
  email: string;
  password: string;
}

// ============================================
// RESPONSE TYPES (What server returns)
// ============================================

/**
 * Safe user data for API responses.
 * Excludes sensitive fields like passwordHash, resetToken, providerId.
 */
export type UserResponse = Omit<
  User,
  "passwordHash" | "resetToken" | "resetTokenExpiry" | "providerId"
>;

/**
 * Authentication response after successful login/register
 */
export interface AuthResponse {
  user: UserResponse;
  token: string;
}

// ============================================
// ERROR TYPES
// ============================================

/**
 * Standardized error response format
 */
export interface ErrorResponse {
  error: string;
  message: string;
  statusCode: number;
}

// ============================================
// RE-EXPORT PRISMA TYPES
// ============================================

export type { User, Role };
