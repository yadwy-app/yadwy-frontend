import Link from "next/link";
import React from "react";
import { FaClipboardCheck } from "react-icons/fa6";
import { Button } from "~/components/ui/button";
import { ButtonCart } from "./button-cart";

interface ControlProps {
  price: number;
}
export const Control = ({ price }: ControlProps) => {
  return (
    <div className="absolute bottom-0 left-0 flex h-[230px] w-full flex-col gap-5 border-t-2 border-gray-200 p-5">
      <div className="flex justify-between gap-3">
        <div className="flex flex-col items-start">
          <div className="font-semibold">Subtotal</div>
          <div className="text-xs text-gray-500">
            Shipping and taxed calculated at checkout
          </div>
        </div>
        <div className="text-2xl font-bold text-secondary">
          {price ? price : 0}$
        </div>
      </div>
      <ButtonCart href="/cart">
        <FaClipboardCheck />
        Proceed to Checkout
      </ButtonCart>

    </div>
  );
};
