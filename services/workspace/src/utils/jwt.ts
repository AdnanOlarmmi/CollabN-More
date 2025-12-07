import jwt from "jsonwebtoken";
import { TokenPayload } from "../types";

export const verifyToken = (token: string): TokenPayload | null => {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error("JWT_SECRET is not set");
    }
    try {
        const decoded = jwt.verify(token, secret) as TokenPayload;
        return decoded;
    } catch (error) {
        console.error("Token verification failed:", error);
        return null;
    }
};