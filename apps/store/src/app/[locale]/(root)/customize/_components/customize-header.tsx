"use client";

import { Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CustomizeHeader() {
  const t = useTranslations("CustomizePage");

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Sparkles className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-bold text-foreground">{t("title")}</h1>
      </div>
      <p className="text-sm text-muted-foreground">{t("subtitle")}</p>
    </div>
  );
}
