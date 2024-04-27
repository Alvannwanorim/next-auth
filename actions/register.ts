"use server";
import { LoginSchema } from "@/schemas";
import * as z from "zod";
export const register = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);
  //   return { error: "Invalid fields!" };
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  return { success: "Email sent!" };
};
