"use client";

import { Heart, Minus, Plus, ShoppingBag, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { cn } from "~/lib/utils";

interface ProductQuickViewProps {
  productId: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProductQuickView({
  productId: _,
  open,
  onOpenChange,
}: ProductQuickViewProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("white");
  const [selectedSize, setSelectedSize] = useState("m");
  const [isFavorite, setIsFavorite] = useState(false);

  // In a real app, you would fetch product data based on productId
  const product = {
    name: "Lefie plants in a white pot",
    description:
      "Beautiful indoor plant perfect for home or office decoration. Low maintenance and air purifying.",
    price: 35,
    originalPrice: 45,
    rating: 4.5,
    reviews: 28,
    colors: [
      { name: "White", value: "white" },
      { name: "Black", value: "black" },
      { name: "Terracotta", value: "terracotta" },
    ],
    sizes: [
      { name: "Small", value: "s" },
      { name: "Medium", value: "m" },
      { name: "Large", value: "l" },
    ],
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm max-h-[90vh] md:max-w-none md:w-[900px] md:aspect-[2/1] p-0 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-auto">
          {/* Product Image */}
          <div className="relative aspect-square bg-gray-50">
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt={product.name}
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Product Details */}
          <div className="p-6 space-y-4 md:max-h-full md:overflow-auto">
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold">
                {product.name}
              </DialogTitle>
              <DialogDescription className="flex items-center gap-2 pt-1">
                <span className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={Math.random()}
                      className={cn(
                        "h-4 w-4",
                        i < Math.floor(product.rating)
                          ? "fill-amber-400 text-amber-400"
                          : "text-muted-foreground",
                      )}
                    />
                  ))}
                </span>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </DialogDescription>
            </DialogHeader>

            <div className="flex items-center gap-2">
              <span className="text-2xl font-semibold">${product.price}</span>
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
              {product.originalPrice && (
                <Badge className="bg-green-600 hover:bg-green-700 ml-2">
                  Save ${product.originalPrice - product.price}
                </Badge>
              )}
            </div>

            <p className="text-muted-foreground">{product.description}</p>

            <div className="space-y-4 pt-2">
              {/* Color Selection */}
              <div className="space-y-2">
                <Label className="text-base">Color</Label>
                <RadioGroup
                  value={selectedColor}
                  onValueChange={setSelectedColor}
                  className="flex items-center gap-2"
                >
                  {product.colors.map((color) => (
                    <div
                      key={color.value}
                      className="flex items-center space-x-2"
                    >
                      <RadioGroupItem
                        value={color.value}
                        id={`color-${color.value}`}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={`color-${color.value}`}
                        className="border rounded-md px-3 py-2 cursor-pointer flex items-center gap-2 peer-data-[state=checked]:bg-sky-200 peer-data-[state=checked]:border-sky-500"
                      >
                        {color.name}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Size Selection */}
              <div className="space-y-2">
                <Label className="text-base">Size</Label>
                <RadioGroup
                  value={selectedSize}
                  onValueChange={setSelectedSize}
                  className="flex items-center gap-2"
                >
                  {product.sizes.map((size) => (
                    <div
                      key={size.value}
                      className="flex items-center space-x-2"
                    >
                      <RadioGroupItem
                        value={size.value}
                        id={`size-${size.value}`}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={`size-${size.value}`}
                        className="border rounded-md px-3 py-2 cursor-pointer flex items-center gap-2 peer-data-[state=checked]:bg-sky-200 peer-data-[state=checked]:border-sky-500"
                      >
                        {size.name.charAt(0).toUpperCase()}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Quantity */}
              <div className="space-y-2">
                <Label className="text-base">Quantity</Label>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <div className="w-12 text-center">{quantity}</div>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={incrementQuantity}
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button className="grow gap-2" size="lg">
                <ShoppingBag className="h-5 w-5" />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="lg"
                className={cn(
                  "gap-2",
                  isFavorite ? "text-red-500 hover:text-red-600" : "",
                )}
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart
                  className={cn("h-5 w-5", isFavorite ? "fill-current" : "")}
                />
                {isFavorite ? "Saved" : "Save"}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
