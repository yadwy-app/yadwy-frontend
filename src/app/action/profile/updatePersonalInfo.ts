"use server";
import { UserInfoSchema } from "~/schemas/profile";

export default async function updatePersonalInfo(_: any, form: FormData) {
  const parsed = UserInfoSchema.safeParse(Object.fromEntries(form));

  if (!parsed.success) {
    return "error";
  }

  const data = parsed.data;

  console.log(data);

  return {};
}
