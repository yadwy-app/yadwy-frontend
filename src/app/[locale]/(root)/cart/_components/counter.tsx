"use client";
import React, { useState, useEffect } from "react";

type CounterProps = {
  handleAddCart: (quantity: number) => void;
};

export const Counter = ({ handleAddCart }: CounterProps) => {
  const [counter, setCounter] = useState<number>(1);

  function CounterHandle(action: "add" | "remove") {
    setCounter((prev) => {
      if (action === "remove" && prev === 1) {
        return prev;
      }
      return action === "add" ? prev + 1 : prev - 1;
    });
  }

  useEffect(() => {
    handleAddCart(counter);
  }, [counter, handleAddCart]);

  return (
    <div className="flex gap-3">
      <div className="flex gap-3 rounded-sm border-2 border-gray-300">
        <button
          className="px-2 py-1 text-sm"
          onClick={() => CounterHandle("remove")}
          disabled={counter === 1} 
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
      <button
        className="text-xs text-gray-500 transition-all hover:text-red-400"
        onClick={() => setCounter(1)} 
      >
        Remove
      </button>
    </div>
  );
};
