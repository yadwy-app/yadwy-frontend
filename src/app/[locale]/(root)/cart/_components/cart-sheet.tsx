"use client";

import { ShoppingBag } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "~/components/ui/sheet";
import useTextDirection from "~/hooks/useDirection";
import { Link } from "~/i18n/routing";
import { useCartStore } from "~/stores/cart-store";
import { CartItem } from "./cart-item";

interface CartSheetProps {
  children: React.ReactNode;
}

export const CartSheet = ({ children }: CartSheetProps) => {
  const dir = useTextDirection();
  const items = useCartStore((state) => state.items);
  const isDrawerOpen = useCartStore((state) => state.isDrawerOpen);
  const closeDrawer = useCartStore((state) => state.closeDrawer);
  const getSubtotal = useCartStore((state) => state.getSubtotal);
  const getItemCount = useCartStore((state) => state.getItemCount);

  const subtotal = getSubtotal();
  const itemCount = getItemCount();

  return (
    <Sheet open={isDrawerOpen} onOpenChange={(open) => !open && closeDrawer()}>
      {children}
      <SheetContent
        side={dir === "rtl" ? "left" : "right"}
        className="flex w-full flex-col p-0 sm:max-w-md"
      >
        <SheetHeader className="border-b px-6 py-4">
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Shopping Cart
            {itemCount > 0 && (
              <span className="rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                {itemCount}
              </span>
            )}
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
              <ShoppingBag className="h-16 w-16 text-muted-foreground/50" />
              <div>
                <p className="font-medium">Your cart is empty</p>
                <p className="text-sm text-muted-foreground">
                  Add items to get started
                </p>
              </div>
              <SheetClose asChild>
                <Button variant="outline" asChild>
                  <Link href="/products">Browse Products</Link>
                </Button>
              </SheetClose>
            </div>
          ) : (
            <div className="py-2">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t px-6 py-4 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">Subtotal</p>
                <p className="text-xs text-muted-foreground">
                  Shipping calculated at checkout
                </p>
              </div>
              <p className="text-xl font-bold">${subtotal.toFixed(2)}</p>
            </div>

            <div className="flex flex-col gap-2">
              <SheetClose asChild>
                <Button asChild size="lg" className="w-full">
                  <Link href="/checkout">Go to Checkout</Link>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button variant="ghost" size="sm" className="w-full">
                  Continue Shopping
                </Button>
              </SheetClose>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
