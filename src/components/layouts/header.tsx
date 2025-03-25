"use client";

import { useTranslations } from "next-intl";
import Logo from "../logo";
import SearchBar from "../search-bar";
import CartActions from "./cart-actions";

export default function Header() {
  const t = useTranslations("Header");
  const isRtl = t("searchPlaceholder") !== "Search for artwork, plants...";

  return (
    <header
      className="sticky top-0 z-40 bg-background border-b"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4 py-4">
        <div
          className={`flex items-center ${isRtl ? "justify-between flex-row-reverse" : "justify-between"} gap-4`}
        >
          <Logo />
          <SearchBar />
          <CartActions />
        </div>
      </div>
    </header>
  );
}
