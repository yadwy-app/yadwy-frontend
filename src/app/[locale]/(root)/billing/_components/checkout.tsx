"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Check, CreditCard, MapPin, Package } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { useMultiStepForm } from "./use-multi-form";
import { PersonalInfoForm, PersonalInfoSchema } from "./personal-info-form";
import { PaymentForm, PaymentMethodSchema } from "./payment-form";
import { ThankYou } from "./thank-you";
import { OrderSummary } from "./order-summary";
import type { z } from 'zod';

export default function Checkout() {
  const [orderData, setOrderData] = useState({});

  const personalInfoForm = useForm<z.infer<typeof PersonalInfoSchema>>({
    resolver: zodResolver(PersonalInfoSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      country: "",
      state: "",
      zipCode: "",
    },
  });

  const paymentForm = useForm<z.infer<typeof PaymentMethodSchema>>({
    resolver: zodResolver(PaymentMethodSchema),
    defaultValues: {
      paymentMethod: "card",
    },
  });

  const { currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <PersonalInfoForm key="step1" form={personalInfoForm} />,
      <PaymentForm key="step2" form={paymentForm} />,
      <ThankYou key="step3" orderData={orderData} />,
    ]);

  const steps = [
    { id: 1, icon: <MapPin className="h-5 w-5" />, label: "Shipping" },
    { id: 2, icon: <CreditCard className="h-5 w-5" />, label: "Payment" },
    { id: 3, icon: <Check className="h-5 w-5" />, label: "Confirmation" },
  ];

  function onSubmit(_data: unknown) {
    if (!isLastStep) {
      if (currentStepIndex === 0) {
        setOrderData((prev) => ({
          ...prev,
          personalInfo: personalInfoForm.getValues(),
        }));
      } else if (currentStepIndex === 1) {
        setOrderData((prev) => ({ ...prev, payment: paymentForm.getValues() }));
      }
      next();
    } else {
      console.log("Final Submission:", orderData);
      // Submit order to backend
    }
  }

  const currentForm = currentStepIndex === 0 ? personalInfoForm : paymentForm;

  return (
    <div className="container mx-auto px-4 pb-8">
      <div className="mb-8">
        <div className="flex justify-center">
          <div className="flex w-full max-w-3xl items-center justify-between">
            {steps.map((s, i) => (
              <div key={s.id} className="flex flex-col items-center">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full border-2 ${
                    i < currentStepIndex
                      ? "border-primary bg-primary text-primary-foreground"
                      : i === currentStepIndex
                        ? "border-primary text-primary"
                        : "border-muted-foreground/30 text-muted-foreground/50"
                  }`}
                >
                  {i < currentStepIndex ? (
                    <Check className="h-6 w-6" />
                  ) : (
                    s.icon
                  )}
                </div>
                <span
                  className={`mt-2 text-sm ${
                    i <= currentStepIndex
                      ? "font-medium text-foreground"
                      : "text-muted-foreground/50"
                  }`}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative mx-auto mt-4 max-w-3xl">
          <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-muted" />
          <div
            className="absolute left-0 top-1/2 h-0.5 -translate-y-1/2 bg-primary transition-all duration-300"
            style={{
              width: `${(currentStepIndex / (steps.length - 1)) * 100}%`,
            }}
          />
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        {/* Main Form */}
        <div className="md:col-span-2">
          <Card>
            <CardContent className="p-6">
              <form
                onSubmit={currentForm.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {step}
                <div className="flex justify-between pt-4">
                  {!isFirstStep && (
                    <Button type="button" variant="outline" onClick={back}>
                      Back
                    </Button>
                  )}
                  <Button
                    type="submit"
                    className={`${isFirstStep ? "ml-auto" : ""}`}
                  >
                    {isLastStep ? "Complete Order" : "Continue"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Order Summary */}
        <div className="md:col-span-1">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Order Summary</h2>
                <Package className="h-5 w-5 text-muted-foreground" />
              </div>
              <Separator className="my-4" />
              <OrderSummary />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
