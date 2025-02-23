import React from "react";
import { PriceFilter } from "./_components/price-filtert";
import CategoryFilter from "./_components/category-filter";
import SearchMaterials from "./_components/search-materials";
import RatingFilter from "./_components/rating-filter";
import { Select } from "@radix-ui/react-select";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { products } from "~/data";
import ProductCard from "../_components/product-card";

const SearchPage = () => {
  interface CategoryProps {
    name: string;
    count: number;
  }
  const categories: CategoryProps[] = [
    { name: "Armani", count: 23 },
    { name: "Calvin Klein", count: 12 },
  ];

  return (
    <div className="grid w-full grid-cols-12 gap-10">
      <div className="col-span-3 rounded-sm border border-gray-300 p-5">
        <div className="flex justify-between border-b border-gray-300 pb-3">
          <h6 className="text-2xl font-bold">Filters</h6>
          <button className="text-primary">Clear All</button>
        </div>
        <PriceFilter />
        <CategoryFilter categories={categories} />
        {/* <SearchMaterials/> */}
        <RatingFilter />
      </div>
      <div className="col-span-9">
        <div className="flex items-end justify-between mb-5">
          <div>
            <h6 className="mb-1 text-2xl font-bold">Search Query</h6>
            <div className="font-bold text-green-900">
              18,025 <span className="text-primary">items</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-primary">Sort By:</span>
            <Select>
              <SelectTrigger className="w-[100px] border-0 text-start">
                <SelectValue placeholder="none" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Most Expensive">Most Expensive</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.name}
              price={product.price}
              image={product.image}
              rating={product.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
