"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Counter } from "./counter";

interface ItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    unitPrice: number;
    image: string;
  };
}
export const BoxProductCart = ({ item }: ItemProps) => {
  const [price, setPrice] = useState<number>(item.price);
  return (
    <div className="flex justify-between gap-4">
      <div className="flex gap-4">
        <div className="relative h-[100px] w-[100px]">
          <Image src={item.image} fill alt="img" className="object-cover" />
        </div>
        <div className="flex flex-col items-start gap-2">
          <h6 className="text-sm">{item.name}</h6>
          <div className="text-sm font-semibold text-gray-500">
            {item.quantity}x ${item.unitPrice}
          </div>
          <Counter />
        </div>
      </div>
      <div className="text-2xl font-bold text-secondary">{item.price}$</div>
    </div>
  );
};
