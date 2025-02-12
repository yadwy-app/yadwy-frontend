"use client";
import React, { useState } from "react";
export const Counter = () => {
  const [counter, setCounter] = useState<number>(0);
  function CounterHandle(action: string) {
    setCounter((prev) => {
      if (action === "remove" && prev === 0) {
        return prev;
      }
      return action === "add" ? prev + 1 : prev - 1;
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
      <button className="text-gray-500 text-xs hover:text-red-400 transition-all">Remove</button>
    </div>
  );
};
