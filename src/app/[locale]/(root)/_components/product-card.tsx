"use client";
import { Card, CardContent, CardFooter } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { FaStar } from "react-icons/fa";
import { TbShoppingBagPlus } from "react-icons/tb";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { toast } from "~/hooks/use-toast";
import { ToastAction } from "~/components/ui/toast";
import { cartAction } from "~/redux/reducers/CartSlice";

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

export default function ProductCard({ ...props }: Props) {
  const dispatch = useDispatch();
  function handleAddCart(item: CartItemProps) {
    dispatch(cartAction.addItems(item));
    toast({
      title: `${item.title} added to cart 🛒`,
      description: `You added ${item.quantity} ${item.quantity > 1 ? "units" : "unit"} to your cart.`,
    });
  }
  return (
    <Card className="w-full border border-gray-200 md:max-w-xs">
      <Link href={`/product-details/${props.id}`} className="block">
        <div className="relative aspect-square w-full">
          <Image
            src={props.image}
            alt={props.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Link>
      <CardContent className="p-3">
        <h2 className="truncate text-sm font-semibold text-secondary">
          {props.title}
        </h2>
        {/* <div className="flex w-fit h-6 items-center justify-center gap-2 rounded-lg bg-yellow-50 text-text">
              <h3 className="rounded-l-sm bg-[#fee440] px-1 py-2">
                <FaStar className="w-4 text-background" />
              </h3>
              <span className="px-1 font-semibold text-xs text-[#FEE440]">
                {rating}
              </span>
            </div> */}
      </CardContent>
      <CardFooter className="flex items-center justify-between p-3 pt-0">
        <p className="text-sm font-semibold">${props.price.toFixed(2)}</p>
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="bg-[#eef0f0] p-1 text-gray-600"
          >
            <CiHeart className="h-4 w-4" />
          </Button>
          <Button
            className="gap-1 p-1.5 text-xs text-background"
            onClick={() =>
              handleAddCart({
                id: props.id,
                title: props.title,
                price: props.price,
                quantity: 1,
                unitPrice: props.price,
                imageCover: props.image,
              })
            }
          >
            <TbShoppingBagPlus className="h-4 w-4" />
            Add to cart
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
