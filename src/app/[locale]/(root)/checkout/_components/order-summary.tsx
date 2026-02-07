"use client";

import Image from "next/image";
import { Separator } from "~/components/ui/separator";
import type { CartItem } from "~/types/cart";

interface OrderSummaryProps {
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
}

export function OrderSummary({
  items,
  subtotal,
  shipping,
  total,
}: OrderSummaryProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-6 space-y-6">
      {/* Items */}
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex gap-4">
            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border bg-white">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
                sizes="64px"
              />
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-gray-500 text-xs text-white">
                {item.quantity}
              </span>
            </div>
            <div className="flex flex-1 items-center justify-between">
              <div>
                <p className="text-sm font-medium line-clamp-2">{item.name}</p>
              </div>
              <p className="text-sm font-medium">
                E£{(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Separator />

      {/* Totals */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Subtotal</span>
          <span>E£{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Shipping</span>
          <span>E£{shipping.toFixed(2)}</span>
        </div>
      </div>

      <Separator />

      <div className="flex justify-between items-center">
        <span className="text-base font-medium">Total</span>
        <div className="text-end">
          <span className="text-xs text-muted-foreground me-2">EGP</span>
          <span className="text-xl font-semibold">E£{total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
