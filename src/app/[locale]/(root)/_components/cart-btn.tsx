'use client'
import React from "react";
import { CartSheet } from "../cart/_components/cart-sheet";
import { SheetTrigger } from "~/components/ui/sheet";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useSelector } from "react-redux";
import { type RootState } from "~/redux/store";

export const CartBtn = () => {
  const qty = useSelector((state: RootState)=> state.cart.quantity)
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
