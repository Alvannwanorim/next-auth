"use server";

import { UserRole } from "@prisma/client";
import { getUserRole } from "./session";

export const admin = async () => {
  const role = await getUserRole();

  if (role !== UserRole.ADMIN) {
    return { error: "Forbidden!" };
  }

  return { success: "Allowed!" };
};
