"use client";

import { BanknoteIcon } from "lucide-react";
import { useState } from "react";
import type { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/form";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";

// biome-ignore lint/suspicious/noExplicitAny: the data in the form doesn't matter
export default function PaymentForm({ form }: { form: UseFormReturn<any> }) {
  const [_paymentMethod, setPaymentMethod] = useState("card");

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Payment Method</h2>
        <p className="text-sm text-muted-foreground">
          Select your preferred payment method
        </p>
      </div>

      <FormField
        control={form.control}
        name="paymentMethod"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormControl>
              <RadioGroup
                onValueChange={(value) => {
                  field.onChange(value);
                  setPaymentMethod(value);
                }}
                defaultValue={field.value}
                className="grid gap-4 md:grid-cols-3"
              >
                {/* <div> */}
                {/*   <RadioGroupItem */}
                {/*     disabled */}
                {/*     value="card" */}
                {/*     id="card" */}
                {/*     className="peer sr-only" */}
                {/*   /> */}
                {/*   <Label */}
                {/*     htmlFor="card" */}
                {/*     className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary" */}
                {/*   > */}
                {/*     <CreditCard className="mb-3 h-6 w-6" /> */}
                {/*     Credit Card */}
                {/*   </Label> */}
                {/* </div> */}
                <div>
                  <RadioGroupItem
                    value="cash"
                    id="cash"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="cash"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <BanknoteIcon className="mb-3 h-6 w-6" />
                    Cash on Delivery
                  </Label>
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* {paymentMethod === "card" && ( */}
      {/*   <Card className="mt-6"> */}
      {/*     <CardContent className="p-6"> */}
      {/*       <div className="grid gap-4"> */}
      {/*         <FormField */}
      {/*           control={form.control} */}
      {/*           name="cardNumber" */}
      {/*           render={({ field }) => ( */}
      {/*             <FormItem> */}
      {/*               <FormLabel>Card Number</FormLabel> */}
      {/*               <FormControl> */}
      {/*                 <Input */}
      {/*                   placeholder="4242 4242 4242 4242" */}
      {/*                   {...field} */}
      {/*                   value={field.value || ""} */}
      {/*                 /> */}
      {/*               </FormControl> */}
      {/*               <FormMessage /> */}
      {/*             </FormItem> */}
      {/*           )} */}
      {/*         /> */}
      {/**/}
      {/*         <FormField */}
      {/*           control={form.control} */}
      {/*           name="cardName" */}
      {/*           render={({ field }) => ( */}
      {/*             <FormItem> */}
      {/*               <FormLabel>Name on Card</FormLabel> */}
      {/*               <FormControl> */}
      {/*                 <Input */}
      {/*                   placeholder="John Doe" */}
      {/*                   {...field} */}
      {/*                   value={field.value || ""} */}
      {/*                 /> */}
      {/*               </FormControl> */}
      {/*               <FormMessage /> */}
      {/*             </FormItem> */}
      {/*           )} */}
      {/*         /> */}
      {/**/}
      {/*         <div className="grid grid-cols-2 gap-4"> */}
      {/*           <FormField */}
      {/*             control={form.control} */}
      {/*             name="expiryDate" */}
      {/*             render={({ field }) => ( */}
      {/*               <FormItem> */}
      {/*                 <FormLabel>Expiry Date</FormLabel> */}
      {/*                 <FormControl> */}
      {/*                   <Input */}
      {/*                     placeholder="MM/YY" */}
      {/*                     {...field} */}
      {/*                     value={field.value || ""} */}
      {/*                   /> */}
      {/*                 </FormControl> */}
      {/*                 <FormMessage /> */}
      {/*               </FormItem> */}
      {/*             )} */}
      {/*           /> */}
      {/**/}
      {/*           <FormField */}
      {/*             control={form.control} */}
      {/*             name="cvv" */}
      {/*             render={({ field }) => ( */}
      {/*               <FormItem> */}
      {/*                 <FormLabel>CVV</FormLabel> */}
      {/*                 <FormControl> */}
      {/*                   <Input */}
      {/*                     placeholder="123" */}
      {/*                     {...field} */}
      {/*                     value={field.value || ""} */}
      {/*                   /> */}
      {/*                 </FormControl> */}
      {/*                 <FormMessage /> */}
      {/*               </FormItem> */}
      {/*             )} */}
      {/*           /> */}
      {/*         </div> */}
      {/*       </div> */}
      {/*     </CardContent> */}
      {/*   </Card> */}
      {/* )} */}

      {/* {paymentMethod === "paypal" && ( */}
      {/*   <div className="mt-6 rounded-md border border-muted p-6 text-center"> */}
      {/*     <p className="text-sm text-muted-foreground"> */}
      {/*       You will be redirected to PayPal to complete your payment after */}
      {/*       reviewing your order. */}
      {/*     </p> */}
      {/*   </div> */}
      {/* )} */}

      {/* {paymentMethod === "cash" && ( */}
      <div className="mt-6 rounded-md border border-muted p-6">
        <p className="text-sm text-muted-foreground">
          Pay with cash upon delivery. Please ensure you have the exact amount
          ready.
        </p>
      </div>
      {/* )} */}
    </div>
  );
}
