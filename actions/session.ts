"use server";

import { auth } from "@/auth";

export const getSession = async () => {
  const session = await auth();
  return session;
};

export const getUserRole = async () => {
  const session = await auth();
  return session?.user.role;
};
