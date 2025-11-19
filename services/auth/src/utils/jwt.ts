import jwt, { type SignOptions } from "jsonwebtoken";
import { TokenPayload } from "../types";

export const generateToken = (payload: TokenPayload): string => {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error("JWT_SECRET is not set");
  }

  const expiresIn = process.env.JWT_EXPIRES_IN || "7d";

  return jwt.sign(payload, secret, { expiresIn } as SignOptions);
};

export const verifyToken = (token: string): TokenPayload | null => {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error("JWT_SECRET is not configured");
  }

  try {
    const decoded = jwt.verify(token, secret);
    return decoded as TokenPayload;
  } catch (error) {
    console.error("Token verification failed:", error);
    return null;
  }
};
