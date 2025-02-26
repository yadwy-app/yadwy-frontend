"use client";

import {
  Section,
  SectionDescription,
  SectionTitle,
} from "~/components/section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import Category from "../_components/category";
import { useTranslations } from "next-intl";
const categories = [
  {
    name: "Wood Work",
    image: "/category/wood.png",
  },
  {
    name: "Glass Work",
    image: "/category/glass.png",
  },
  {
    name: "Plants",
    image: "/category/planet.png",
  },
  {
    name: "Glass Work",
    image: "/category/glass.png",
  },
  {
    name: "Wood Work",
    image: "/category/wood.png",
  },
  {
    name: "Glass Work",
    image: "/category/glass.png",
  },
  {
    name: "Plants",
    image: "/category/planet.png",
  },
  {
    name: "Glass Work",
    image: "/category/glass.png",
  },
];

export function Categories() {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  const t = useTranslations("HomePage.Categories");

  return (
    <Section id="Categories" className="w-full overflow-hidden">
      <SectionTitle>{t("title")}</SectionTitle>
      <SectionDescription>{t("description")}</SectionDescription>
      <div className="flex gap-4">
        <Carousel
          className="w-full"
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          style={{
            maskImage:
              "linear-gradient(to left, transparent 0%, black 10%, black 90%, transparent 95%)",
          }}
        >
          <CarouselContent>
            {categories.map((category, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 lg:basis-1/4 w-full"
              >
                <div className="overflow-hidden w-full">
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
