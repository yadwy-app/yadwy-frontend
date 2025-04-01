import { useTranslations } from "next-intl";
import React from "react";
import { FaClipboardCheck } from "react-icons/fa6";
import { SectionTitle } from "~/components/section";
import { Link } from "~/i18n/routing";
import AlsoLike from "../_sections/also-like";
import { SummaryOrder } from "../_sections/summary-order";
import { BoxProductCart } from "./_components/box-product";
import { ProductsHolderCart } from "./_components/box-product-cart";
import { ButtonCart } from "./_components/button-cart";
import { ProductsHolder } from "./_components/products-holder";
const page = () => {
  // const products = [
  //   {
  //     id: 1,
  //     name: "Lefse plants in a white pot",
  //     price: 70,
  //     quantity: 2,
  //     unitPrice: 35,
  //     image: "/cart/Rectangle 258.png",
  //   },
  //   {
  //     id: 2,
  //     name: "Another Plant",
  //     price: 50,
  //     quantity: 1,
  //     unitPrice: 50,
  //     image: "/cart/Rectangle 258.png",
  //   },
  // ];
  const t = useTranslations("cartPage");
  return (
    <div className="flex min-h-screen w-full flex-col gap-10 p-5">
      <SectionTitle>{t("title")}</SectionTitle>
      <div className="grid grid-cols-12 gap-5 md:gap-20">
        <div className="col-span-12 flex flex-col gap-5 md:col-span-6">
          <ProductsHolderCart />
        </div>
        <div className="col-span-12 flex flex-col gap-5 md:col-span-6">
          <SummaryOrder />
          <div className="flex flex-col items-center gap-3">
            <ButtonCart href="/billing">
              <FaClipboardCheck />
              Proceed to Checkout
            </ButtonCart>
            <span className="text-textColor">Or</span>
            <Link href={"/"} className="font-semibold text-primary">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
      {/* <AlsoLike /> */}
    </div>
  );
};

export default page;
