"use client";

import { useTranslations } from "next-intl";

type Props = {
  sellerName: string;
  sellerSubtitle: string;
  sellerProductsCount: string;
  memberSince: string;
  sellerDescription: string;
  sellerRating?: number;
};

export function AboutSeller({
  sellerName,
  sellerSubtitle,
  sellerProductsCount,
  memberSince,
  sellerDescription,
  sellerRating = 5,
}: Props) {
  const t = useTranslations("ProductDetails");

  return (
    <div className="p-6 border rounded-xl bg-background/80 shadow-sm">
      <h3 className="text-lg font-semibold mb-4 text-textColor">
        {t("sellerTitle")}
      </h3>
      <div className="space-y-4">
        <div className="flex items-center space-x-3 p-3 rounded-xl bg-secondary border border-border">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary-700 flex items-center justify-center text-primary-foreground font-bold">
            {sellerName.charAt(0)}
          </div>
          <div>
            <p className="font-medium text-textColor">{sellerName}</p>
            <p className="text-sm text-muted-foreground">{sellerSubtitle}</p>
          </div>
          <div className="ml-auto text-amber-400 flex">
            {Array(sellerRating).fill("★").join("")}
            {Array(5 - sellerRating)
              .fill("☆")
              .join("")}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-xl bg-secondary border border-border">
            <p className="text-sm text-muted-foreground">
              {t("sellerProducts")}
            </p>
            <p className="font-medium text-textColor">{sellerProductsCount}</p>
          </div>
          <div className="p-3 rounded-xl bg-secondary border border-border">
            <p className="text-sm text-muted-foreground">
              {t("sellerMemberSince")}
            </p>
            <p className="font-medium text-textColor">{memberSince}</p>
          </div>
        </div>
        <p className="text-muted-foreground">{sellerDescription}</p>
      </div>
    </div>
  );
}
