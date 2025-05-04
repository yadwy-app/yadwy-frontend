"use client";

import { Button } from "@yadwy/ui";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@yadwy/ui";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CompletionStep } from "./completion-step";
import { ProductCategoryStep } from "./product-category-step";
import { ShippingAddressStep } from "./shipping-address-step";
import { StoreInformationStep } from "./store-information-step";

export default function OnboardingFlow() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(25);

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
      setProgress((step + 1) * 25);
    } else {
      router.push("/");
    }
  };

  const handleSkip = () => {
    router.push("/");
  };

  // Render the current step component
  const renderStep = () => {
    switch (step) {
      case 1:
        return <StoreInformationStep />;
      case 2:
        return <ProductCategoryStep />;
      case 3:
        return <ShippingAddressStep />;
      case 4:
        return <CompletionStep />;
      default:
        return <StoreInformationStep />;
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 p-4">
      <Card className="mx-auto w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">
            Let's set up your store! 🎉
          </CardTitle>
          <CardDescription>
            Step {step} of 4:{" "}
            {step === 1
              ? "Store Information"
              : step === 2
                ? "Product Category"
                : step === 3
                  ? "Shipping Address"
                  : "All Done!"}
          </CardDescription>
          <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full bg-primary transition-all duration-300 ease-in-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </CardHeader>
        <CardContent>{renderStep()}</CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Button className="w-full" onClick={handleNext}>
            {step < 4 ? (
              <>
                Continue <ChevronRight className="ml-2 h-4 w-4" />
              </>
            ) : (
              "Go to Dashboard"
            )}
          </Button>
          {step < 4 && (
            <Button variant="ghost" size="sm" onClick={handleSkip}>
              Skip for now
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
