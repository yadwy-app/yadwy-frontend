import React from "react";
import { SectionTitle } from "~/components/section";
import { Summary } from "../_components/cart/summary";
import { Search } from "../_components/search";

export const SummaryOrder = () => {
  return (
    <>
      <SectionTitle className="border-b-2 border-gray-200 pb-3">
        Order Summary
      </SectionTitle>
      <Search />
      <Summary />
    </>
  );
};
