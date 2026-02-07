"use client";

import { PenLine, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "~/components/ui/button";
import { Link } from "~/i18n/routing";

export default function OrderBanner() {
  const t = useTranslations("HomePage.OrderBanner");

  return (
    <div className="relative w-full">
      <div className="border-2 border-primary/30 rounded-xl overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="flex flex-col md:flex-row">
          {/* Content */}
          <div className="relative z-10 flex-1 p-5 md:p-8 flex flex-col gap-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium text-primary">
                  {t("badge")}
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground leading-tight mb-2">
                {t("title")}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[450px]">
                {t("description")}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                asChild
                size="sm"
                className="bg-primary hover:bg-primary/90 text-background px-4 py-2 rounded-lg flex items-center gap-2"
              >
                <Link href="/custom-orders">
                  <PenLine className="w-3.5 h-3.5" />
                  {t("makeOrderButton")}
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="bg-background text-foreground border-border hover:bg-muted"
              >
                <Link href="/how-it-works">{t("moreDetailsButton")}</Link>
              </Button>
            </div>
          </div>

          {/* Image - hidden on mobile */}
          <div className="hidden md:flex md:flex-1 relative min-h-[280px]">
            <div className="absolute inset-0 bg-[url('/banner.svg')] bg-cover bg-center rounded-e-xl" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
