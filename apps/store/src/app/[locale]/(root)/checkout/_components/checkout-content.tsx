"use client";

import { useCartStore } from "~/stores/cart-store";
import { CheckoutForm } from "./checkout-form";
import { EmptyCart } from "./empty-cart";
import { OrderSummary } from "./order-summary";

export function CheckoutContent() {
  const items = useCartStore((state) => state.items);
  const getSubtotal = useCartStore((state) => state.getSubtotal);

  const subtotal = getSubtotal();
  const shipping = items.length > 0 ? 90 : 0; // E£90 shipping like in the Shopify example
  const total = subtotal + shipping;

  if (items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* Form Section */}
      <div className="lg:col-span-7 order-2 lg:order-1">
        <CheckoutForm subtotal={subtotal} shipping={shipping} total={total} />
      </div>

      {/* Order Summary Section */}
      <div className="lg:col-span-5 order-1 lg:order-2">
        <div className="lg:sticky lg:top-8">
          <OrderSummary
            items={items}
            subtotal={subtotal}
            shipping={shipping}
            total={total}
          />
        </div>
      </div>
    </div>
  );
}
