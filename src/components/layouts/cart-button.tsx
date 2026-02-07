"use client";

import { ShoppingCart } from "lucide-react";
import { CartSheet } from "~/app/[locale]/(root)/cart/_components/cart-sheet";
import { Button } from "~/components/ui/button";
import { SheetTrigger } from "~/components/ui/sheet";
import { useCartStore } from "~/stores/cart-store";

interface CartButtonProps {
  ariaLabel: string;
}

export function CartButton({ ariaLabel }: CartButtonProps) {
  const getItemCount = useCartStore((state) => state.getItemCount);
  const openDrawer = useCartStore((state) => state.openDrawer);
  const itemCount = getItemCount();

  return (
    <CartSheet>
      <SheetTrigger asChild onClick={openDrawer}>
        <Button
          variant="ghost"
          size="icon"
          aria-label={ariaLabel}
          className="relative"
        >
          <ShoppingCart className="h-5 w-5" />
          {itemCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
              {itemCount > 99 ? "99+" : itemCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
    </CartSheet>
  );
}
