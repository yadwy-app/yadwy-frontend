"use client";

import { FaRegCheckCircle } from "react-icons/fa";
import { FaCreditCard, FaLocationDot } from "react-icons/fa6";
import StepsNavagation from "./steps-navagation";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  PaymentMethodSchema,
  PersonalInfoSchema,
} from "~/schemas/checkout-order";
import { useMultiStepForm } from "~/hooks/use-multi-form";
import PersonalInfoForm from "./personal-info-form";
import PaymentForm from "./payment-form";
import ThankYou from "./thank-you";

const stepsData = [
  { id: 1, icon: <FaLocationDot />, label: "Step 1" },
  { id: 2, icon: <FaCreditCard />, label: "Step 2" },
  { id: 3, icon: <FaRegCheckCircle />, label: "Step 3" },
];

export default function Checkout() {
  const form = useForm<z.infer<typeof PersonalInfoSchema>>({
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
      cash: true,
    },
  });

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <PersonalInfoForm key="step1" form={form} />,
      <PaymentForm key="step2" form={paymentForm} />,
      <ThankYou key="step3" />,
    ]);

  function onSubmit(data: any) {
    console.log("Submitted Data:", data);
    if (!isLastStep) {
      next();
    } else {
      console.log(
        "Final Submission:",
        form.getValues(),
        paymentForm.getValues(),
      );
    }
  }

  return (
    <div className="col-span-12 flex flex-col gap-5 md:col-span-6">
      <StepsNavagation steps={stepsData} currentStep={currentStepIndex + 1} />
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-2"
        >
          {step}
          <div className="flex gap-4">
            {!isFirstStep && (
              <Button variant="outline" onClick={back} type="button">
                Back
              </Button>
            )}
            <Button type="submit" variant="outline">
              {isLastStep ? "Submit" : "Next"}
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
