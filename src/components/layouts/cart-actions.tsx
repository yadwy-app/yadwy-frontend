"use client";

import { ShoppingCart, Heart, User } from "lucide-react";
import { Button } from "~/components/ui/button";
import { useTranslations, useLocale } from "next-intl";
import { useSelector } from "react-redux";
import type { RootState } from "~/redux/store";
import { CartSheet } from "~/app/[locale]/(root)/cart/_components/cart-sheet"; // Ensure this path is correct
import { SheetTrigger } from "~/components/ui/sheet"; // Adjusted import path
import useTextDirection from "~/hooks/useDirection";

export default function CartActions() {
  const t = useTranslations("Header");
  const dir = useTextDirection();
  const qty = useSelector((state: RootState) => state.cart.quantity);

  return (
    <div className={`flex items-center gap-1 sm:gap-2`}>
      <CartSheet>
        <SheetTrigger
          asChild
          className="flex items-center justify-center rounded-full bg-accent p-2"
        >
          <Button
            variant="ghost"
            size="icon"
            aria-label={t("shoppingCart")}
            className="relative"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
              {qty}
            </span>
          </Button>
        </SheetTrigger>
      </CartSheet>
      <Button variant="ghost" size="icon" aria-label={t("wishlist")}>
        <Heart className="h-5 w-5" />
      </Button>
      <Button variant="ghost" size="icon" aria-label={t("account")}>
        <User className="h-5 w-5" />
      </Button>
    </div>
  );
}
