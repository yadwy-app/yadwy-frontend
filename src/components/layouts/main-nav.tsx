"use client";

import { Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "~/i18n/routing";
import { cn } from "~/lib/utils";
import CategoryMegaMenu from "./category-mega-menu";

interface MainNavProps {
  className?: string;
}

export default function MainNav({ className }: MainNavProps) {
  const t = useTranslations("Navigation");

  return (
    <nav
      className={cn("flex items-center gap-1", className)}
      aria-label="Main navigation"
    >
      {/* Categories Mega Menu */}
      <CategoryMegaMenu />

      {/* Customize Your Order - Highlighted */}
      <Link
        href="/customize"
        className={cn(
          "flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md",
          "text-primary hover:text-primary/80 hover:bg-primary/10",
          "transition-colors duration-200",
          "focus:outline-none focus:ring-2 focus:ring-primary/20",
        )}
      >
        <Sparkles className="h-4 w-4" />
        {t("customizeYourOrder")}
      </Link>
    </nav>
  );
}
