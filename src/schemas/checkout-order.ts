import * as z from "zod";

export const PersonalInfoSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  phone: z.string().min(10, { message: "Valid phone number is required" }),
  address: z.string().min(5, { message: "Address is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  state: z.string().min(1, { message: "State is required" }),
});

export const PaymentMethodSchema = z.object({
  paymentMethod: z.enum(["card", "paypal", "cash"]).default("cash"),
  cardNumber: z.string().optional(),
  cardName: z.string().optional(),
  expiryDate: z.string().optional(),
  cvv: z.string().optional(),
});

export type PersonalInfoType = z.infer<typeof PersonalInfoSchema>;
export type PaymentInfoType = z.infer<typeof PaymentMethodSchema>;
export type OrderDataType = {
  personalInfo: PersonalInfoType;
  paymentInfo: PaymentInfoType;
};
