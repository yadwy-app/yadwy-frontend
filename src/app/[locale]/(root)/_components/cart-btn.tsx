"use client";
import { MdOutlineShoppingBag } from "react-icons/md";
import { SheetTrigger } from "~/components/ui/sheet";
import { CartSheet } from "../cart/_components/cart-sheet";

export const CartBtn = () => {
  const qty = 0; // TODO: fetch the state of the cart from the backend
  return (
    <div className="relative">
      <div className="absolute right-[0px] top-[-10px] flex h-[16px] w-[16px] items-center justify-center rounded-full bg-red-500 p-[2px] text-[9px] font-bold text-white">
        {qty}
      </div>
      <CartSheet>
        <SheetTrigger className="w flex items-center justify-center rounded-full bg-accent p-2">
          <MdOutlineShoppingBag className="text-1xl" />
        </SheetTrigger>
      </CartSheet>
    </div>
  );
};
