import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "~/redux/store";
import { BoxProductCart } from "./box-product";

export const ProductsHolder = () => {
  const products = useSelector((state: RootState) => state.cart.items);
  // console.log("products", products);
  return (
    <>
      {products.length === 0 ? (
        <p className="w-[343.2px] text-center text-textColor h-full flex justify-center items-center">
          Nothing Products Currently
        </p>
      ) : (
        products.map((product) => (
          <BoxProductCart item={product} key={product.id} />
        ))
      )}
    </>
  );
};
