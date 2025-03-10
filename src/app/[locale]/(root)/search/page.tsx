"use client";

import React, { useState, useEffect, useMemo } from "react";
import CategoryFilter from "./_components/category-filter";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import ProductCard from "../_components/product-card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination";
import { useRouter } from "~/i18n/routing";
import { useSearchParams } from "next/navigation";
import { useDebounce } from "~/hooks/useDebounce";
import { products } from "~/data";
import { PriceFilter } from "./_components/price-filtert";

// Extract unique categories dynamically
// const categories = ["Armani", "Calvin Klein"];

const SearchPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // States
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>("none");
  const [currentPage, setCurrentPage] = useState(1);

  // Debounced Filters
  const debouncedPriceRange = useDebounce(priceRange, 500);
  const debouncedCategories = useDebounce(selectedCategories, 500);
  const debouncedSortBy = useDebounce(sortBy, 500);
  const categories = useMemo(
    () =>
      ["Armani", "Calvin Klein"].map((name) => ({
        name,
        count: products.filter((p) => p.category === name).length,
      })),
    [],
  );
  // Sync state with URL on initial load
  useEffect(() => {
    const urlMinPrice = Number(searchParams.get("minPrice")) || 0;
    const urlMaxPrice = Number(searchParams.get("maxPrice")) || 150;
    const urlCategories = searchParams.get("categories")?.split(",") || [];
    const urlSort = searchParams.get("sort") || "none";

    setPriceRange([urlMinPrice, urlMaxPrice]);
    setSelectedCategories(urlCategories);
    setSortBy(urlSort);
  }, [searchParams]);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (debouncedPriceRange[0] !== 0)
      params.set("minPrice", debouncedPriceRange[0].toString());
    if (debouncedPriceRange[1] !== 150)
      params.set("maxPrice", debouncedPriceRange[1].toString());
    if (debouncedCategories.length > 0)
      params.set("categories", debouncedCategories.join(","));
    if (debouncedSortBy !== "none") params.set("sort", debouncedSortBy);
    router.push(`/search?${params.toString()}`, { scroll: false });
  }, [debouncedPriceRange, debouncedCategories, debouncedSortBy, router]);

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesPrice =
          product.price >= debouncedPriceRange[0] &&
          product.price <= debouncedPriceRange[1];
        const matchesCategory =
          debouncedCategories.length === 0 ||
          debouncedCategories.includes(product.category);
        return matchesPrice && matchesCategory;
      })
      .sort((a, b) =>
        debouncedSortBy === "Most Expensive" ? b.price - a.price : 0,
      );
  }, [products, debouncedPriceRange, debouncedCategories, debouncedSortBy]);

  // Pagination
  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = useMemo(
    () =>
      filteredProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage,
      ),
    [filteredProducts, currentPage],
  );

  return (
    <div className="grid w-full grid-cols-12 gap-10">
      <div className="col-span-3 rounded-sm border border-gray-300 p-5">
        <div className="flex justify-between border-b border-gray-300 pb-3">
          <h6 className="text-2xl font-bold">Filters</h6>
          <button
            className="text-primary"
            onClick={() => {
              setPriceRange([0, 150]);
              setSelectedCategories([]);
              setSortBy("none");
              router.push("/search");
            }}
          >
            Clear All
          </button>
        </div>
        <PriceFilter priceRange={priceRange} setPriceRange={setPriceRange} />
        <CategoryFilter
          categories={categories}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
      </div>

      <div className="col-span-9">
        <div className="mb-5 flex items-end justify-between">
          <div>
            <h6 className="mb-1 text-2xl font-bold">Search Results</h6>
            <div className="font-bold text-green-900">
              {filteredProducts.length}{" "}
              <span className="text-primary">items</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-primary">Sort By:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[100px] border-0 text-start">
                <SelectValue placeholder="none" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="Most Expensive">Most Expensive</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {paginatedProducts.map((product) => (
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

        {/* Pagination */}
        <Pagination className="justify-end mt-16">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                className="bg-primary text-white"
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  className={
                    page === currentPage
                      ? "border border-primary text-primary"
                      : ""
                  }
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                className="bg-primary text-white"
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 1, totalPages))
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default SearchPage;
