import React from "react";
import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "~/components/ui/sheet";
import { Control } from "./control";
import { BoxProductCart } from "./box-product";
import { ProductsHolder } from "./products-holder";

interface CartProps {
  children: React.ReactNode;
}
const products = [
  {
    id: 1,
    name: "Lefse plants in a white pot",
    price: 70,
    quantity: 2,
    unitPrice: 35,
    image: "/cart/Rectangle 258.png",
  },
  {
    id: 2,
    name: "Another Plant",
    price: 50,
    quantity: 1,
    unitPrice: 50,
    image: "/cart/Rectangle 258.png",
  },
];
export const CartSheet = ({ children }: CartProps) => {
  return (
    <Sheet >
      {children}
      <SheetContent className="p-0 w-100 md:w-auto">
        <SheetHeader className="p-5">
          <SheetTitle className="border-b-2 border-gray-200 pb-2">
            Shopping Cart
          </SheetTitle>
        </SheetHeader>

        <div className="relative h-full p-5 pb-[230px] pe-0 pt-0">
          <div className="flex h-full max-h-[calc(100vh-230px)] flex-col gap-5 overflow-y-auto overflow-x-hidden pe-5">
          <ProductsHolder/>
          </div>
          <Control  />
        </div>
      </SheetContent>
    </Sheet>
  );
};
