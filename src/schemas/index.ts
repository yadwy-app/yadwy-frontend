import { z } from 'zod';

export const AddressSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Valid phone number is required" }),
  address: z.string().min(5, { message: "Address is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  state: z.string().min(1, { message: "Governorate is required" }),
  zipCode: z.string().min(1, { message: "Postal code is required" }),
});

export type ShippingAddress = z.infer<typeof AddressSchema> & {
  id: number;
  isDefault: boolean;
};