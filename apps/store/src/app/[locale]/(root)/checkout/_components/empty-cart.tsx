"use client";

import { ShoppingBag } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Link } from "~/i18n/routing";

export function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <ShoppingBag className="h-24 w-24 text-muted-foreground/50 mb-6" />
      <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
      <p className="text-muted-foreground mb-6">
        Add some items to your cart to checkout
      </p>
      <Button asChild>
        <Link href="/products">Browse Products</Link>
      </Button>
    </div>
  );
}
