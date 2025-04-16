"use client";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { toast } from "~/hooks/use-toast";
import { QuantityCounter } from "./quantity-counter";

type CartItemProps = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  unitPrice: number;
  imageCover: string;
};

export default function ButtonAction({ item }: { item: CartItemProps }) {
  const addToCartHandler = () => {
    toast({
      title: `${item.title} added to cart 🛒`,
      description: `You added ${item.quantity} to your cart`,
    });
  };
  const [quantityCounter, setQuantityCounter] = useState(1);
  const incrementQuantity = () => {
    setQuantityCounter(quantityCounter + 1);
  };

  const decrementQuantity = () => {
    if (quantityCounter > 1) {
      setQuantityCounter(quantityCounter - 1);
    }
  };
  return (
    <div className="flex w-full flex-col items-center gap-4 md:flex-row">
      <QuantityCounter
        quantity={quantityCounter}
        increment={incrementQuantity}
        decrement={decrementQuantity}
      />
      <Button
        className="flex w-full gap-4 text-background"
        onClick={addToCartHandler}
      >
        <ShoppingBag className="text-background" />
        Add
      </Button>
      <h3 className="text-secondary-foreground">or</h3>
      <Button className="flex w-full gap-4 text-background">
        <ShoppingCart className="" />
        Make your order
      </Button>
    </div>
  );
}
