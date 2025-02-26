import React from "react";
import { SectionTitle } from "~/components/section";
import { SummaryOrder } from "../_sections/summary-order";
import Checkout from "./_components/checkout";

const Page = () => {
  return (
    <div className="flex min-h-screen w-full flex-col gap-10 p-5">
      <SectionTitle>Checkout</SectionTitle>
      <div className="grid grid-cols-12 gap-5 md:gap-20">
        <Checkout />
        <div className="col-span-12 flex flex-col gap-5 md:col-span-6">
          <SummaryOrder />
        </div>
      </div>
    </div>
  );
};

export default Page;
