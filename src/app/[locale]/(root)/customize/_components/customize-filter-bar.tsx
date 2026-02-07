"use client";

import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
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
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { Slider } from "~/components/ui/slider";
import { usePathname, useRouter } from "~/i18n/routing";

const categories = [
  { key: "woodWork", value: "wood-work" },
  { key: "glassWork", value: "glass-work" },
  { key: "plants", value: "plants" },
  { key: "ceramics", value: "ceramics" },
  { key: "textiles", value: "textiles" },
];

const materials = ["Wood", "Glass", "Ceramic", "Metal", "Fabric", "Plant"];

export default function CustomizeFilterBar() {
  const t = useTranslations("FilterBar");
  const tNav = useTranslations("Navigation");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [sortOption, setSortOption] = useState(
    searchParams.get("sort") || "featured",
  );

  const activeCategory = searchParams.get("category");
  const activeMaterial = searchParams.get("material");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");

  const activeFilters: { type: string; value: string; param: string }[] = [];
  if (activeCategory) {
    const cat = categories.find((c) => c.value === activeCategory);
    activeFilters.push({
      type: t("category"),
      value: cat ? tNav(`categoryItems.${cat.key}`) : activeCategory,
      param: "category",
    });
  }
  if (activeMaterial) {
    activeFilters.push({
      type: t("material"),
      value: activeMaterial,
      param: "material",
    });
  }
  if (minPrice || maxPrice) {
    activeFilters.push({
      type: t("price"),
      value: `$${minPrice || 0} - $${maxPrice || 500}`,
      param: "price",
    });
  }

  const updateFilter = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  const removeFilter = (param: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (param === "price") {
      params.delete("minPrice");
      params.delete("maxPrice");
    } else {
      params.delete(param);
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  const clearAllFilters = () => {
    router.push(pathname);
  };

  const handleSortChange = (value: string) => {
    setSortOption(value);
    updateFilter("sort", value);
  };

  return (
    <section className="flex flex-col gap-3" aria-label={t("filters")}>
      {/* Desktop Filter Bar */}
      <div className="hidden md:flex items-center justify-between">
        <div className="flex items-center gap-3">
          <PriceFilter
            minPrice={minPrice ? Number(minPrice) : 0}
            maxPrice={maxPrice ? Number(maxPrice) : 500}
            onApply={(min, max) => {
              const params = new URLSearchParams(searchParams.toString());
              params.set("minPrice", String(min));
              params.set("maxPrice", String(max));
              router.push(`${pathname}?${params.toString()}`);
            }}
          />
          <CategoryFilter
            activeCategory={activeCategory}
            onSelect={(value) => updateFilter("category", value)}
          />
          <MaterialFilter
            activeMaterial={activeMaterial}
            onSelect={(value) => updateFilter("material", value)}
          />
        </div>

        <Select value={sortOption} onValueChange={handleSortChange}>
          <SelectTrigger className="w-[180px]" aria-label={t("sortProducts")}>
            <SelectValue placeholder={t("sortBy")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">{t("sort.featured")}</SelectItem>
            <SelectItem value="newest">{t("sort.newest")}</SelectItem>
            <SelectItem value="price-low">{t("sort.priceLow")}</SelectItem>
            <SelectItem value="price-high">{t("sort.priceHigh")}</SelectItem>
            <SelectItem value="rating">{t("sort.rating")}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Mobile Filter Button and Sort */}
      <div className="flex md:hidden items-center justify-between gap-3">
        <MobileFilterDrawer
          activeCategory={activeCategory}
          activeMaterial={activeMaterial}
          minPrice={minPrice ? Number(minPrice) : 0}
          maxPrice={maxPrice ? Number(maxPrice) : 500}
          onApply={(filters) => {
            const params = new URLSearchParams();
            if (filters.category) params.set("category", filters.category);
            if (filters.material) params.set("material", filters.material);
            if (filters.minPrice)
              params.set("minPrice", String(filters.minPrice));
            if (filters.maxPrice)
              params.set("maxPrice", String(filters.maxPrice));
            if (sortOption) params.set("sort", sortOption);
            router.push(`${pathname}?${params.toString()}`);
          }}
        />

        <Select value={sortOption} onValueChange={handleSortChange}>
          <SelectTrigger className="w-[140px]" aria-label={t("sortProducts")}>
            <SelectValue placeholder={t("sortBy")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">{t("sort.featured")}</SelectItem>
            <SelectItem value="newest">{t("sort.newest")}</SelectItem>
            <SelectItem value="price-low">{t("sort.priceLow")}</SelectItem>
            <SelectItem value="price-high">{t("sort.priceHigh")}</SelectItem>
            <SelectItem value="rating">{t("sort.rating")}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Active Filters */}
      {activeFilters.length > 0 && (
        <output
          className="flex flex-wrap items-center gap-2"
          aria-live="polite"
        >
          <span className="text-sm font-medium">{t("activeFilters")}</span>
          {activeFilters.map((filter) => (
            <Badge
              key={`${filter.type}-${filter.value}`}
              variant="secondary"
              className="flex items-center gap-1 py-1 px-3 rounded-full"
            >
              <span className="text-xs text-muted-foreground">
                {filter.type}:
              </span>
              <span className="text-xs">{filter.value}</span>
              <button
                type="button"
                className="ms-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 rounded-full"
                onClick={() => removeFilter(filter.param)}
                aria-label={t("removeFilter", { type: filter.type })}
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
          <button
            type="button"
            className="text-sm text-primary hover:text-primary/80 font-medium"
            onClick={clearAllFilters}
          >
            {t("clearAll")}
          </button>
        </output>
      )}
    </section>
  );
}

function PriceFilter({
  minPrice,
  maxPrice,
  onApply,
}: {
  minPrice: number;
  maxPrice: number;
  onApply: (min: number, max: number) => void;
}) {
  const t = useTranslations("FilterBar");
  const [priceRange, setPriceRange] = useState<[number, number]>([
    minPrice,
    maxPrice,
  ]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="h-9 gap-1 border-dashed"
          aria-label={t("filterBy", { name: t("price") })}
        >
          {t("price")}
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="start">
        <div className="space-y-4">
          <div className="font-medium">{t("priceRange")}</div>
          <Slider
            defaultValue={[minPrice, maxPrice]}
            min={0}
            max={500}
            step={1}
            value={priceRange}
            onValueChange={(value) => setPriceRange(value as [number, number])}
          />
          <div className="flex items-center justify-between">
            <div className="flex h-9 w-20 rounded-md border border-input bg-background px-3 py-1 text-sm items-center">
              <span className="text-muted-foreground me-1">$</span>
              <input
                type="number"
                className="w-full focus:outline-none bg-transparent"
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([Number(e.target.value), priceRange[1]])
                }
                aria-label={t("minPrice")}
              />
            </div>
            <span className="text-muted-foreground">{t("to")}</span>
            <div className="flex h-9 w-20 rounded-md border border-input bg-background px-3 py-1 text-sm items-center">
              <span className="text-muted-foreground me-1">$</span>
              <input
                type="number"
                className="w-full focus:outline-none bg-transparent"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], Number(e.target.value)])
                }
                aria-label={t("maxPrice")}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              size="sm"
              onClick={() => onApply(priceRange[0], priceRange[1])}
            >
              {t("apply")}
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

function CategoryFilter({
  activeCategory,
  onSelect,
}: {
  activeCategory: string | null;
  onSelect: (value: string | null) => void;
}) {
  const t = useTranslations("FilterBar");
  const tNav = useTranslations("Navigation");

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="h-9 gap-1 border-dashed"
          aria-label={t("filterBy", { name: t("category") })}
        >
          {t("category")}
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56" align="start">
        <div className="space-y-4">
          <div className="font-medium">{t("categories")}</div>
          <div className="space-y-2 max-h-[300px] overflow-auto pe-3">
            {categories.map((category) => (
              <div key={category.key} className="flex items-center gap-2 group">
                <Checkbox
                  id={`category-${category.key}`}
                  checked={activeCategory === category.value}
                  onCheckedChange={(checked) =>
                    onSelect(checked ? category.value : null)
                  }
                  aria-label={tNav(`categoryItems.${category.key}`)}
                />
                <Label
                  htmlFor={`category-${category.key}`}
                  className="text-sm cursor-pointer flex-1 py-1"
                >
                  {tNav(`categoryItems.${category.key}`)}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

function MaterialFilter({
  activeMaterial,
  onSelect,
}: {
  activeMaterial: string | null;
  onSelect: (value: string | null) => void;
}) {
  const t = useTranslations("FilterBar");

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="h-9 gap-1 border-dashed"
          aria-label={t("filterBy", { name: t("material") })}
        >
          {t("material")}
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56" align="start">
        <div className="space-y-4">
          <div className="font-medium">{t("materials")}</div>
          <div className="flex flex-wrap gap-2">
            {materials.map((material) => (
              <Badge
                key={material}
                variant={activeMaterial === material ? "default" : "outline"}
                className="cursor-pointer hover:bg-muted/60 transition-colors"
                onClick={() =>
                  onSelect(activeMaterial === material ? null : material)
                }
              >
                {material}
              </Badge>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

interface MobileFilters {
  category: string | null;
  material: string | null;
  minPrice: number;
  maxPrice: number;
}

function MobileFilterDrawer({
  activeCategory,
  activeMaterial,
  minPrice,
  maxPrice,
  onApply,
}: {
  activeCategory: string | null;
  activeMaterial: string | null;
  minPrice: number;
  maxPrice: number;
  onApply: (filters: MobileFilters) => void;
}) {
  const t = useTranslations("FilterBar");
  const tNav = useTranslations("Navigation");
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState<MobileFilters>({
    category: activeCategory,
    material: activeMaterial,
    minPrice,
    maxPrice,
  });

  const handleApply = () => {
    onApply(filters);
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="flex-1 flex items-center justify-center gap-2"
        >
          <SlidersHorizontal className="h-4 w-4" />
          {t("filters")}
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[80vh]">
        <SheetHeader>
          <SheetTitle className="text-start">{t("filters")}</SheetTitle>
        </SheetHeader>
        <div className="py-4 overflow-y-auto h-[calc(80vh-10rem)]">
          <div className="space-y-6">
            {/* Price */}
            <div className="space-y-3">
              <h3 className="font-medium text-base">{t("price")}</h3>
              <div className="space-y-4 pt-2">
                <Slider
                  value={[filters.minPrice ?? 0, filters.maxPrice ?? 500]}
                  min={0}
                  max={500}
                  step={1}
                  onValueChange={(value) =>
                    setFilters({
                      ...filters,
                      minPrice: value[0] ?? 0,
                      maxPrice: value[1] ?? 500,
                    })
                  }
                />
                <div className="flex items-center justify-between">
                  <div className="flex h-9 w-20 rounded-md border border-input bg-background px-3 py-1 text-sm">
                    <span className="text-muted-foreground me-1">$</span>
                    <input
                      type="number"
                      className="w-full focus:outline-none bg-transparent"
                      value={filters.minPrice}
                      onChange={(e) =>
                        setFilters({
                          ...filters,
                          minPrice: Number(e.target.value),
                        })
                      }
                      aria-label={t("minPrice")}
                    />
                  </div>
                  <span className="text-muted-foreground">{t("to")}</span>
                  <div className="flex h-9 w-20 rounded-md border border-input bg-background px-3 py-1 text-sm">
                    <span className="text-muted-foreground me-1">$</span>
                    <input
                      type="number"
                      className="w-full focus:outline-none bg-transparent"
                      value={filters.maxPrice}
                      onChange={(e) =>
                        setFilters({
                          ...filters,
                          maxPrice: Number(e.target.value),
                        })
                      }
                      aria-label={t("maxPrice")}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="space-y-3">
              <h3 className="font-medium text-base">{t("categories")}</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div
                    key={category.key}
                    className="flex items-center gap-2 group"
                  >
                    <Checkbox
                      id={`mobile-category-${category.key}`}
                      checked={filters.category === category.value}
                      onCheckedChange={(checked) =>
                        setFilters({
                          ...filters,
                          category: checked ? category.value : null,
                        })
                      }
                    />
                    <Label
                      htmlFor={`mobile-category-${category.key}`}
                      className="text-sm cursor-pointer flex-1 py-1"
                    >
                      {tNav(`categoryItems.${category.key}`)}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Materials */}
            <div className="space-y-3">
              <h3 className="font-medium text-base">{t("materials")}</h3>
              <div className="flex flex-wrap gap-2 pt-1">
                {materials.map((material) => (
                  <Badge
                    key={material}
                    variant={
                      filters.material === material ? "default" : "outline"
                    }
                    className="cursor-pointer hover:bg-muted/60 transition-colors"
                    onClick={() =>
                      setFilters({
                        ...filters,
                        material:
                          filters.material === material ? null : material,
                      })
                    }
                  >
                    {material}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
        <SheetFooter className="flex flex-row gap-3 sm:justify-between">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => setOpen(false)}
          >
            {t("cancel")}
          </Button>
          <Button className="flex-1" onClick={handleApply}>
            {t("applyFilters")}
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
