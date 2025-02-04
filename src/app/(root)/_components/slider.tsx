"use client";
import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "~/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

interface Props {
  slides: {
    id: number;
    imageUrl: string;
  }[];
}

export function Slider({ slides }: Props) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="px-4 md:px-0 relative w-full">
      <Carousel
        setApi={setApi}
        className="w-full"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="w-full">
              <div className="overflow-hidde w-full flex justify-center items-center">
                <Image
                  src={slide.imageUrl}
                  alt="Hero"
                  width={500}
                  height={500}
                  className="w-full max-w-7xl md:h-full h-56"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Array.from({ length: count }).map((_, index) => (
          <Button
            key={crypto.randomUUID()}
            variant="ghost"
            size="icon"
            className={cn(
              "h-3 w-4",
              index === current - 1
                ? "bg-primary-foreground w-8"
                : "bg-primary",
            )}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
