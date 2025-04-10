"use client";

import { useState } from "react";
import {
  CreditCard,
  Wallet,
  BanknoteIcon,
  ArrowLeft,
  Check,
} from "lucide-react";

import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "~/components/ui/form";
import { Card, CardContent } from "~/components/ui/card";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "~/components/ui/button";

export const PaymentMethodSchema = z.object({
  paymentMethod: z.enum(["card", "paypal", "cash"]),
  cardNumber: z.string().optional(),
  cardName: z.string().optional(),
  expiryDate: z.string().optional(),
  cvv: z.string().optional(),
});

export function PaymentForm({
  onSuccess,
  onBack,
}: {
  onSuccess: (data: z.infer<typeof PaymentMethodSchema>) => void;
  onBack: () => void;
}) {
  const form = useForm<z.infer<typeof PaymentMethodSchema>>({
    resolver: zodResolver(PaymentMethodSchema),
    defaultValues: {
      paymentMethod: "card",
    },
  });

  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Payment Method</h2>
        <p className="text-sm text-muted-foreground">
          Select your preferred payment method
        </p>
      </div>

      <form
        onSubmit={form.handleSubmit(() => {
          onSuccess(form.getValues());
        })}
      >
        <Form {...form}>
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
                    <div>
                      <RadioGroupItem
                        value="card"
                        id="card"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="card"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <CreditCard className="mb-3 h-6 w-6" />
                        Credit Card
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem
                        value="paypal"
                        id="paypal"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="paypal"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <Wallet className="mb-3 h-6 w-6" />
                        PayPal
                      </Label>
                    </div>
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

          {paymentMethod === "card" && (
            <Card className="mt-6">
              <CardContent className="p-6">
                <div className="grid gap-4">
                  <FormField
                    control={form.control}
                    name="cardNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Card Number</FormLabel>
                        <FormControl>
                          <Input placeholder="4242 4242 4242 4242" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="cardName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name on Card</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="expiryDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Expiry Date</FormLabel>
                          <FormControl>
                            <Input placeholder="MM/YY" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="cvv"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>CVV</FormLabel>
                          <FormControl>
                            <Input placeholder="123" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {paymentMethod === "paypal" && (
            <div className="mt-6 rounded-md border border-muted p-6 text-center">
              <p className="text-sm text-muted-foreground">
                You will be redirected to PayPal to complete your payment after
                reviewing your order.
              </p>
            </div>
          )}

          {paymentMethod === "cash" && (
            <div className="mt-6 rounded-md border border-muted p-6">
              <p className="text-sm text-muted-foreground">
                Pay with cash upon delivery. Please ensure you have the exact
                amount ready.
              </p>
            </div>
          )}

          <div className="mt-6 flex pt-4 gap-4 justify-end">
            <Button type="button" variant="outline" onClick={onBack}>
              <ArrowLeft /> Back
            </Button>
            <Button type="submit">
              <Check /> Complete Order
            </Button>
          </div>
        </Form>
      </form>
    </div>
  );
}
