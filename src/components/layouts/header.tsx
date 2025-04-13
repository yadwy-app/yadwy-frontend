"use client";

import Logo from "../logo";
import CartActions from "./cart-actions";
import LocaleSwitcherLangBtn from "./locale-switcher-btn";
import SearchBar from "./search-bar";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="container mx-auto flex items-center justify-between gap-4 py-4">
        <Logo />
        <SearchBar />
        <CartActions className="hidden md:flex" />
        <SearchBar className="block md:hidden static -translate-x-0 -translate-y-0 mt-5 max-w-[300px] m-0" />
        <LocaleSwitcherLangBtn className="p-0 md:p-2 md:hidden" />
      </div>
    </header>
  );
}
