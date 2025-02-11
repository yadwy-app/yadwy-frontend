import React from "react";
import { SectionTitle } from "~/components/section";
import { BoxProductCart } from "../_components/cart/box-product";
import { Search } from "../_components/search";
import { Summary } from "../_components/cart/summary";
import { SummaryOrder } from "../_sections/summary-order";
import { ButtonCart } from "../_components/cart/button-cart";
import { FaClipboardCheck } from "react-icons/fa6";
import Link from "next/link";
import AlsoLike from "../_sections/also-like";

const page = () => {
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
  return (
    <div className="flex min-h-screen w-full flex-col gap-10 p-5">
      <SectionTitle>Shopping Cart</SectionTitle>
      <div className="grid grid-cols-12 gap-5 md:gap-20">
        <div className="col-span-12 flex flex-col gap-5 md:col-span-6">
          {products.map((item) => (
            <div key={item.id}>
              <BoxProductCart item={item} />
              <hr className="mt-5 border-gray-300" />
            </div>
          ))}
        </div>
        <div className="col-span-12 flex flex-col gap-5 md:col-span-6">
          <SummaryOrder />
          <div className="flex flex-col gap-3 items-center">
            <ButtonCart href="/billing-address">
              <FaClipboardCheck />
              Proceed to Checkout
            </ButtonCart>
            <span className="text-textColor">Or</span>
            <Link href={'/'} className="text-primary font-semibold">Continue Shopping</Link>
          </div>
        </div>
      </div>
      <AlsoLike/>
    </div>
  );
};

export default page;
