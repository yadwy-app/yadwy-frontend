import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const SignUpSchema = z
  .object({
    fullName: z.string().min(1, "Full name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// import { z } from "zod";
//
// const arabicEnglishRegex = /^[\u0600-\u06FFa-zA-Z\s]+$/;
//
// export function getLoginSchema(t: (key: string) => string) {
//   return z.object({
//     email: z.string().email(t("emailInvalid")),
//     password: z.string().min(8, t("passwordMin")),
//   });
// }
//
// export function getSignUpSchema(t: (key: string) => string) {
//   return z
//     .object({
//       firstName: z
//         .string()
//         .min(1, t("firstNameRequired"))
//         .regex(arabicEnglishRegex, t("firstNameInvalid")),
//       lastName: z
//         .string()
//         .min(1, t("lastNameRequired"))
//         .regex(arabicEnglishRegex, t("lastNameInvalid")),
//       address: z
//         .string()
//         .min(1, t("addressRequired"))
//         .regex(arabicEnglishRegex, t("addressInvalid")),
//       email: z.string().email(t("emailInvalid")),
//       password: z.string().min(8, t("passwordMin")),
//       confirmPassword: z.string().min(8, t("passwordMin")),
//     })
//     .refine((data) => data.password === data.confirmPassword, {
//       message: t("passwordMismatch"),
//       path: ["confirmPassword"],
//     });
// }
