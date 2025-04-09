"use client";

import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "~/components/ui/form";
import type { UseFormReturn } from "react-hook-form";
import { z } from "zod";

export const PersonalInfoSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Valid phone number is required" }),
  address: z.string().min(5, { message: "Address is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  state: z.string().min(1, { message: "State is required" }),
  zipCode: z.string().min(1, { message: "Zip code is required" }),
});

const countries = [{ value: "eg", label: "Egypt" }];

const states: Record<string, { value: string; label: string }[]> = {
  eg: [
    { value: "cai", label: "Cairo" },
    { value: "alx", label: "Alexandria" },
    { value: "giz", label: "Giza" },
    { value: "shg", label: "Sohag" },
    { value: "asw", label: "Aswan" },
    { value: "asy", label: "Asyut" },
    { value: "beh", label: "Beheira" },
    { value: "bnsw", label: "Beni Suef" },
    { value: "dam", label: "Damietta" },
    { value: "dak", label: "Dakahlia" },
    { value: "fay", label: "Faiyum" },
    { value: "gha", label: "Gharbia" },
    { value: "ism", label: "Ismailia" },
    { value: "ksh", label: "Kafr El Sheikh" },
    { value: "lux", label: "Luxor" },
    { value: "mat", label: "Matruh" },
    { value: "min", label: "Minya" },
    { value: "mnf", label: "Monufia" },
    { value: "nv", label: "New Valley" },
    { value: "nsh", label: "North Sinai" },
    { value: "ptd", label: "Port Said" },
    { value: "kba", label: "Qalyubia" },
    { value: "qna", label: "Qena" },
    { value: "red", label: "Red Sea" },
    { value: "shk", label: "Sharqia" },
    { value: "ssh", label: "South Sinai" },
    { value: "suz", label: "Suez" },
  ],
};

export function PersonalInfoForm({
  form,
}: { form: UseFormReturn<z.infer<typeof PersonalInfoSchema>> }) {
  const selectedCountry = (form.watch("country") as string) || "eg";

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Shipping Information</h2>
        <p className="text-sm text-muted-foreground">
          Enter your shipping details
        </p>
      </div>

      <Form {...form}>
        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="(123) 456-7890" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>Street Address</FormLabel>
                <FormControl>
                  <Input placeholder="123 Main St, Apt 4B" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value || "us"}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country.value} value={country.value}>
                        {country.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State / Province</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {states[selectedCountry]?.map((state) => (
                      <SelectItem key={state.value} value={state.value}>
                        {state.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="zipCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Zip / Postal Code</FormLabel>
                <FormControl>
                  <Input placeholder="10001" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </Form>
    </div>
  );
}
