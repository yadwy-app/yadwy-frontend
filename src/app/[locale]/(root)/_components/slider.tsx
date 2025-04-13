"use client";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";
import useTextDirection from "~/hooks/useDirection";
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
  const direction = useTextDirection();

  useEffect(() => {
    if (api) {
      api.reInit({
        direction: direction,
      });
    }
  }, [direction, api]);

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
    <div className="relative w-full md:px-0">
      <Carousel
        setApi={setApi}
        className="w-full"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        dir={direction}
      >
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="w-full">
              <div className="overflow-hidden flex w-full items-center justify-center">
                <Image
                  src={slide.imageUrl}
                  alt="hero section's banner"
                  width={1000}
                  height={1000}
                  priority
                  className="h-full w-full object-cover md:h-full"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute md:bottom-2 -bottom-4  left-1/2 flex -translate-x-1/2 transform gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            type="button"
            key={crypto.randomUUID()}
            className={cn(
              "border-none rounded-full h-2 w-2 md:w-4 md:h-4 transition-all bg-primary-700 opacity-50 hover:opacity-70",
              index === current - 1 && "md:w-8 w-4 opacity-100 bg-primary-900",
            )}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
