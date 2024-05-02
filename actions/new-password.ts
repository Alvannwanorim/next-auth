"use server";
import { getPasswordResetTokenByToken } from "@/data/password-reset-token";
import { NewPasswordSchema } from "@/schemas";
import * as z from "zod";
import * as bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const newPassword = async (
  values: z.infer<typeof NewPasswordSchema>,
  token: string | null
) => {
  if (!token) {
    return { error: "Missing token" };
  }
  const validatedFields = NewPasswordSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid password" };
  }
  const passwordResetToken = await getPasswordResetTokenByToken(token);

  if (!passwordResetToken) {
    return { error: "Invalid token" };
  }

  const hasExpired = new Date(passwordResetToken.expires) < new Date();

  if (hasExpired) {
    return { error: "Token has expired!" };
  }

  const existingUser = await getUserByEmail(passwordResetToken.email);

  if (!existingUser) {
    return { error: "Email not found" };
  }
  const hashedPassword = await bcrypt.hash(validatedFields.data.password, 10);

  await db.user.update({
    where: { id: existingUser?.id },
    data: {
      password: hashedPassword,
    },
  });

  await db.passwordResetToken.delete({
    where: { id: passwordResetToken.id },
  });
  return { success: "password reset successful!" };
};
