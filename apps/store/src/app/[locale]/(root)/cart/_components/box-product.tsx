"use client";
import type { Product } from "@yadwy/types";
import Image from "next/image";
import { useState } from "react";
import { getProductCoverImage } from "~/lib/product-utils";

interface ItemProps {
  item: Product;
}
export const BoxProductCart = ({ item }: ItemProps) => {
  const quantity = 1; // TODO: Replace with actual logic to get quantity
  const unitPrice = 100;
  const [counter, setCounter] = useState<number>(quantity);

  function CounterHandle(action: string) {
    setCounter((prev) => {
      if (action === "remove" && prev === 0) {
        return prev;
      }
      return action === "add" ? prev + 1 : prev - 1;
    });
  }
  return (
    <div className="flex justify-between gap-4">
      <div className="flex gap-4">
        <div className="relative h-[100px] w-[100px]">
          <Image
            src={getProductCoverImage(item)}
            fill
            alt={item.title}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <h6 className="text-sm">{item.title}</h6>
          <div className="text-sm font-semibold text-gray-500">
            {quantity}x ${unitPrice}
          </div>
          <div className="flex gap-3">
            <div className="flex gap-3 rounded-sm border-2 border-gray-300">
              <button
                type="button"
                className="px-2 py-1 text-sm"
                onClick={() => CounterHandle("remove")}
              >
                -
              </button>
              <div className="px-2 py-1 text-sm">{counter}</div>
              <button
                type="button"
                className="px-2 py-1 text-sm"
                onClick={() => CounterHandle("add")}
              >
                +
              </button>
            </div>
            <button
              type="button"
              className="text-xs text-gray-500 transition-all hover:text-red-400"
              onClick={() => console.log("remove the item")}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      <div className="text-2xl font-bold text-secondary-foreground">
        {item.price}$
      </div>
    </div>
  );
};
