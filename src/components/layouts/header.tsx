"use client";

import { useTranslations } from "next-intl";
import useTextDirection from "~/hooks/useDirection";
import Logo from "../logo";
import CartActions from "./cart-actions";
import SearchBar from "./search-bar";

export default function Header() {
  const t = useTranslations("Header");
  const dir = useTextDirection();

  return (
    <header className="sticky top-0 z-40 border-b bg-background" dir={dir}>
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-4">
        <Logo />
        <SearchBar />
        <CartActions />
      </div>
    </header>
  );
}
