"use client";

import { Lock } from "lucide-react";
import type { FieldErrors, UseFormReturn } from "react-hook-form";
import { Input } from "~/components/ui/input";
import { cn } from "~/lib/utils";
import type { CheckoutFormData } from "~/schemas/checkout";

interface PaymentFormProps {
  form: UseFormReturn<CheckoutFormData>;
}

type CardPaymentErrors = FieldErrors<{
  method: "card";
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvv: string;
}>;

export function PaymentForm({ form }: PaymentFormProps) {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = form;

  const paymentMethod = watch("payment.method");
  const paymentErrors = errors.payment as CardPaymentErrors | undefined;

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold">Payment</h2>
      <p className="text-sm text-muted-foreground">
        All transactions are secure and encrypted.
      </p>

      <div className="rounded-lg border overflow-hidden">
        {/* Credit Card Option */}
        <button
          type="button"
          className={cn(
            "flex w-full items-center justify-between p-4 cursor-pointer border-b text-start",
            paymentMethod === "card" && "bg-gray-50",
          )}
          onClick={() => setValue("payment.method", "card")}
        >
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                paymentMethod === "card" ? "border-black" : "border-gray-300",
              )}
            >
              {paymentMethod === "card" && (
                <div className="w-2.5 h-2.5 rounded-full bg-black" />
              )}
            </div>
            <span className="font-medium">Credit card</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-10 h-6 bg-[#EB001B] rounded flex items-center justify-center">
              <div className="w-6 h-6 bg-[#F79E1B] rounded-full opacity-80 -ms-2" />
            </div>
            <div className="w-10 h-6 bg-[#1A1F71] rounded flex items-center justify-center text-white text-[8px] font-bold">
              VISA
            </div>
            <div className="w-10 h-6 bg-[#006FCF] rounded flex items-center justify-center text-white text-[7px] font-bold">
              AMEX
            </div>
          </div>
        </button>

        {/* Card Fields - shown when card is selected */}
        {paymentMethod === "card" && (
          <div className="p-4 bg-gray-50 space-y-3 border-b">
            <div className="relative">
              <Input
                placeholder="Card number"
                className="h-12 pe-10"
                {...register("payment.cardNumber")}
              />
              <Lock className="absolute end-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              {paymentErrors?.cardNumber && (
                <p className="text-sm text-destructive mt-1">
                  {paymentErrors.cardNumber.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Input
                  placeholder="Expiration date (MM/YY)"
                  className="h-12"
                  {...register("payment.expiryDate")}
                />
                {paymentErrors?.expiryDate && (
                  <p className="text-sm text-destructive mt-1">
                    {paymentErrors.expiryDate.message}
                  </p>
                )}
              </div>
              <div>
                <Input
                  placeholder="Security code"
                  className="h-12"
                  {...register("payment.cvv")}
                />
                {paymentErrors?.cvv && (
                  <p className="text-sm text-destructive mt-1">
                    {paymentErrors.cvv.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <Input
                placeholder="Name on card"
                className="h-12"
                {...register("payment.cardName")}
              />
              {paymentErrors?.cardName && (
                <p className="text-sm text-destructive mt-1">
                  {paymentErrors.cardName.message}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Cash on Delivery Option */}
        <button
          type="button"
          className={cn(
            "flex w-full items-center justify-between p-4 cursor-pointer text-start",
            paymentMethod === "cod" && "bg-gray-50",
          )}
          onClick={() => setValue("payment.method", "cod")}
        >
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                paymentMethod === "cod" ? "border-black" : "border-gray-300",
              )}
            >
              {paymentMethod === "cod" && (
                <div className="w-2.5 h-2.5 rounded-full bg-black" />
              )}
            </div>
            <span className="font-medium">Cash on Delivery (COD)</span>
          </div>
        </button>

        {/* COD info - shown when COD is selected */}
        {paymentMethod === "cod" && (
          <div className="px-4 pb-4 bg-gray-50">
            <p className="text-sm text-muted-foreground ps-8">
              Pay with cash when your order is delivered.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
