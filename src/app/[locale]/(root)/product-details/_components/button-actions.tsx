"use client";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import { Button } from "~/components/ui/button";
import { toast } from "~/hooks/use-toast";
import { Counter } from "../../cart/_components/counter";

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
      description: `You added ${item.quantity} ${item.quantity > 1 ? "units" : "unit"} to your cart.`,
    });
  };
  return (
    <div className="flex w-full flex-col items-center gap-4 md:flex-row">
      <Counter handleAddCart={addToCartHandler} />
      <div className="flex w-full flex-col items-center gap-2 md:flex-row">
        <Button
          className="flex w-full gap-4 text-background"
          onClick={addToCartHandler}
        >
          <ShoppingBag className="text-background" />
          Add
        </Button>
        <h3 className="text-secondary">or</h3>
        <Button className="flex w-full gap-4 text-background">
          <ShoppingCart className="" />
          Make your order
        </Button>
      </div>
    </div>
  );
}
