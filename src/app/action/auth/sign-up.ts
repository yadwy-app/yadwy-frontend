"use server";
import { SignUpSchema } from "~/schemas/auth";

export default async function signup(_: unknown, form: FormData) {
  const formData = Object.fromEntries(form);

  const parsed = SignUpSchema.safeParse(formData);

  if (!parsed.success) {
    return { error: parsed.error };
  }
  return { fields: parsed.data };
}
