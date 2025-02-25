"use client";
import React, { useState } from "react";
interface ItemProps {
  item: {
    id: number;
    title: string;
    price: number;
    quantity: number;
    unitPrice: number;
    image: string;
  };
}
type CounterProps = {
  handleAddCart: (action: number) => void;
};
export const Counter = ({ handleAddCart }: CounterProps) => {
  const [counter, setCounter] = useState<number>(1);
  function CounterHandle(action: string) {
    setCounter((prev) => {
      if (action === "remove" && prev === 1) {
        return prev;
      }
      const newCounter = action === "add" ? prev + 1 : prev - 1;
      handleAddCart(newCounter); 
      return newCounter;
    });
  }

  return (
    <div className="flex gap-3">
      <div className="flex gap-3 rounded-sm border-2 border-gray-300">
        <button
          className="px-2 py-1 text-sm"
          onClick={() => CounterHandle("remove")}
        >
          -
        </button>
        <div className="px-2 py-1 text-sm">{counter}</div>
        <button
          className="px-2 py-1 text-sm"
          onClick={() => CounterHandle("add")}
        >
          +
        </button>
      </div>
      <button className="text-xs text-gray-500 transition-all hover:text-red-400">
        Remove
      </button>
    </div>
  );
};
