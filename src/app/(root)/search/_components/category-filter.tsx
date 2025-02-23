"use client";
import { ChevronsUpDown } from "lucide-react";
import React, { useState } from "react";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";
interface CategoryProps {
  name: string;
  count: number;
}
const CategoryFilter = ({ categories }: { categories: CategoryProps[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const handleCheckboxChange = (categoryName: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((name) => name != categoryName)
        : [...prev, categoryName],
    );
  };

  return (
    <div className="mt-3">
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-2 mb-5">
        <div className="flex items-center justify-between space-x-4">
          <h4 className=" font-bold text-textColor">Categories</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>

        <CollapsibleContent className="space-y-2">
          {categories.map((item, index: number) => (
            <div className="flex items-center space-x-2" key={index}>
              <Checkbox
                id={item.name}
                checked={selectedCategories.includes(item.name)} 
                onCheckedChange={() => handleCheckboxChange(item.name)} 
              />
              <label
                htmlFor={item.name}
                className="flex w-full items-center justify-between text-sm font-medium leading-none peer-disabled:cursor-not-allowed"
              >
                {item.name}
                <span className="text-sm text-textColor">{item.count}</span>
              </label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>
      <hr  className="border-gray-300"/>
      
    </div>
  );
};

export default CategoryFilter;
