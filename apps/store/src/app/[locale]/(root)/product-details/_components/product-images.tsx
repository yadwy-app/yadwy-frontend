"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";
import { cn } from "~/lib/utils";

export default function ProductImage({ images }: { images: string[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleThumbClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className="flex flex-col gap-2 w-full md:max-w-[487px]">
      <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
        <Image
          src={images[selectedIndex] ?? "/placeholder.svg"}
          alt={`Product Image ${selectedIndex + 1}`}
          className="object-cover rounded-md border border-border"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 487px"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2YzZjRmNiIvPjwvc3ZnPg=="
          loading="eager"
        />
      </div>
      <Carousel className="relative">
        <CarouselContent className="ml-0 flex gap-2">
          {images.map((image, index) => (
            <CarouselItem
              key={image}
              className="basis-1/4 cursor-pointer pl-0"
              onClick={() => handleThumbClick(index)}
            >
              <div
                className={cn(
                  "p-1",
                  index === selectedIndex
                    ? "border border-primary rounded-md"
                    : "opacity-50",
                )}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full rounded-md bg-contain"
                  width={100}
                  height={100}
                  loading={index < 4 ? "eager" : "lazy"}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
