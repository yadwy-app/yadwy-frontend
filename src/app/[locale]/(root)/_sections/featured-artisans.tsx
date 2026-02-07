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
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { mockArtisansData } from "~/data";
import useTextDirection from "~/hooks/useDirection";
import ArtisanCard from "../_components/artisan-card";

export function FeaturedArtisans() {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));
  const t = useTranslations("HomePage.FeaturedArtisans");
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
        <SectionDescription>{t("subtitle")}</SectionDescription>
      </SectionHeader>

      <div className="relative" dir={direction}>
        <Carousel
          className="w-full"
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: direction === "rtl" ? "end" : "start",
            loop: true,
            direction: direction,
          }}
          setApi={(api) => {
            carouselRef.current = api;
          }}
        >
          <CarouselContent className="-ms-4">
            {mockArtisansData.map((artisan) => (
              <CarouselItem
                key={artisan.id}
                className="ps-4 basis-1/2 sm:basis-1/3 lg:basis-1/4"
              >
                <ArtisanCard artisan={artisan} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -start-4" />
          <CarouselNext className="hidden md:flex -end-4" />
        </Carousel>
      </div>
    </Section>
  );
}

export default FeaturedArtisans;
