"use client";
import { Button } from "~/components/ui/button";
import { Counter } from "../../cart/_components/counter";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { cartAction } from "~/redux/reducers/CartSlice";
import { toast } from "~/hooks/use-toast";
type Props = {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: string;
};
type CartItemProps = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  unitPrice: number;
  imageCover: string;
};
export default function ButtonAction() {
  const dispatch = useDispatch();
  function handleAddCart(item: CartItemProps) {
    dispatch(cartAction.addItems(item));
    toast({
      title: `${item.title} added to cart 🛒`,
      description: `You added ${item.quantity} ${item.quantity > 1 ? "units" : "unit"} to your cart.`,
    });
  }
  return (
    <div className="flex w-full flex-col items-center gap-4 md:flex-row">
      {/* <Counter /> */}
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
