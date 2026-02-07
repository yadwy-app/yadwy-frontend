"use client";

import { useCartStore } from "~/stores/cart-store";

export function CartSummary() {
  const getSubtotal = useCartStore((state) => state.getSubtotal);
  const getItemCount = useCartStore((state) => state.getItemCount);

  const subtotal = getSubtotal();
  const itemCount = getItemCount();
  const shipping = itemCount > 0 ? 5 : 0;
  const total = subtotal + shipping;

  return (
    <div className="rounded-lg border bg-card p-6">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">
            Subtotal ({itemCount} items)
          </span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Shipping</span>
          <span className="font-medium">
            {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
          </span>
        </div>
        <hr className="border-gray-200" />
        <div className="flex items-center justify-between">
          <span className="font-semibold">Total</span>
          <span className="font-bold text-lg">${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
