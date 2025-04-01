"use client";
import { Button } from "~/components/ui/button";
import { Link } from "~/i18n/routing";
import { BoxProductCart } from "./box-product";

import { useTranslations } from "next-intl";
import type { Product } from "~/types";

export const ProductsHolderCart = () => {
  const products: Product[] = []; // TODO: fetch the carts state from the backend
  // console.log("products", products);
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
        <div className="max-w-7xl mx-auto p-4 text-center py-16">
          <h2 className="text-3xl font-bold mb-4">{t("isEmpty.title")}</h2>
          <p className="mb-8">{t("isEmpty.description")}</p>
          <Link href="/search">
            <Button>{t("isEmpty.button")}</Button>
          </Link>
        </div>
      )}
    </>
  );
};
