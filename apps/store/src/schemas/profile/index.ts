import { z } from "zod";

export const CosmaticsSchema = z.object({
  displayName: z
    .string()
    .trim()
    .min(8, "Name must be at least 8 characters long")
    .optional(),
  phone: z
    .string()
    .min(11, "Phone number must be at least 11 characters long")
    .max(11)
    .optional(),
  email: z
    .string()
    .trim()
    .email("The email address is badly formatted.")
    .optional(),
  gender: z.enum(["m", "f", "o"]).optional(),
});

export const UserInfoSchema = z.object({
  email: z
    .string()
    .trim()
    .email("The email address is badly formatted.")
    .optional(),
  gender: z.enum(["m", "f", "o"]).optional(),
});
