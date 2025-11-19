import { PrismaClient } from "@prisma/client";
import { RegisterRequest } from "../types";
import { LoginRequest } from "../types";
const prisma = new PrismaClient();
export const registerUser = async (user: RegisterRequest) => {
  const newUser = await prisma.user.create({
    data: user,
  });

  return newUser;
};

export const loginUser = async (loginDetail: LoginRequest) => {
  const user = await prisma.user.findUnique({
    where: { email: loginDetail.email },
  });
  if (!user) {
    throw new Error("User not found");
  }
  // if (user.password !== loginDetail.password) {
  //   throw new Error("Invalid password");
  // }
  return user;
};
