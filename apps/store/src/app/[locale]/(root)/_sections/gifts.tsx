"use client";

import { Gift, Heart, Home, PartyPopper } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Section } from "~/components/section";
import { Link } from "~/i18n/routing";

const giftCategories = [
  {
    key: "forHer" as const,
    icon: Heart,
    image: "/artworks/p1.png",
    productCount: 120,
  },
  {
    key: "forHim" as const,
    icon: Gift,
    image: "/artworks/p2.png",
    productCount: 85,
  },
  {
    key: "forHome" as const,
    icon: Home,
    image: "/artworks/p3.png",
    productCount: 64,
  },
  {
    key: "specialOccasions" as const,
    icon: PartyPopper,
    image: "/artworks/p4.png",
    productCount: 45,
  },
];

export function Gifts() {
  const t = useTranslations("HomePage.Gifts");

  return (
    <Section className="bg-gradient-to-br from-amber-50/50 to-orange-50/30 py-4 md:py-6 rounded-2xl">
      <div className="flex flex-col gap-4">
        {/* Header */}
        <div className="flex flex-col gap-1 px-2">
          <h2 className="text-lg md:text-xl font-semibold text-foreground">
            {t("title")}
          </h2>
          <p className="text-xs text-muted-foreground">{t("subtitle")}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {giftCategories.map((category) => (
            <Link
              key={category.key}
              href={`/products?category=${category.key}`}
              className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="relative w-full aspect-square">
                <Image
                  src={category.image}
                  alt={t(category.key)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Icon badge */}
                <div className="absolute top-2 end-2">
                  <div className="bg-white/90 backdrop-blur-sm p-1.5 rounded-full shadow-sm">
                    <category.icon className="w-3 h-3 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 start-0 end-0 p-2">
                  <h3 className="font-medium text-white text-xs truncate">
                    {t(category.key)}
                  </h3>
                  <p className="text-white/80 text-[10px] hidden sm:block">
                    {category.productCount}+ {t("products")}
                  </p>
                </div>
              </div>
            </Link>
          ))}

          {/* CTA Card */}
          <Link
            href="/products"
            className="group relative overflow-hidden rounded-lg bg-primary hover:bg-primary/90 transition-colors flex items-center justify-center aspect-square p-2"
          >
            <div className="text-center text-background">
              <Gift className="w-5 h-5 mx-auto mb-1 group-hover:scale-110 transition-transform" />
              <p className="font-medium text-[10px] leading-tight">
                {t("shopAllGifts")}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </Section>
  );
}

export default Gifts;
