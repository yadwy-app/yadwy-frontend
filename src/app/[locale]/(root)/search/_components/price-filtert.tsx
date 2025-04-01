// src/app/[locale]/(root)/search/_components/price-filtert.tsx
"use client";

import type React from "react";

type PriceFilterProps = {
  priceRange: [number, number];
  setPriceRange: (newRange: [number, number]) => void;
};

export function PriceFilter({ priceRange, setPriceRange }: PriceFilterProps) {
  const [minPrice, maxPrice] = priceRange;

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = Number(e.target.value);
    setPriceRange([newMin, maxPrice]);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = Number(e.target.value);
    setPriceRange([minPrice, newMax]);
  };

  return (
    <div className="py-4">
      <h3 className="mb-2 font-semibold">Price Range</h3>
      <div className="flex gap-2">
        <input
          type="number"
          value={minPrice}
          onChange={handleMinChange}
          min={0}
          max={maxPrice}
          className="w-full rounded border p-2"
        />
        <input
          type="number"
          value={maxPrice}
          onChange={handleMaxChange}
          min={minPrice}
          max={150}
          className="w-full rounded border p-2"
        />
      </div>
    </div>
  );
}
