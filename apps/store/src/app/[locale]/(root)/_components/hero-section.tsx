"use client";

import { Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Link } from "~/i18n/routing";

export default function HeroSection() {
  const t = useTranslations("HomePage.Hero");

  return (
    <section className="relative w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#f8fafa] to-[#e8f0f0]">
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-start space-y-4 md:space-y-5">
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20 px-3 py-1"
            >
              <Sparkles className="w-3 h-3 me-1.5" />
              <span className="text-xs">{t("badge")}</span>
            </Badge>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              {t("title")}
            </h1>

            <p className="text-sm md:text-base text-muted-foreground max-w-lg mx-auto lg:mx-0">
              {t("subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button asChild size="sm" className="text-background">
                <Link href="/products">{t("exploreProducts")}</Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="/custom-orders">
                  <Sparkles className="w-3.5 h-3.5 me-1.5" />
                  {t("customOrders")}
                </Link>
              </Button>
            </div>
          </div>

          {/* Right content - Product imagery */}
          <div className="flex-1 relative w-full max-w-sm lg:max-w-none">
            <div className="relative aspect-square md:aspect-[4/3] w-full">
              {/* Main image */}
              <div className="absolute inset-4 md:inset-6 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/artworks/p1.png"
                  alt="Handmade product"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-1 -start-1 md:bottom-2 md:start-0 w-16 h-16 md:w-24 md:h-24 rounded-xl overflow-hidden shadow-lg border-2 border-background">
                <Image
                  src="/artworks/p2.png"
                  alt="Handmade product"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute -top-1 -end-1 md:top-2 md:end-0 w-14 h-14 md:w-20 md:h-20 rounded-xl overflow-hidden shadow-lg border-2 border-background">
                <Image
                  src="/artworks/p3.png"
                  alt="Handmade product"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Background decorative circle */}
              <div className="absolute inset-0 -z-10 opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square rounded-full bg-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
