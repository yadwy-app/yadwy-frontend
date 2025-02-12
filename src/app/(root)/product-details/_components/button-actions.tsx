import { Button } from "~/components/ui/button";
import { Counter } from "../../cart/_components/counter";
import { ShoppingBag, ShoppingCart } from "lucide-react";

export default function ButtonAction() {
  return (
    <div className="flex w-full flex-col items-center gap-4 md:flex-row">
      <Counter />
      <div className="flex w-full flex-col items-center gap-2 md:flex-row">
        <Button className="flex w-full gap-4 text-background">
          <ShoppingBag className="text-background" />
          Add to cart
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
