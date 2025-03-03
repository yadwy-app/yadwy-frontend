"use client";

import React from "react";
import { DualRangeSlider } from "~/components/ui/dual-range";
import { Input } from "~/components/ui/input";

interface PriceFilterProps {
  priceRange: number[] | undefined; // Allow undefined
  setPriceRange: (values: number[]) => void;
}

export const PriceFilter = ({
  priceRange,
  setPriceRange,
}: PriceFilterProps) => {
  // Use a fallback value if priceRange is undefined
  const safePriceRange = priceRange || [0, 100];

  const handleInputChange = (index: number, newValue: string) => {
    const updatedValues = [...safePriceRange];
    updatedValues[index] = newValue === "" ? 0 : Number(newValue);
    setPriceRange(updatedValues);
  };

  return (
    <div className="mt-3">
      <h6 className="font-bold text-textColor">Price</h6>
      <div className="my-6">
        <DualRangeSlider
          label={(value) => `$${value}`}
          value={safePriceRange}
          onValueChange={setPriceRange}
          min={0}
          max={100}
          step={1}
        />
      </div>
      <div className="flex gap-3 mb-5">
        <Input
          value={safePriceRange[0]}
          onChange={(e) => handleInputChange(0, e.target.value)}
          className="border-gray-300"
        />
        <Input
          value={safePriceRange[1]}
          onChange={(e) => handleInputChange(1, e.target.value)}
          className="border-gray-300"
        />
      </div>
      <hr className="border-gray-300" />
    </div>
  );
};
