"use client";

import { CheckCircle2, CreditCard, Package, ShoppingBag } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { Button } from "~/components/ui/button";
import { Link } from "~/i18n/routing";
export function ThankYou({
  orderData,
}: {
  orderData: {
    shippingInfo?: {
      name: string;
      address: string;
      state: string;
      zipCode: string;
    };
    payment?: { paymentMethod: "card" | "paypal" | "cash" };
  };
}) {
  const [showConfetti, setShowConfetti] = useState(false);
  const t = useTranslations("ThankYou");
  const orderNumber = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;

  // Trigger animations after component mounts
  useEffect(() => {
    setShowConfetti(true);
  }, []);

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      {showConfetti && (
        <Confetti
          width={typeof window !== "undefined" ? window.innerWidth : 300}
          height={typeof window !== "undefined" ? window.innerHeight : 300}
          recycle={false}
          numberOfPieces={200}
          gravity={0.2}
          colors={["#36B6B2", "#FFD700", "#FF6B6B", "#4ECDC4"]}
        />
      )}
      <div className="flex w-full flex-col items-center justify-center gap-8 px-4">
        <div className="animate-fade-in-down flex flex-col items-center">
          <div className="relative space-y-4">
            <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping-slow" />
            <div className="relative rounded-full bg-background p-5 shadow-lg">
              <CheckCircle2 className="h-16 w-16 text-primary animate-check-mark" />
            </div>
          </div>

          <h2
            className="animate-fade-in text-xl md:text-3xl font-bold text-text"
            style={{ animationDelay: "0.3s" }}
          >
            {t("title")}
          </h2>
          <p
            className="animate-fade-in w-full md:max-w-md text-center text-lg text-muted-foreground"
            style={{ animationDelay: "0.5s" }}
          >
            {t("subtitle")}
          </p>
        </div>

        <div
          className="animate-fade-in w-full rounded-lg border bg-card p-2 md:p-6 shadow-sm"
          style={{ animationDelay: "0.7s" }}
        >
          <div className="mb-4 flex items-center justify-between border-b">
            <span className="font-bold text-muted-foreground">
              {t("orderNumber")}
            </span>
            <span className="font-light text-primary">{orderNumber}</span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {orderData.shippingInfo && (
              <div className="flex flex-col gap-2 rounded-md bg-muted/50 p-4 transition-transform hover:translate-y-[-2px]">
                <div className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-text">
                    {t("shippingInfo")}
                  </h3>
                </div>
                <div className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  <p className="font-medium text-text">
                    {orderData.shippingInfo.name}
                  </p>
                  <p>{orderData.shippingInfo.address}</p>
                  <p>
                    {orderData.shippingInfo.state},{" "}
                    {orderData.shippingInfo.zipCode}
                  </p>
                </div>
              </div>
            )}

            {orderData.payment && (
              <div className="flex flex-col gap-2 rounded-md bg-muted/50 p-4 transition-transform hover:translate-y-[-2px]">
                <div className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-text">
                    {t("paymentMethod")}
                  </h3>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  {orderData.payment.paymentMethod === "card" && (
                    <p className="flex items-center gap-2">
                      <span className="inline-block h-4 w-4 rounded-full bg-green-500" />
                      {t("paymentMethods.card")}
                    </p>
                  )}
                  {orderData.payment.paymentMethod === "paypal" && (
                    <p className="flex items-center gap-2">
                      <span className="inline-block h-4 w-4 rounded-full bg-blue-500" />
                      {t("paymentMethods.paypal")}
                    </p>
                  )}
                  {orderData.payment.paymentMethod === "cash" && (
                    <p className="flex items-center gap-2">
                      <span className="inline-block h-4 w-4 rounded-full bg-yellow-500" />
                      {t("paymentMethods.cash")}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <div
          className="animate-fade-in flex flex-col gap-4 sm:flex-row"
          style={{ animationDelay: "0.9s" }}
        >
          <Button
            asChild
            variant="outline"
            className="group relative overflow-hidden"
          >
            <Link href="/profile/orders" className="flex items-center gap-2">
              <span className="relative z-10">{t("viewOrders")}</span>
              <span className="button-shine" />
            </Link>
          </Button>
          <Button asChild className="group relative overflow-hidden">
            <Link href="/" className="flex items-center gap-2">
              <ShoppingBag className="h-4 w-4 transition-transform group-hover:scale-110" />
              <span className="relative z-10">{t("continueShopping")}</span>
              <span className="button-shine" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
