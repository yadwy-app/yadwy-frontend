"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, CreditCard, MapPin } from "lucide-react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import type { z } from "zod";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { useMultiStepForm } from "~/hooks/use-multi-form";
import { toast } from "~/hooks/use-toast";
import { Link } from "~/i18n/routing";
import { cn } from "~/lib/utils";
import {
  type OrderDataType,
  type PaymentInfoType,
  PaymentMethodSchema,
  PersonalInfoSchema,
  type PersonalInfoType,
} from "~/schemas/checkout-order";
import PaymentForm from "./payment-form";
import PersonalInfoForm from "./personal-info-form";
import StepsNavagation from "./steps-navagation";
import ThankYou from "./thank-you";

export default function Checkout() {
  const [orderData, setOrderData] = useState<Partial<OrderDataType>>({});

  const personalInfoForm = useForm<z.infer<typeof PersonalInfoSchema>>({
    resolver: zodResolver(PersonalInfoSchema),
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      country: "",
      state: "",
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

  const { currentStepIndex, step, isFirstStep, back, next } = useMultiStepForm([
    <PersonalInfoForm key="step1" form={personalInfoForm} />,
    <PaymentForm key="step2" form={paymentForm} />,
    <ThankYou key="step3" />,
  ]);

  async function sendDataToServer(data: OrderDataType) {
    try {
      console.log("Server data sending:", data);
      // Simulate an API call (replace with actual fetch/axios in production)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast({
        title: "Success",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      });
    } catch (error) {
      console.error("Error sending data to server:", error);
      toast({
        title: "Error",
        description: "Failed to submit payment method. Please try again.",
        variant: "destructive",
      });
    }
  }

  async function onSubmit(data: PersonalInfoType | PaymentInfoType) {
    if (currentStepIndex === 0) {
      setOrderData({ personalInfo: data as PersonalInfoType });
      next();
    }
    if (currentStepIndex === 1) {
      if (!orderData.personalInfo) {
        console.error("Personal info is missing");
        return;
      }
      const fullData: OrderDataType = {
        personalInfo: orderData.personalInfo,
        paymentInfo: data as PaymentInfoType,
      };
      await sendDataToServer(fullData);
      next();
    }
  }

  return (
    <div className="col-span-12 flex w-full flex-col gap-5 md:col-span-6">
      <StepsNavagation steps={steps} currentStep={currentStepIndex + 1} />
      <Card className="border-primary">
        <CardContent className="p-6">
          {currentStepIndex === 0 ? (
            <FormProvider {...personalInfoForm}>
              <form
                onSubmit={personalInfoForm.handleSubmit(onSubmit)}
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
                    className={cn("text-white", isFirstStep ? "ml-auto" : "")}
                  >
                    Continue
                  </Button>
                </div>
              </form>
            </FormProvider>
          ) : currentStepIndex === 1 ? (
            <FormProvider {...paymentForm}>
              <form
                onSubmit={paymentForm.handleSubmit(onSubmit)}
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
                    className={cn("text-white", isFirstStep ? "ml-auto" : "")}
                  >
                    Continue
                  </Button>
                </div>
              </form>
            </FormProvider>
          ) : (
            <div>
              {step}
              <div className="flex justify-end pt-4">
                <Link href="/" className="text-background">
                  <Button>Go to Home</Button>
                </Link>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
