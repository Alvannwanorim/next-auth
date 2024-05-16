"use server";

import { signOut } from "@/auth";

export const logout = async () => {
  console.log("Here logging out");

  await signOut();
};
