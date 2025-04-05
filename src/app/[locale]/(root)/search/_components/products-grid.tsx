"use client";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { ProductCard } from "~/components/product-card";
import { mockProductsData } from "~/data";

export default function ProductGrid() {
  const products = mockProductsData;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          Showing <span className="font-medium text-foreground">1-12</span> of{" "}
          <span className="font-medium text-foreground">16,035</span> products
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-12">
        <Button
          variant="outline"
          size="sm"
          disabled
          aria-label="Go to previous page"
        >
          Previous
        </Button>
        {[1, 2, 3, "...", 10].map((page) => (
          <Button
            key={page}
            variant={page === 1 ? "default" : "outline"}
            size="sm"
            className={cn(
              page === "..." ? "cursor-default pointer-events-none" : "",
              "min-w-9",
            )}
            aria-label={page === "..." ? "More pages" : `Go to page ${page}`}
            aria-current={page === 1 ? "page" : undefined}
          >
            {page}
          </Button>
        ))}
        <Button variant="outline" size="sm" aria-label="Go to next page">
          Next
        </Button>
      </div>
    </div>
  );
}
