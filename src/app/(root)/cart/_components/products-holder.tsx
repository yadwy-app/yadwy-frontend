import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "~/redux/store";
import { BoxProductCart } from "./box-product";
const products = [
  {
    id: 1,
    name: "Lefse plants in a white pot",
    price: 70,
    quantity: 2,
    unitPrice: 35,
    image: "/cart/Rectangle 258.png",
  },
  {
    id: 2,
    name: "Another Plant",
    price: 50,
    quantity: 1,
    unitPrice: 50,
    image: "/cart/Rectangle 258.png",
  },
];
export const ProductsHolder = () => {
  const products = useSelector((state: RootState) => state.cart.items);
  // console.log("products", products);
  return (
    <>
      {products.length === 0 ? (
        <p className="w-[343.2px] text-center text-textColor h-full flex justify-center items-center">Nothing Products Currently</p>
      ) : (
        products.map((product) => (
          <BoxProductCart item={product} key={product.id} />
        ))  
      )}
    </>
  );
};
