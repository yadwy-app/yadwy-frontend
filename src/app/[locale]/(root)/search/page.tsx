"use client";

import { useSearchParams } from "next/navigation";
import React, { useState, useEffect, useMemo } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { mockProductsData } from "~/data";
import { useDebounce } from "~/hooks/useDebounce";
import { useRouter } from "~/i18n/routing";
import ProductCard from "../_components/product-card";
import CategoryFilter from "./_components/category-filter";
import { PriceFilter } from "./_components/price-filtert"; // Assuming this is the correct import

const SearchPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initialize states with default values
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 150]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>("none");
  const [currentPage, setCurrentPage] = useState(1);
  const [isClient, setIsClient] = useState(false);

  // Add useEffect to handle client-side mounting
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Debounced Filters
  const debouncedPriceRange = useDebounce(priceRange, 500);
  const debouncedCategories = useDebounce(selectedCategories, 500);
  const debouncedSortBy = useDebounce(sortBy, 500);

  const categories = useMemo(
    () =>
      ["Armani", "Calvin Klein"].map((name) => ({
        name,
        count: mockProductsData.filter((p) => p.category.includes(name)).length,
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
    return mockProductsData
      .filter((product) => {
        const matchesPrice =
          product.price >= debouncedPriceRange[0] &&
          product.price <= debouncedPriceRange[1];
        const matchesCategory =
          debouncedCategories.length === 0 ||
          product.category.some((cat) => debouncedCategories.includes(cat));
        return matchesPrice && matchesCategory;
      })
      .sort((a, b) =>
        debouncedSortBy === "Most Expensive" ? b.price - a.price : 0,
      );
  }, [debouncedPriceRange, debouncedCategories, debouncedSortBy]);

  // Pagination
  const itemsPerPage = 8;
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
    <div className="mx-auto grid w-full max-w-[1280px] grid-cols-12 gap-10">
      <div className="col-span-3 rounded-sm border border-gray-300 p-5">
        <div className="flex justify-between border-b border-gray-300 pb-3">
          <h6 className="text-2xl font-bold">Filters</h6>
          <button
            type="button"
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
        <PriceFilter
          priceRange={priceRange}
          setPriceRange={(newRange: [number, number]) =>
            setPriceRange(newRange)
          }
        />
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
            <div className="flex gap-2 font-bold text-green-900">
              {filteredProducts.length}
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

        {!isClient ? (
          <div className="grid min-h-[400px] place-items-center">
            <div className="text-lg text-primary">Loading products...</div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
              {paginatedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.name}
                  price={product.price}
                  image={product.images[0] as string}
                  rating={product.rating}
                />
              ))}
            </div>

            <Pagination className="mt-16 justify-end">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    className="bg-primary text-white"
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
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
                  ),
                )}
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
          </>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
