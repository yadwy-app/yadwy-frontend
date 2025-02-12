import { Button } from "~/components/ui/button";
import { Counter } from "../../_components/cart/counter";
import { ShoppingBag, ShoppingCart } from "lucide-react";

export default function ButtonAction() {
  return (
    <div className="flex w-full flex-col items-center gap-4 md:flex-row">
      <Counter />
      <div className="flex flex-col md:flex-row w-full gap-2 items-center">
        <Button className="flex gap-4 text-background w-full">
          <ShoppingBag className="text-background" />
          Add to cart
        </Button>
        <h3 className="text-secondary">or</h3>
        <Button className="flex gap-4 text-background w-full">
          <ShoppingCart className="" />
          Make your order
        </Button>
      </div>
    </div>
  );
}
