"use client";

import { Package } from "lucide-react";
import { useTranslations } from "next-intl";
import { ProductCard } from "~/components/product-card";
import { Button } from "~/components/ui/button";
import { mockProductsData } from "~/data";
import { Link } from "~/i18n/routing";

interface CustomizeProductsGridProps {
  filters: {
    category?: string;
    minPrice?: string;
    maxPrice?: string;
    material?: string;
    sort?: string;
    page?: string;
  };
}

export default function CustomizeProductsGrid({
  filters,
}: CustomizeProductsGridProps) {
  const t = useTranslations("CustomizePage");

  // Filter products based on filters
  let filteredProducts = [...mockProductsData];

  // Apply category filter
  if (filters.category) {
    const categoryMap: Record<string, string> = {
      "wood-work": "Wood Work",
      "glass-work": "Glass Work",
      plants: "Plants",
      ceramics: "Ceramics",
      textiles: "Textiles",
    };
    const categoryName = categoryMap[filters.category];
    if (categoryName) {
      filteredProducts = filteredProducts.filter((p) =>
        p.category?.includes(categoryName),
      );
    }
  }

  // Apply price filter
  if (filters.minPrice || filters.maxPrice) {
    const min = filters.minPrice ? Number(filters.minPrice) : 0;
    const max = filters.maxPrice
      ? Number(filters.maxPrice)
      : Number.POSITIVE_INFINITY;
    filteredProducts = filteredProducts.filter(
      (p) => p.price >= min && p.price <= max,
    );
  }

  // Apply sorting
  if (filters.sort) {
    switch (filters.sort) {
      case "price-low":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filteredProducts.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        // For mock data, just reverse the order
        filteredProducts.reverse();
        break;
      default:
        // featured - keep original order
        break;
    }
  }

  // Empty state
  if (filteredProducts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="rounded-full bg-muted p-4 mb-4">
          <Package className="h-8 w-8 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-semibold mb-2">{t("emptyState.title")}</h3>
        <p className="text-muted-foreground max-w-md mb-6">
          {t("emptyState.description")}
        </p>
        <Button asChild>
          <Link href="/products">{t("browseProducts")}</Link>
        </Button>
      </div>
    );
  }

  return (
    <section
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      aria-label="Customizable products"
    >
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </section>
  );
}
