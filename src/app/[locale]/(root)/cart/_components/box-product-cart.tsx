"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "~/redux/store";
import { BoxProductCart } from "./box-product";
import { Link } from "~/i18n/routing";
import { Button } from "~/components/ui/button";

import { useTranslations } from "next-intl";

export const ProductsHolderCart = () => {
  const products = useSelector((state: RootState) => state.cart.items);
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
