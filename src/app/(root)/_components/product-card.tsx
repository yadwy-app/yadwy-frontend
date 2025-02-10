import { Card, CardContent, CardFooter } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { FaStar } from "react-icons/fa";
import { TbShoppingBagPlus } from "react-icons/tb";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
type Props = {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: string;
};

export default function ProductCard({
  id,
  title,
  price,
  image,
  rating,
}: Props) {
  return (
    <Card className="border border-gray-200 w-full">
      <Image
        src={image}
        width={300}
        height={275.35}
        alt={title}
        className="w-full h-[275.35px] object-cover rounded-t-lg"
      />
      <CardContent className="p-4">
        <h2 className="text-sm text-secondary font-semibold mb-3">{title}</h2>
        <div className="flex w-fit h-6 items-center justify-center gap-2 rounded-lg bg-yellow-50 text-text">
          <h3 className="rounded-l-sm bg-[#FEE440] px-1 py-1">
            <FaStar className="w-4 text-background" />
          </h3>
          <span className="px-1 font-semibold text-xs text-[#FEE440]">{rating}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <p className="text-lg font-semibold">${price}</p>
        <div className="inline-flex gap-2">
          <Button variant="ghost" size="icon" className="bg-primary/20">
            <CiHeart />
          </Button>
          <Button className="gap-2 text-background text-xs">
            <TbShoppingBagPlus  />
            Add to cart
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
