"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel"; // Assuming this is the shadcn Carousel component
import { cn } from "~/lib/utils";

export default function ProductImage({ images }: { images: string[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleThumbClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="relative">
        <div className="h-auto">
          <Image
            src={images[selectedIndex]} // Display the selected image
            alt={`Selected Image ${selectedIndex + 1}`}
            className="w-full h-full rounded-md bg-contain"
            width={487}
            height={487}
          />
        </div>
      </div>

      {/* Thumbnail Carousel */}
      <Carousel className="relative">
        <CarouselContent className="ml-0 flex gap-2">
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="basis-1/4 cursor-pointer pl-0"
              onClick={() => handleThumbClick(index)}
            >
              <div
                className={cn(
                  "p-1",
                  index === selectedIndex
                    ? "border border-primary"
                    : "opacity-50",
                )}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full rounded-md bg-contain"
                  width={100}
                  height={100}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
