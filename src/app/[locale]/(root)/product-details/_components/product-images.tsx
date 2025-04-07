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
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={images[selectedIndex] ?? "/"}
          alt={`Product Image ${selectedIndex + 1}`}
          className="object-contain rounded-md"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 487px"
          placeholder="blur"
          blurDataURL="/"
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
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
