"use client";

import {
  Section,
  SectionTitle,
  SectionDescription,
} from "~/components/section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useEffect } from "react";
import Category from "../_components/category";
import { useTranslations } from "next-intl";

interface CategoryItem {
  name: string;
  image: string;
}

const categories: CategoryItem[] = [
  { name: "Wood Work", image: "/category/wood.png" },
  { name: "Glass Work", image: "/category/glass.png" },
  { name: "Plants", image: "/category/planet.png" },
  { name: "Glass Work", image: "/category/glass.png" },
  { name: "Wood Work", image: "/category/wood.png" },
  { name: "Glass Work", image: "/category/glass.png" },
  { name: "Plants", image: "/category/planet.png" },
  { name: "Glass Work", image: "/category/glass.png" },
];

export function Categories() {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  const t = useTranslations("HomePage.Categories");

  // Get the current language direction
  const isRtl = t("title") === t.raw("title"); // Check if translation is active
  const direction = isRtl ? "rtl" : "ltr";

  // Reference to the carousel API
  const carouselRef = useRef<any>(null);

  // Update carousel direction when language changes
  useEffect(() => {
    if (carouselRef.current?.emblaApi) {
      carouselRef.current.emblaApi.reInit({
        direction: direction,
      });
    }
  }, [direction]);

  return (
    <Section id="Categories" className="w-full overflow-hidden">
      <SectionTitle className="text-center">{t("title")}</SectionTitle>
      <SectionDescription className="text-center">
        {t("description")}
      </SectionDescription>
      <div className="flex justify-center" dir={direction}>
        <Carousel
          className="w-full max-w-7xl"
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: direction === "rtl" ? "end" : "start", // Adjust alignment for RTL
            loop: true,
            direction: direction, // Set direction explicitly
          }}
          setApi={(api) => {
            carouselRef.current = { emblaApi: api };
          }}
        >
          <CarouselContent className={direction === "rtl" ? "-mr-4" : "-ml-4"}>
            {categories.map((category, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 sm:basis-1/3 w-full"
              >
                <div className="overflow-hidden w-full h-full">
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
