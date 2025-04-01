"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { TbShoppingBagPlus } from "react-icons/tb";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardFooter } from "~/components/ui/card";
import { toast } from "~/hooks/use-toast";
import useTextDirection from "~/hooks/useDirection";
import { Link } from "~/i18n/routing";

type Props = {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: number;
};

type CartItemProps = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  unitPrice: number;
  imageCover: string;
};

export default function ProductCard({ id, title, price, image }: Props) {
  const t = useTranslations("ProductCard");
  const dir = useTextDirection();

  function handleAddCart(item: CartItemProps) {
    // TODO: call a mutation in the backend
    toast({
      title: t("addedToCart", { title: item.title }),
      description: t("addedDescription", {
        quantity: item.quantity,
        unit: item.quantity > 1 ? t("units") : t("unit"),
      }),
    });
  }

  return (
    <Card className="w-full border border-gray-200 md:max-w-xs" dir={dir}>
      <Link href={`/product-details/${id}`} className="block">
        <div className="relative w-full h-48">
          <Image
            src={image}
            alt={title}
            width={300}
            height={300}
            className="rounded-t-lg object-cover w-full h-full"
          />
        </div>
      </Link>
      <CardContent className="p-2">
        <h2 className="truncate text-sm font-semibold text-secondary">
          {title}
        </h2>
      </CardContent>
      <CardFooter
        className={`flex items-center ${dir === "rtl" ? "justify-between flex-row-reverse" : "justify-between"} p-2 pt-0`}
      >
        <p className="text-sm font-semibold">${price.toFixed(2)}</p>
        <div className="flex gap-1">
          <Button
            size="sm"
            variant="ghost"
            className="bg-[#eef0f0] text-gray-600"
          >
            <CiHeart className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            className={`gap-1 text-xs text-background py-1 px-2 ${dir === "rtl" ? "flex-row-reverse" : ""}`}
            onClick={() =>
              handleAddCart({
                id,
                title,
                price,
                quantity: 1,
                unitPrice: price,
                imageCover: image,
              })
            }
          >
            <TbShoppingBagPlus className="h-4 w-4" />
            <span className="hidden md:block">{t("add")}</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
