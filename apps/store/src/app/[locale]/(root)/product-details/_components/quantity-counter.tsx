"use client";

import { Minus, Plus } from "lucide-react";
import { Button } from "~/components/ui/button";

type Props = {
  quantity: number;
  increment: () => void;
  decrement: () => void;
};

export const QuantityCounter = ({ quantity, increment, decrement }: Props) => {
  return (
    // <div className="flex w-full md:w-1/2 h-full items-center justify-center rounded-md">
    //   <div className="flex w-full h-full items-center justify-between rounded border-2 border-primary/40 px-2">
    //     <button type="button" className="w-1/3 h-full" onClick={decrement}>
    //       -
    //     </button>
    //     <div className="w-1/3 h-full flex items-center justify-center font-medium">
    //       {quantity}
    //     </div>
    //     <button type="button" className="w-1/3 h-full" onClick={increment}>
    //       +
    //     </button>
    //   </div>

    // </div>
    <div className="flex items-center gap-2">
      <span className="font-bold">Quantity:</span>
      <div className="flex items-center border border-2 rounded-md">
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-none"
          onClick={decrement}
        >
          <Minus className="h-4 w-4" />
          <span className="sr-only">Decrease quantity</span>
        </Button>
        <span className="w-12 text-center"> {quantity}</span>
        <Button
          onClick={increment}
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-none"
        >
          <Plus className="h-4 w-4" />
          <span className="sr-only">Increase quantity</span>
        </Button>
      </div>
    </div>
  );
};
