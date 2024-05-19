"use server";
import { SettingsSchema } from "@/schemas";
import * as z from "zod";
import { getSession } from "./session";
import { db } from "@/lib/db";

export const settings = async (values: z.infer<typeof SettingsSchema>) => {
  const user = await getSession();
  if (!user) {
    return { error: "Unauthorized" };
  }

  const dbUser = await db.user.findFirst({
    where: { id: user.user.id },
  });

  if (!dbUser) {
    return { error: "Unauthorized!" };
  }

  await db.user.update({
    where: { id: dbUser.id },
    data: {
      ...values,
    },
  });

  return { success: "User updated" };
};
