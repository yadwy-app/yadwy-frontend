"use server";

import { CosmaticsSchema } from "~/schemas/profile";

export default async function updateCosmatics(_: any, form: FormData) {
  const parsed = CosmaticsSchema.safeParse(Object.fromEntries(form));

  if (!parsed.success) {
    return "error";
  }

  const data = parsed.data;

  console.log(data);
  return {};
}
