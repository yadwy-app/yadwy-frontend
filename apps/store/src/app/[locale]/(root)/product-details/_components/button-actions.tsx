"use client";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import { useTranslations } from "next-intl";
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
  const t = useTranslations("common");
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
    <div className="flex w-full flex-col gap-4">
      <QuantityCounter
        quantity={quantityCounter}
        increment={incrementQuantity}
        decrement={decrementQuantity}
      />
      <div className="flex flex-col w-full gap-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            className="flex w-full gap-4 text-background md:text-lg"
            onClick={addToCartHandler}
          >
            <ShoppingBag className="text-background" />
            {t("addedToCart")}
          </Button>
          <Button
            variant={"ghost"}
            className="flex w-full gap-4 border md:text-lg"
          >
            <ShoppingCart className="" />
            {t("makeYourOrder")}
          </Button>
        </div>
        <Button
          variant="outline"
          size="lg"
          className="border-dashed border-primary hover:bg-teal-50 md:text-lg"
        >
          {t("customizeOrder")}
        </Button>
      </div>
    </div>
  );
}
