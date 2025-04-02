"use client";

import { Eye, Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { ProductQuickView } from "./product-quick-view";
import type { Product } from "~/types";

interface ProductCardProps extends Product {}

export function ProductCard({ ...product }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(product.isFavorite || false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  return (
    <div>
      <div className="group group/product-card border rounded-lg overflow-hidden hover:shadow-md transition-all duration-300">
        <div className="relative aspect-square overflow-hidden bg-gray-50">
          <Image
            src="/placeholder.svg?height=300&width=300"
            alt={product.name}
            width={300}
            height={300}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          />

          {/* Quick actions overlay */}
          <div
            className={cn(
              "absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 transition-opacity duration-300",
              "group-hover/product-card:opacity-100",
            )}
          >
            <div className="flex gap-2">
              <Button
                variant="secondary"
                size="icon"
                className="rounded-full h-10 w-10 bg-white hover:bg-white/90"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsQuickViewOpen(true);
                }}
                aria-label="Quick view"
              >
                <Eye className="h-4 w-4" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="rounded-full h-10 w-10 bg-white hover:bg-white/90"
                aria-label="Add to cart"
              >
                <ShoppingCart className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Favorite button */}
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "absolute top-2 right-2 rounded-full h-8 w-8 bg-white/80 hover:bg-white",
              isFavorite ? "text-red-500 hover:text-red-600" : "",
            )}
            onClick={(e) => {
              e.preventDefault();
              setIsFavorite(!isFavorite);
            }}
            aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart
              className={cn("h-4 w-4", isFavorite ? "fill-current" : "")}
            />
          </Button>

          {/* Product badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.isNew && (
              <Badge className="bg-primary hover:bg-primary">New</Badge>
            )}
            {product.originalPrice && <Badge variant="secondary">Sale</Badge>}
          </div>
        </div>

        <div className="p-4">
          <Link
            href={`/product/${product.id}`}
            className="block group-hover:text-primary transition-colors"
          >
            <h3 className="font-medium text-sm mb-1 line-clamp-2">
              {product.name}
            </h3>
          </Link>

          <div className="flex items-center gap-1 mb-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => {
                const filled = i < Math.floor(product.rating);
                const half = !filled && i < Math.floor(product.rating + 0.5);

                return (
                  <svg
                    key={Math.random()}
                    className={cn(
                      "h-3 w-3",
                      filled
                        ? "fill-amber-400 text-amber-400"
                        : "text-muted-foreground",
                      half ? "fill-amber-400/50 text-amber-400" : "",
                    )}
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
                    <title>star</title>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                );
              })}
            </div>
            <span className="text-xs text-muted-foreground">
              ({product.reviewsCount})
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-semibold">${product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            <Button size="sm" className="text-xs h-8 rounded-full px-3">
              Add to cart
            </Button>
          </div>
        </div>
      </div>

      {/* QuickView Modal */}
      {isQuickViewOpen && (
        <ProductQuickView
          productId={product.id}
          open={isQuickViewOpen}
          onOpenChange={() => setIsQuickViewOpen(false)}
        />
      )}
    </div>
  );
}
