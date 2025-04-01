import { SectionTitle } from "~/components/section";
import { Search } from "../_components/search";
import { Summary } from "../cart/_components/summary";

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
