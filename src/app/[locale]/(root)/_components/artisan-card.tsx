"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import { Link } from "~/i18n/routing";

export interface Artisan {
  id: number;
  name: string;
  avatar: string;
  specialty: string;
  productCount: number;
}

interface ArtisanCardProps {
  artisan: Artisan;
}

export function ArtisanCard({ artisan }: ArtisanCardProps) {
  const t = useTranslations("HomePage.FeaturedArtisans");

  return (
    <div className="flex flex-col items-center p-4 bg-background rounded-xl border border-border hover:shadow-md transition-shadow">
      <div className="relative w-16 h-16 mb-3">
        <Image
          src={artisan.avatar}
          alt={artisan.name}
          fill
          className="object-cover rounded-full"
        />
      </div>

      <h4 className="font-semibold text-foreground text-center line-clamp-1">
        {artisan.name}
      </h4>

      <p className="text-sm text-muted-foreground mb-2 text-center line-clamp-1">
        {artisan.specialty}
      </p>

      <p className="text-xs text-muted-foreground mb-3">
        {artisan.productCount} {t("products")}
      </p>

      <Button variant="outline" size="sm" asChild className="w-full">
        <Link href={`/artisan/${artisan.id}`}>{t("viewProducts")}</Link>
      </Button>
    </div>
  );
}

export default ArtisanCard;
