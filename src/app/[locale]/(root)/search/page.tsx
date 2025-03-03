"use client";

import React, { useState, useEffect } from "react";
import CategoryFilter from "./_components/category-filter";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { products } from "~/data";
import ProductCard from "../_components/product-card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination";
import { PriceFilter } from "./_components/price-filtert";
import { useRouter } from "~/i18n/routing";
import { useSearchParams } from "next/navigation";

const SearchPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Filter state
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>("none");

  // Categories with counts (derived from products or static)
  interface CategoryProps {
    name: string;
    count: number;
  }
  const categories: CategoryProps[] = [
    {
      name: "Armani",
      count: products.filter((p) => p.category === "Armani").length,
    },
    {
      name: "Calvin Klein",
      count: products.filter((p) => p.category === "Calvin Klein").length,
    },
  ];

  // Sync state with URL on initial load
  useEffect(() => {
    const urlMinPrice = searchParams.get("minPrice")
      ? Number(searchParams.get("minPrice"))
      : 0;
    const urlMaxPrice = searchParams.get("maxPrice")
      ? Number(searchParams.get("maxPrice"))
      : 100;
    const urlCategories = searchParams.get("categories")?.split(",") || [];
    const urlSort = searchParams.get("sort") || "none";

    setPriceRange([urlMinPrice, urlMaxPrice]);
    setSelectedCategories(urlCategories);
    setSortBy(urlSort);
  }, [searchParams]);

  // Update URL when filters change
  const updateUrl = () => {
    const params = new URLSearchParams();
    if (priceRange[0] !== 0) params.set("minPrice", priceRange[0].toString());
    if (priceRange[1] !== 100) params.set("maxPrice", priceRange[1].toString());
    if (selectedCategories.length > 0)
      params.set("categories", selectedCategories.join(","));
    if (sortBy !== "none") params.set("sort", sortBy);
    router.push(`/search?${params.toString()}`, { scroll: false });
  };

  // Filter and sort products
  const filteredProducts = products
    .filter((product) => {
      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);
      return matchesPrice && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "Most Expensive") return b.price - a.price;
      return 0; // Default: no sorting
    });

  // Pagination (basic example, expand as needed)
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div className="grid w-full grid-cols-12 gap-10">
      <div className="col-span-3 rounded-sm border border-gray-300 p-5">
        <div className="flex justify-between border-b border-gray-300 pb-3">
          <h6 className="text-2xl font-bold">Filters</h6>
          <button
            className="text-primary"
            onClick={() => {
              setPriceRange([0, 100]);
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
          setPriceRange={(values) => {
            setPriceRange(values);
            updateUrl();
          }}
        />
        <CategoryFilter
          categories={categories}
          selectedCategories={selectedCategories}
          setSelectedCategories={(cats) => {
            setSelectedCategories(cats);
            updateUrl();
          }}
        />
      </div>
      <div className="col-span-9">
        <div className="mb-5 flex items-end justify-between">
          <div>
            <h6 className="mb-1 text-2xl font-bold">Search Query</h6>
            <div className="font-bold text-green-900">
              {filteredProducts.length}{" "}
              <span className="text-primary">items</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-primary">Sort By:</span>
            <Select
              value={sortBy}
              onValueChange={(value) => {
                setSortBy(value);
                updateUrl();
              }}
            >
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
        <Pagination className="justify-end mt-16">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                className="bg-primary text-white"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
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
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
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
