import { z } from "zod";

export const PersonalInfoSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^\d+$/, "Phone must contain only numbers"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  country: z.string().min(2, "Country is required"),
  state: z.string().min(2, "State is required"),
});

export const PaymentMethodSchema = z.object({
  cash: z.boolean().default(true),
});

export const CheckoutSchema = PersonalInfoSchema.merge(PaymentMethodSchema);
