"use client";

import { Heart, ShoppingCart } from "lucide-react";
import { useTranslations } from "next-intl";
import { CartSheet } from "~/app/[locale]/(root)/cart/_components/cart-sheet"; // Ensure this path is correct
import { Button } from "~/components/ui/button";
import { SheetTrigger } from "~/components/ui/sheet"; // Adjusted import path
import NavManager from "./nav-manger";

export default function CartActions() {
  const t = useTranslations("Header");
  const qty = 0; // TODO: Replace with actual quantity from your cart state

  return (
    <div className={`flex items-center gap-1 sm:gap-2`}>
      <CartSheet>
        <SheetTrigger
          asChild
          className="flex items-center justify-center rounded-full hover:rounded-md bg-accent p-2"
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
      <NavManager />
    </div>
  );
}
