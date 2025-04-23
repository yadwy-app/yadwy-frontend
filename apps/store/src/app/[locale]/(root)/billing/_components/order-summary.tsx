"use client";

import { Package } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";

// Sample order data - in a real app, this would come from your cart/state management
const orderItems = [
  { id: 1, name: "Product 1", price: 49.99, quantity: 1 },
  { id: 2, name: "Product 2", price: 29.99, quantity: 2 },
];

export function OrderSummary() {
  const subtotal = orderItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const shipping = 4.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Order Summary</h2>
          <Package className="h-5 w-5 text-muted-foreground" />
        </div>
        <Separator className="my-4" />
        <div className="space-y-4">
          <div className="space-y-2">
            {orderItems.map((item) => (
              <div key={item.id} className="flex justify-between">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-muted-foreground">Qty: {item.quantity}</p>
                </div>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>

          <Separator />

          <div className="space-y-2">
            <div className="flex justify-between ">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between ">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between ">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
          </div>

          <Separator />

          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <div className="rounded-md bg-muted p-3 ">
            <p className="font-medium">Estimated Delivery</p>
            <p className="text-muted-foreground">
              {new Date(
                Date.now() + 7 * 24 * 60 * 60 * 1000,
              ).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
