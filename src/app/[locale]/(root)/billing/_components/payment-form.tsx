"use client";

import { Checkbox } from "~/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
} from "~/components/ui/form";
import { CreditCard } from "lucide-react";

export default function PaymentForm({ form }: { form: any }) {
  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      {/* Payment Option */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 text-primary border border-primary rounded-md px-4 py-2">
          <CreditCard className="h-5 w-5" />
          <span>Cash on Delivery</span>
        </div>
      </div>

      {/* Checkbox for Terms & Conditions */}
      <FormField
        control={form.control}
        name="cash"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>Accept terms and conditions</FormLabel>
              <FormDescription>
                You agree to pay the full amount in cash upon delivery of your
                order.
              </FormDescription>
            </div>
          </FormItem>
        )}
      />
    </div>
  );
}
