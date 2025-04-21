"use client";

type Props = {
  quantity: number;
  increment: () => void;
  decrement: () => void;
};

export const QuantityCounter = ({ quantity, increment, decrement }: Props) => {
  return (
    <div className="flex w-full md:w-1/2 h-full items-center justify-center rounded-md">
      <div className="flex w-full h-full items-center justify-between rounded border-2 border-primary/40 px-2">
        <button type="button" className="w-1/3 h-full" onClick={decrement}>
          -
        </button>
        <div className="w-1/3 h-full flex items-center justify-center font-medium">
          {quantity}
        </div>
        <button type="button" className="w-1/3 h-full" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};
