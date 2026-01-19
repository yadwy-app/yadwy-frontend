"use client";

import { Coffee, Leaf, Scissors, TreePine, Wine } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "~/components/ui/navigation-menu";
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

export default function CategoryMegaMenu() {
  const t = useTranslations("Navigation");

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className="bg-transparent hover:bg-accent/50 data-[state=open]:bg-accent/50"
            aria-label={t("categories")}
          >
            {t("categories")}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[320px] gap-1 p-3 md:w-[400px] md:grid-cols-2 lg:w-[500px]">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <li key={category.key}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={category.href}
                        className={cn(
                          "flex items-center gap-3 rounded-md p-3",
                          "hover:bg-accent hover:text-accent-foreground",
                          "focus:bg-accent focus:text-accent-foreground focus:outline-none",
                          "transition-colors duration-150",
                        )}
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
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
                    </NavigationMenuLink>
                  </li>
                );
              })}
              {/* View All Categories Link */}
              <li className="col-span-full border-t mt-2 pt-2">
                <NavigationMenuLink asChild>
                  <Link
                    href="/categories"
                    className={cn(
                      "flex items-center justify-center gap-2 rounded-md p-2",
                      "text-sm font-medium text-primary",
                      "hover:bg-primary/10 hover:text-primary",
                      "focus:bg-primary/10 focus:outline-none",
                      "transition-colors duration-150",
                    )}
                  >
                    {t("viewAll")}
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
