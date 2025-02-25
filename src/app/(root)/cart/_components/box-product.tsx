"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Counter } from "./counter";
import { useDispatch } from "react-redux";
import { cartAction } from "~/redux/reducers/CartSlice";
import { ToastAction } from "~/components/ui/toast";
import { toast } from "~/hooks/use-toast";

interface ItemProps {
  item: {
    id: number;
    title: string;
    price: number;
    quantity: number;
    unitPrice: number;
    imageCover: string;
  };
}
export const BoxProductCart = ({ item }: ItemProps) => {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState<number>(item.quantity);

  useEffect(() => {
    dispatch(cartAction.updateItemQuantity({ id: item.id, quantity: counter }));
  }, [counter, dispatch, item.id]);

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
            src={`/artworks/planets.png`}
            fill
            alt={item.title}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <h6 className="text-sm">{item.title}</h6>
          <div className="text-sm font-semibold text-gray-500">
            {item.quantity}x ${item.unitPrice}
          </div>
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
          </div>{" "}
        </div>
      </div>
      <div className="text-2xl font-bold text-secondary">{item.price}$</div>
    </div>
  );
};
