"use client";

import type React from "react";

import { useState } from "react";
import { X, ChevronDown, SlidersHorizontal } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Slider } from "~/components/ui/slider";
import { Checkbox } from "~/components/ui/checkbox";
import { Label } from "~/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetTrigger,
} from "~/components/ui/sheet";

export default function FilterBar() {
  const [activeFilters, setActiveFilters] = useState([
    { type: "Category", value: "Armani" },
    { type: "Price", value: "$15 - $250" },
  ]);

  const [sortOption, setSortOption] = useState("featured");

  const removeFilter = (index: number) => {
    setActiveFilters(activeFilters.filter((_, i) => i !== index));
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
  };

  return (
    <div className="space-y-4">
      {/* Desktop Filter Bar */}
      <div className="hidden md:flex items-center justify-between">
        <div className="flex items-center gap-3">
          <PriceFilter />
          <CategoryFilter />
          <MaterialFilter />
          <RatingFilter />
        </div>

        <Select value={sortOption} onValueChange={setSortOption}>
          <SelectTrigger className="w-[180px]" aria-label="Sort products">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="newest">Newest Arrivals</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Mobile Filter Button and Sort */}
      <div className="flex md:hidden items-center justify-between gap-3">
        <MobileFilterDrawer />

        <Select value={sortOption} onValueChange={setSortOption}>
          <SelectTrigger className="w-[140px]" aria-label="Sort products">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="newest">Newest Arrivals</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Active Filters */}
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium">Active Filters:</span>
          {activeFilters.map((filter, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="flex items-center gap-1 py-1 px-3 rounded-full"
            >
              <span className="text-xs text-muted-foreground">
                {filter.type}:
              </span>
              <span className="text-xs">{filter.value}</span>
              <button
                className="ml-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 rounded-full"
                onClick={() => removeFilter(index)}
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove {filter.type} filter</span>
              </button>
            </Badge>
          ))}
          <button
            className="text-sm text-primary hover:text-primary/80 font-medium"
            onClick={clearAllFilters}
          >
            Clear All
          </button>
        </div>
      )}
    </div>
  );
}

function PriceFilter() {
  const [priceRange, setPriceRange] = useState([15, 250]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="h-9 gap-1 border-dashed">
          Price
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="start">
        <div className="space-y-4">
          <div className="font-medium">Price Range</div>
          <Slider
            defaultValue={[15, 250]}
            min={0}
            max={500}
            step={1}
            value={priceRange}
            onValueChange={setPriceRange}
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
          <div className="flex justify-end">
            <Button size="sm">Apply</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

function CategoryFilter() {
  const categories = [
    { name: "Armani", count: 23, checked: true },
    { name: "Calvin Klein", count: 12, checked: false },
    { name: "Gucci", count: 18, checked: false },
    { name: "Prada", count: 9, checked: false },
    { name: "Versace", count: 15, checked: false },
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="h-9 gap-1 border-dashed">
          Category
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56" align="start">
        <div className="space-y-4">
          <div className="font-medium">Categories</div>
          <div className="space-y-2 max-h-[300px] overflow-auto pr-3">
            {categories.map((category, index) => (
              <div
                key={index}
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
          </div>
          <div className="flex justify-end">
            <Button size="sm">Apply</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

function MaterialFilter() {
  const materials = ["Plants", "Wood", "Glass", "Metal", "Mud"];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="h-9 gap-1 border-dashed">
          Material
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56" align="start">
        <div className="space-y-4">
          <div className="font-medium">Materials</div>
          <div className="flex flex-wrap gap-2">
            {materials.map((material) => (
              <Badge
                key={material}
                variant="outline"
                className="flex items-center gap-1 py-1 px-2 hover:bg-muted/60 transition-colors cursor-pointer"
              >
                {material}
                <X
                  className="h-3 w-3"
                  aria-label={`Remove ${material} filter`}
                />
              </Badge>
            ))}
          </div>
          <div className="flex justify-end">
            <Button size="sm">Apply</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

function RatingFilter() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="h-9 gap-1 border-dashed">
          Rating
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56" align="start">
        <div className="space-y-4">
          <div className="font-medium">Rating</div>
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
                      <svg
                        key={i}
                        className={`h-4 w-4 ${i < rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground"}`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground ml-2">
                    & Up
                  </span>
                </Label>
              </div>
            ))}
          </div>
          <div className="flex justify-end">
            <Button size="sm">Apply</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

function MobileFilterDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="flex-1 flex items-center justify-center gap-2"
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filters
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[80vh]">
        <SheetHeader>
          <SheetTitle className="text-left">Filters</SheetTitle>
        </SheetHeader>
        <div className="py-4 overflow-y-auto h-[calc(80vh-10rem)]">
          <div className="space-y-6">
            <FilterSection title="Price">
              <div className="space-y-4 pt-2">
                <Slider defaultValue={[15, 250]} min={0} max={500} step={1} />
                <div className="flex items-center justify-between">
                  <div className="flex h-9 w-20 rounded-md border border-input bg-background px-3 py-1 text-sm">
                    <span className="text-muted-foreground mr-1">$</span>
                    <input
                      type="number"
                      className="w-full focus:outline-none bg-transparent"
                      defaultValue={15}
                      aria-label="Minimum price"
                    />
                  </div>
                  <span className="text-muted-foreground">to</span>
                  <div className="flex h-9 w-20 rounded-md border border-input bg-background px-3 py-1 text-sm">
                    <span className="text-muted-foreground mr-1">$</span>
                    <input
                      type="number"
                      className="w-full focus:outline-none bg-transparent"
                      defaultValue={250}
                      aria-label="Maximum price"
                    />
                  </div>
                </div>
              </div>
            </FilterSection>

            <FilterSection title="Categories">
              <div className="space-y-2">
                {[
                  { name: "Armani", count: 23, checked: true },
                  { name: "Calvin Klein", count: 12, checked: false },
                  { name: "Gucci", count: 18, checked: false },
                  { name: "Prada", count: 9, checked: false },
                  { name: "Versace", count: 15, checked: false },
                ].map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2 flex-1">
                      <Checkbox
                        id={`mobile-category-${index}`}
                        defaultChecked={category.checked}
                        aria-label={`Filter by ${category.name}`}
                      />
                      <Label
                        htmlFor={`mobile-category-${index}`}
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
              </div>
            </FilterSection>

            <FilterSection title="Materials">
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
            </FilterSection>

            <FilterSection title="Rating">
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center gap-2 group">
                    <Checkbox
                      id={`mobile-rating-${rating}`}
                      aria-label={`${rating} stars and above`}
                    />
                    <Label
                      htmlFor={`mobile-rating-${rating}`}
                      className="flex items-center cursor-pointer py-1"
                    >
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            key={i}
                            className={`h-4 w-4 ${i < rating
                                ? "fill-amber-400 text-amber-400"
                                : "text-muted-foreground"
                              }`}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground ml-2">
                        & Up
                      </span>
                    </Label>
                  </div>
                ))}
              </div>
            </FilterSection>
          </div>
        </div>
        <SheetFooter className="flex flex-row gap-3 sm:justify-between">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button className="flex-1" onClick={() => setOpen(false)}>
            Apply Filters
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
}

function FilterSection({ title, children }: FilterSectionProps) {
  return (
    <div className="space-y-3">
      <h3 className="font-medium text-base">{title}</h3>
      {children}
    </div>
  );
}
