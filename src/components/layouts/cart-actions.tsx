"use client";

import { ShoppingCart, Heart, User } from "lucide-react";
import { Button } from "~/components/ui/button";
import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";
import { RootState } from "~/redux/store";
import { CartSheet } from "~/app/[locale]/(root)/cart/_components/cart-sheet"; // Ensure this path is correct
import { SheetTrigger } from "~/components/ui/sheet"; // Adjusted import path

export default function CartActions() {
  const t = useTranslations("Header");
  const isRtl = t("searchPlaceholder") !== "Search for artwork, plants...";
  const qty = useSelector((state: RootState) => state.cart.quantity);

  return (
    <div
      className={`flex items-center ${isRtl ? "gap-1 sm:gap-2 flex-row-reverse" : "gap-1 sm:gap-2"
        }`}
    >
      <Button
        variant="ghost"
        size="icon"
        aria-label={t("shoppingCart")}
        className="relative"
      >
        <CartSheet>
          <SheetTrigger className="flex items-center justify-center rounded-full bg-accent p-2">
            <ShoppingCart className="h-5 w-5" />
          </SheetTrigger>
        </CartSheet>
        <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {qty}
        </span>
      </Button>
      <Button variant="ghost" size="icon" aria-label={t("wishlist")}>
        <Heart className="h-5 w-5" />
      </Button>
      <Button variant="ghost" size="icon" aria-label={t("account")}>
        <User className="h-5 w-5" />
      </Button>
    </div>
  );
}
