import { z } from "zod";

export const contactSchema = z.object({
  email: z.string().optional().default(""),
  phone: z.string().min(10, "Please enter a valid phone number"),
});

export const deliverySchema = z.object({
  firstName: z.string().min(1, "Name is required"),
  lastName: z.string().optional().default(""),
  address: z.string().min(1, "Address is required"),
  apartment: z.string().optional(),
  city: z.string().min(1, "City is required"),
  governorate: z.string().min(1, "Governorate is required"),
  postalCode: z.string().optional().default(""),
});

export const cardPaymentSchema = z.object({
  cardNumber: z.string().min(16, "Invalid card number").max(19),
  cardName: z.string().min(1, "Name on card is required"),
  expiryDate: z.string().regex(/^\d{2}\/\d{2}$/, "Invalid expiry date (MM/YY)"),
  cvv: z.string().min(3, "Invalid CVV").max(4),
});

export const paymentSchema = z.discriminatedUnion("method", [
  z.object({
    method: z.literal("card"),
    cardNumber: z.string().min(16, "Invalid card number").max(19),
    cardName: z.string().min(1, "Name on card is required"),
    expiryDate: z
      .string()
      .regex(/^\d{2}\/\d{2}$/, "Invalid expiry date (MM/YY)"),
    cvv: z.string().min(3, "Invalid CVV").max(4),
  }),
  z.object({
    method: z.literal("cod"),
  }),
]);

export const checkoutSchema = z.object({
  contact: contactSchema,
  delivery: deliverySchema,
  payment: paymentSchema,
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type DeliveryFormData = z.infer<typeof deliverySchema>;
export type PaymentFormData = z.infer<typeof paymentSchema>;
export type CheckoutFormData = z.infer<typeof checkoutSchema>;
