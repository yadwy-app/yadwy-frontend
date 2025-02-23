"use client";

import React, { useState } from "react";
import { DualRangeSlider } from "~/components/ui/dual-range";
import { Input } from "~/components/ui/input";

export const PriceFilter = () => {
  const [values, setValues] = useState([0, 100]);

  const handleInputChange = (index: number, newValue: string) => {
    const updatedValues = [...values];
    updatedValues[index] = newValue === "" ? 0 : Number(newValue);
    setValues(updatedValues);
  };

  return (
    <div className="mt-3">
      <h6 className="font-bold text-textColor">Price</h6>
      <div className="my-6">
        <DualRangeSlider
          label={(value) => value}
          value={values}
          onValueChange={setValues}
          min={0}
          max={100}
          step={1}
        />
      </div>
      <div className="flex gap-3 mb-5">
        <Input
          value={values[0]}
          onChange={(e) => handleInputChange(0, e.target.value)}
          className="border-gray-300"
        />
        <Input
          value={values[1]}
          onChange={(e) => handleInputChange(1, e.target.value)}
          className="border-gray-300"
        />
      </div>
      <hr className="border-gray-300" />
    </div>
  );
};
