"use client";

import { CheckCircle2, Package } from "lucide-react";
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
        <div className="flex flex-col items-center">
          <div className="relative space-y-4">
            <div className="relative rounded-full bg-background p-5 shadow-lg">
              <CheckCircle2 className="h-16 w-16 text-primary" />
            </div>
          </div>

          <h2 className="text-xl md:text-3xl font-bold text-textColor">
            {t("title")}
          </h2>
          <p className="w-full md:max-w-md text-center text-lg text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <div className="w-full rounded-lg border bg-card p-2 md:p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between border-b">
            <span className="font-bold text-muted-foreground">
              {t("orderNumber")}
            </span>
            <span className="font-light text-primary">{orderNumber}</span>
          </div>

          {orderData.shippingInfo && (
            <div className="flex flex-col gap-2 rounded-md bg-muted/50 p-4 transition-transform hover:translate-y-[-2px]">
              <div className="flex items-center gap-2">
                <Package className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-textColor">
                  {t("shippingInfo")}
                </h3>
              </div>
              <div className="mt-2 text-sm text-muted-foreground leading-relaxed">
                <p className="font-medium text-textColor">
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
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            asChild
            variant="outline"
            className="group relative overflow-hidden border-border text-textColor hover:bg-light-primary"
          >
            <Link href="/profile/orders" className="flex items-center gap-2">
              <span className="relative z-10">{t("viewOrders")}</span>
              <span className="button-shine" />
            </Link>
          </Button>
          <Button
            asChild
            className="group relative overflow-hidden bg-primary hover:bg-primary-700 text-primary-foreground"
          >
            <Link href="/" className="flex items-center gap-2">
              <span className="relative z-10">{t("continueShopping")}</span>
              <span className="button-shine" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
