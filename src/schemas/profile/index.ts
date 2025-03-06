import { z } from "zod";

export const CosmaticsSchema = z.object({
  displayName: z
    .string()
    .trim()
    .min(8, "Name must be at least 8 characters long")
    .optional(),
  profilePicture: z.string().optional(),
});

export const UserInfoSchema = z.object({
  email: z
    .string()
    .trim()
    .email("The email address is badly formatted.")
    .optional(),
  gender: z.enum(["m", "f", "o"]).optional(),
});

export const SecuritySchema = z.object({
  twoFactorAuthentication: z.boolean().optional(),
  activeSessions: z.array(
    z.object({
      id: z.string(),
      userAgent: z.unknown(),
      isCurrentSession: z.boolean(),
      ipAddress: z.unknown(),
    }),
  ),
});
