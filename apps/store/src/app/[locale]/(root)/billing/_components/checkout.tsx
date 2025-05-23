"use client";

import { Check, CreditCard, MapPin } from "lucide-react";
import { useState } from "react";
import ReactConfetti from "react-confetti";
import { Card, CardContent } from "~/components/ui/card";
import { OrderSummary } from "./order-summary";
import { PaymentForm } from "./payment-form";
import { ShippingForm } from "./shipping-form";
import { ThankYou } from "./thank-you";
import { useMultiStepForm } from "./use-multi-form";

export default function Checkout() {
  const [orderData, setOrderData] = useState<{
    shippingInfo?: {
      name: string;
      address: string;
      state: string;
      zipCode: string;
    };
    payment?: { paymentMethod: "card" | "paypal" | "cash" };
  }>({});

  const { currentStepIndex, step, back, next } = useMultiStepForm([
    <ShippingForm
      key="step1"
      onSuccess={(data) => {
        next();
        setOrderData({
          shippingInfo: data,
        });
      }}
    />,
    <PaymentForm
      key="step2"
      onSuccess={(data) => {
        next();
        setOrderData({
          payment: data,
          ...orderData,
        });
      }}
      onBack={() => {
        back();
      }}
    />,
    <ThankYou key="step3" orderData={orderData} />,
  ]);

  const steps = [
    { id: 1, icon: <MapPin className="h-5 w-5" />, label: "Shipping" },
    { id: 2, icon: <CreditCard className="h-5 w-5" />, label: "Payment" },
    { id: 3, icon: <Check className="h-5 w-5" />, label: "Confirmation" },
  ];

  return (
    <div className="pb-8">
      {/* Steps Indicator */}
      <div className="mb-8">
        <div className="flex justify-center">
          <div className="flex w-full max-w-xl items-center justify-between">
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
        <div className="relative mx-auto mt-4">
          <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-muted" />
          <div
            className="absolute left-0 top-1/2 h-0.5 -translate-y-1/2 bg-primary transition-all duration-300"
            style={{
              width: `${(currentStepIndex / (steps.length - 1)) * 100}%`,
            }}
          />
        </div>
      </div>

      <div className="mx-auto grid gap-8 lg:grid-cols-3">
        {/* Main Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">{step}</CardContent>
          </Card>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <OrderSummary />
        </div>
      </div>
      {typeof window !== "undefined" && currentStepIndex === 2 && (
        <ReactConfetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={300}
          gravity={0.25}
          wind={0.02}
          tweenDuration={1800}
          colors={["#36B6B2", "#FFD700", "#FF6B6B", "#4ECDC4"]}
        />
      )}
    </div>
  );
}
