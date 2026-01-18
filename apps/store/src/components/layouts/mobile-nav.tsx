"use client";

import {
  Coffee,
  Leaf,
  Menu,
  Scissors,
  Search,
  Sparkles,
  TreePine,
  Wine,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "~/components/ui/sheet";
import { Link } from "~/i18n/routing";
import { cn } from "~/lib/utils";

interface Category {
  key: string;
  href: string;
  icon: LucideIcon;
}

const categories: Category[] = [
  { key: "woodWork", href: "/products?category=wood-work", icon: TreePine },
  { key: "glassWork", href: "/products?category=glass-work", icon: Wine },
  { key: "plants", href: "/products?category=plants", icon: Leaf },
  { key: "ceramics", href: "/products?category=ceramics", icon: Coffee },
  { key: "textiles", href: "/products?category=textiles", icon: Scissors },
];

export default function MobileNav() {
  const t = useTranslations("Navigation");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div className="flex md:hidden items-center gap-2">
      {/* Search Toggle Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsSearchOpen(!isSearchOpen)}
        aria-label={isSearchOpen ? "Close search" : "Open search"}
      >
        {isSearchOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Search className="h-5 w-5" />
        )}
      </Button>

      {/* Burger Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsMenuOpen(true)}
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Mobile Search Bar - Expandable */}
      {isSearchOpen && (
        <div className="absolute top-full start-0 end-0 bg-background border-b p-3 shadow-md">
          <form onSubmit={handleSearch} className="flex gap-2">
            <Input
              type="search"
              placeholder={t("searchPlaceholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
              autoFocus
            />
            <Button type="submit" size="sm">
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </div>
      )}

      {/* Mobile Menu Sheet */}
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetContent side="right" className="w-[300px] sm:w-[350px]">
          <SheetHeader>
            <SheetTitle>{t("menu")}</SheetTitle>
          </SheetHeader>

          <div className="mt-6 flex flex-col gap-4">
            {/* Customize Your Order - Highlighted */}
            <Link
              href="/customize"
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "flex items-center gap-3 p-3 rounded-lg",
                "bg-primary/10 text-primary",
                "hover:bg-primary/20 transition-colors",
              )}
            >
              <Sparkles className="h-5 w-5" />
              <span className="font-medium">{t("customizeYourOrder")}</span>
            </Link>

            {/* Categories Section */}
            <div className="border-t pt-4">
              <h3 className="text-sm font-semibold text-muted-foreground mb-3">
                {t("categories")}
              </h3>
              <div className="flex flex-col gap-1">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <Link
                      key={category.key}
                      href={category.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        "flex items-center gap-3 p-3 rounded-lg",
                        "hover:bg-accent transition-colors",
                      )}
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">
                          {t(`categoryItems.${category.key}`)}
                        </span>
                        <span className="text-xs text-muted-foreground line-clamp-1">
                          {t(`categoryDescriptions.${category.key}`)}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* View All Categories */}
            <Link
              href="/categories"
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "flex items-center justify-center gap-2 p-3 rounded-lg",
                "border border-primary/20 text-primary",
                "hover:bg-primary/10 transition-colors",
              )}
            >
              {t("viewAll")}
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
