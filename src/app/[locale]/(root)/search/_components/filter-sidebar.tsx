"use client";

import type React from "react";

import { ChevronDown, ChevronUp, Star, X } from "lucide-react";
import { useState } from "react";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Slider } from "~/components/ui/slider";
import { cn } from "~/lib/utils";

export default function FilterSidebar() {
  const [priceRange, setPriceRange] = useState<[number, number]>([15, 250]);
  const [expandedSections, setExpandedSections] = useState({
    price: true,
    categories: true,
    materials: true,
    rating: true,
  });

  const toggleSection = (section: string) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section as keyof typeof expandedSections],
    });
  };

  return (
    <div className="sticky top-24 space-y-6 pb-10">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-lg">Filters</h2>
        <Button
          variant="ghost"
          size="sm"
          className="text-sm text-muted-foreground h-8"
        >
          Clear All
        </Button>
      </div>

      {/* Price Filter */}
      <FilterSection
        title="Price"
        isExpanded={expandedSections.price}
        onToggle={() => toggleSection("price")}
      >
        <div className="space-y-4 pt-2">
          <Slider
            defaultValue={[15, 250]}
            min={0}
            max={500}
            step={1}
            value={priceRange}
            onValueChange={(value) => setPriceRange(value as [number, number])}
          />
          <div className="flex items-center justify-between">
            <div className="flex h-9 w-20 rounded-md border border-input bg-background px-3 py-1 text-sm">
              <span className="text-muted-foreground mr-1">$</span>
              <input
                type="number"
                className="w-full focus:outline-none bg-transparent"
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([
                    Number.parseInt(e.target.value),
                    priceRange[1],
                  ])
                }
                aria-label="Minimum price"
              />
            </div>
            <span className="text-muted-foreground">to</span>
            <div className="flex h-9 w-20 rounded-md border border-input bg-background px-3 py-1 text-sm">
              <span className="text-muted-foreground mr-1">$</span>
              <input
                type="number"
                className="w-full focus:outline-none bg-transparent"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([
                    priceRange[0],
                    Number.parseInt(e.target.value),
                  ])
                }
                aria-label="Maximum price"
              />
            </div>
          </div>
        </div>
      </FilterSection>

      {/* Categories Filter */}
      <FilterSection
        title="Categories"
        isExpanded={expandedSections.categories}
        onToggle={() => toggleSection("categories")}
      >
        <div className="space-y-2">
          {[
            { name: "Armani", count: 23, checked: true },
            { name: "Calvin Klein", count: 12, checked: false },
            { name: "Gucci", count: 18, checked: false },
            { name: "Prada", count: 9, checked: false },
            { name: "Versace", count: 15, checked: false },
          ].map((category, index) => (
            <div
              key={category.name}
              className="flex items-center justify-between group"
            >
              <div className="flex items-center gap-2 flex-1">
                <Checkbox
                  id={`category-${index}`}
                  defaultChecked={category.checked}
                  aria-label={`Filter by ${category.name}`}
                />
                <Label
                  htmlFor={`category-${index}`}
                  className="text-sm cursor-pointer flex-1 py-1"
                >
                  {category.name}
                </Label>
              </div>
              <span className="text-xs text-muted-foreground">
                {category.count}
              </span>
            </div>
          ))}
          <Button
            variant="ghost"
            size="sm"
            className="mt-1 text-sm text-primary h-8 px-2"
          >
            Show more
          </Button>
        </div>
      </FilterSection>

      {/* Materials Filter */}
      <FilterSection
        title="Materials"
        isExpanded={expandedSections.materials}
        onToggle={() => toggleSection("materials")}
      >
        <div className="space-y-3">
          <Input
            placeholder="Search for Materials"
            className="text-sm h-9"
            aria-label="Search materials"
          />
          <div className="flex flex-wrap gap-2 pt-1">
            {["Plants", "Wood", "Glass", "Metal", "Mud"].map((material) => (
              <Badge
                key={material}
                variant="outline"
                className="flex items-center gap-1 py-1 px-2 hover:bg-muted/60 transition-colors"
              >
                {material}
                <X
                  className="h-3 w-3 cursor-pointer"
                  aria-label={`Remove ${material} filter`}
                />
              </Badge>
            ))}
          </div>
        </div>
      </FilterSection>

      {/* Rating Filter */}
      <FilterSection
        title="Rating"
        isExpanded={expandedSections.rating}
        onToggle={() => toggleSection("rating")}
      >
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center gap-2 group">
              <Checkbox
                id={`rating-${rating}`}
                aria-label={`${rating} stars and above`}
              />
              <Label
                htmlFor={`rating-${rating}`}
                className="flex items-center cursor-pointer py-1"
              >
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i * rating}
                      className={`h-4 w-4 ${i < rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground"}`}
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground ml-2">& Up</span>
              </Label>
            </div>
          ))}
        </div>
      </FilterSection>
    </div>
  );
}

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
}

function FilterSection({
  title,
  children,
  isExpanded,
  onToggle,
}: FilterSectionProps) {
  return (
    <div className="border-b pb-4">
      <button
        type="button"
        className="flex items-center justify-between w-full py-2 text-left font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
        onClick={onToggle}
        aria-expanded={isExpanded}
        aria-controls={`section-${title}`}
      >
        {title}
        {isExpanded ? (
          <ChevronUp className="h-4 w-4 text-muted-foreground" />
        ) : (
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        )}
      </button>
      <div
        id={`section-${title}`}
        className={cn(
          "overflow-hidden transition-all duration-200",
          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        {children}
      </div>
    </div>
  );
}
