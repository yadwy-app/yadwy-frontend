import { Card, CardContent, CardFooter } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { FaStar } from "react-icons/fa";
import { TbShoppingBagPlus } from "react-icons/tb";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";

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
    <Link href={`/product-details/${id}`} className="block">
      <Card className="border border-gray-200 md:max-w-xs w-full">
        <div className="relative w-full aspect-square">
          <Image src={image} alt={title} layout="fill" objectFit="cover" />
        </div>
        <CardContent className="p-3">
          <h2 className="text-sm text-secondary font-semibold truncate">
            {title}
          </h2>
          <div className="flex w-fit h-6 items-center justify-center gap-2 rounded-lg bg-yellow-50 text-text">
            <h3 className="rounded-l-sm bg-[#FEE440] px-1 py-2">
              <FaStar className="w-4 text-background" />
            </h3>
            <span className="px-1 font-semibold text-xs text-[#FEE440]">
              {rating}
            </span>
          </div>
        </CardContent>
        <CardFooter className="p-3 pt-0 flex justify-between items-center">
          <p className="text-sm font-semibold">${price.toFixed(2)}</p>
          <div className="flex gap-1">
            <Button variant="ghost" size="icon" className="p-1">
              <CiHeart className="w-4 h-4" />
            </Button>
            <Button className="gap-1 text-xs p-1.5 text-background">
              <TbShoppingBagPlus className="w-4 h-4" />
              Add
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
