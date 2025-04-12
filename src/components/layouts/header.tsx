"use client";

import Logo from "../logo";
import CartActions from "./cart-actions";
import SearchBar from "./search-bar";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="container mx-auto flex items-center justify-between gap-4 py-4">
        <Logo />
        <SearchBar />
        <CartActions />
      </div>
      <SearchBar className="block md:hidden relative mt-5 max-w-[300px]"/>

    </header>
  );
}
