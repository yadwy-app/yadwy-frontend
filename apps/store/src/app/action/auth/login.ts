"use server";
import { LoginSchema } from "~/schemas/auth";

export default async function login(_: unknown, form: FormData) {
  const parsed = LoginSchema.safeParse(Object.fromEntries(form));
  if (!parsed.success) {
    return { error: parsed.error };
  }
  // console.log(parsed.data);
  return { fields: parsed.data };
}
