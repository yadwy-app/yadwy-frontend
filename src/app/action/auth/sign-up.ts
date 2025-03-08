"use server";
import { console } from "inspector";
import { SignUpSchema } from "~/schemas/auth";

export default async function signUpAction(_: unknown, form: FormData) {
  const formData = Object.fromEntries(form);
  const parsed = SignUpSchema.safeParse(formData);

  if (!parsed.success) {
    return { error: parsed.error };
  }
  console.log(parsed.data);

  return { fields: parsed.data };
}
