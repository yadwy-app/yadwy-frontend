"use client";

import { useTranslations } from "next-intl";

interface Props {
  features: string[];
}

export function ProductOverview({ features }: Props) {
  const t = useTranslations("ProductDetails");

  return (
    <div className="p-6 border rounded-xl bg-background/80 shadow-sm">
      <h3 className="text-lg font-semibold mb-4 text-textColor">
        {t("featuresTitle")}
      </h3>
      <ul className="space-y-3 list-none pl-0">
        {features.map((feature) => (
          <li key={feature} className="flex items-center space-x-2">
            <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              ✓
            </div>
            <span className="text-textColor">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
