"use client";
import { Button } from "~/components/ui/button";
import { Link } from "~/i18n/routing";
import { BoxProductCart } from "./box-product";

import type { Product } from "@yadwy/types";
import { ShoppingCart } from "lucide-react";
import { useTranslations } from "next-intl";

export const ProductsHolderCart = () => {
  const products: Product[] = []; // TODO: fetch the carts state from the backend
  const t = useTranslations("cartPage.products");
  return (
    <>
      {products.length ? (
        <div className="flex flex-col gap-5">
          {products.map((product) => (
            <BoxProductCart item={product} key={product.id} />
          ))}
        </div>
      ) : (
        <div className="p-4 py-16 flex flex-col items-center">
          <div className="p-4 text-muted-foreground mb-6 rounded-lg">
            <ShoppingCart size={100} strokeWidth={1} />
          </div>
          <h2 className="text-lg font-bold mb-1">{t("isEmpty.title")}</h2>
          <p className="mb-8">{t("isEmpty.description")}</p>
          <Link href="/search">
            <Button>{t("isEmpty.button")}</Button>
          </Link>
        </div>
      )}
    </>
  );
};
