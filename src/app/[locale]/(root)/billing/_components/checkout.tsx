"use client";

import { useState } from "react";
import { Check, CreditCard, MapPin, Package } from "lucide-react";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMultiStepForm } from "~/hooks/use-multi-form";
import PersonalInfoForm from "./personal-info-form";
import PaymentForm from "./payment-form";
import ThankYou from "./thank-you";
import OrderSummary from "./order-summary";
import StepsNavagation from "./steps-navagation";

const PersonalInfoSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Valid phone number is required" }),
  address: z.string().min(5, { message: "Address is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  state: z.string().min(1, { message: "State is required" }),
  zipCode: z.string().min(1, { message: "Zip code is required" }),
});

const PaymentMethodSchema = z.object({
  paymentMethod: z.enum(["card", "paypal", "cash"]),
  cardNumber: z.string().optional(),
  cardName: z.string().optional(),
  expiryDate: z.string().optional(),
  cvv: z.string().optional(),
});

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

  const steps = [
    { id: 1, icon: <MapPin className="h-5 w-5" />, label: "Shipping" },
    { id: 2, icon: <CreditCard className="h-5 w-5" />, label: "Payment" },
    { id: 3, icon: <Check className="h-5 w-5" />, label: "Confirmation" },
  ];

  const { currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultiStepForm([
    <PersonalInfoForm key="step1" form={personalInfoForm} />,
    <PaymentForm key="step2" form={paymentForm} />,
    <ThankYou key="step3" orderData={orderData} />,
  ]);

  function onSubmit(data: any) {
    if (!isLastStep) {
      if (currentStepIndex === 0) {
        setOrderData((prev) => ({ ...prev, personalInfo: personalInfoForm.getValues() }));
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
    <div className="col-span-12 md:col-span-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Checkout</h1>
        <p className="text-sm text-muted-foreground">Complete your purchase securely</p>
      </div>

      {/* Steps Indicator */}
      <div className="mb-8">
        <StepsNavagation steps={steps} currentStep={currentStepIndex + 1} />
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Main Form */}
        <div className="md:col-span-2">
          <Card>
            <CardContent className="p-6">
              <FormProvider {...currentForm}>
                <form onSubmit={currentForm.handleSubmit(onSubmit)} className="space-y-6">
                  {step}
                  <div className="flex justify-between pt-4">
                    {!isFirstStep && (
                      <Button type="button" variant="outline" onClick={back}>
                        Back
                      </Button>
                    )}
                    <Button 
                      type="submit" 
                      className={`${isFirstStep ? "ml-auto" : ""} bg-primary hover:bg-primary/90`}
                    >
                      {isLastStep ? "Complete Order" : "Continue"}
                    </Button>
                  </div>
                </form>
              </FormProvider>
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
              <OrderSummary />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
