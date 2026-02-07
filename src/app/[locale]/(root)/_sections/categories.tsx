"use client";

import Autoplay from "embla-carousel-autoplay";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import {
  Section,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from "~/components/section";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";
import useTextDirection from "~/hooks/useDirection";
import Category from "../_components/category";

interface CategoryItem {
  name: string;
  image: string;
}

const categories: CategoryItem[] = [
  { name: "Wood Work 1", image: "/category/wood.jpeg" },
  { name: "Glass Work 1", image: "/category/glass.jpeg" },
  { name: "Plants 1", image: "/category/plant.jpeg" },
  { name: "Glass Work 2", image: "/category/glass.jpeg" },
  { name: "Wood Work 2", image: "/category/wood.jpeg" },
  { name: "Glass Work 3", image: "/category/glass.jpeg" },
  { name: "Plants 2", image: "/category/plant.jpeg" },
  { name: "Glass Work 4", image: "/category/glass.jpeg" },
];

export function Categories() {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  const t = useTranslations("HomePage.Categories");
  const direction = useTextDirection();

  const carouselRef = useRef<CarouselApi>(null);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.reInit({
        direction: direction,
      });
    }
  }, [direction]);

  return (
    <Section>
      <SectionHeader>
        <SectionTitle>{t("title")}</SectionTitle>
        <SectionDescription>{t("description")}</SectionDescription>
      </SectionHeader>
      <div className="flex justify-center" dir={direction}>
        <Carousel
          className="w-full"
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: direction === "rtl" ? "end" : "start", // Adjust alignment for RTL
            loop: true,
            direction: direction, // Set direction explicitly
          }}
          setApi={(api) => {
            carouselRef.current = api;
          }}
        >
          <CarouselContent className={"-me-4"}>
            {categories.map((category) => (
              <CarouselItem
                key={category.name}
                className="basis-1/2 sm:basis-1/3 lg:basis-1/4 w-full"
              >
                <div className="w-full h-full">
                  <Category name={category.name} image={category.image} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </Section>
  );
}

export default Categories;
