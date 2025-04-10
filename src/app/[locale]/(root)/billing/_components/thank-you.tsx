"use client";

import { CheckCircle2 } from "lucide-react";
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
  const orderNumber = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div className="flex flex-col items-center justify-center py-8 text-center">
      <div className="mb-6 rounded-full bg-primary/10 p-3">
        <CheckCircle2 className="h-12 w-12 text-primary" />
      </div>

      <h2 className="mb-2 text-2xl font-bold">Thank You for Your Order!</h2>
      <p className="mb-6 text-muted-foreground">
        Your order has been received and is being processed.
      </p>

      <div className="mb-8 w-full max-w-md rounded-md border border-border bg-muted/30 p-4">
        <div className="mb-4 flex justify-between">
          <span className="font-medium">Order Number:</span>
          <span>{orderNumber}</span>
        </div>

        {orderData.shippingInfo && (
          <div className="mb-4">
            <h3 className="mb-2 font-medium">Shipping Information</h3>
            <p className="text-sm text-muted-foreground">
              {orderData.shippingInfo.name}
              <br />
              {orderData.shippingInfo.address}
              <br />
              {orderData.shippingInfo.state}, {orderData.shippingInfo.zipCode}
            </p>
          </div>
        )}

        {orderData.payment && (
          <div>
            <h3 className="mb-2 font-medium">Payment Method</h3>
            <p className="text-sm text-muted-foreground">
              {orderData.payment.paymentMethod === "card" && "Credit Card"}
              {orderData.payment.paymentMethod === "paypal" && "PayPal"}
              {orderData.payment.paymentMethod === "cash" && "Cash on Delivery"}
            </p>
          </div>
        )}
      </div>

      <div className="flex gap-4">
        <Button asChild variant="outline">
          <Link href="/profile/orders">View Orders</Link>
        </Button>
        <Button asChild>
          <Link href="/">Continue Shopping</Link>
        </Button>
      </div>
    </div>
  );
}
