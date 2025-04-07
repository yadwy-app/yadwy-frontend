"use client";

type Props = {
  quantity: number;
  increment: () => void;
  decrement: () => void;
};

export const QuantityCounter = ({ quantity, increment, decrement }: Props) => {
  return (
    <div className="flex gap-3">
      <div className="flex gap-3 rounded-sm border-2 border-gray-300">
        <button type="button" className="px-2 py-1 text-sm" onClick={decrement}>
          -
        </button>
        <div className="px-2 py-1 text-sm">{quantity}</div>
        <button type="button" className="px-2 py-1 text-sm" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};
