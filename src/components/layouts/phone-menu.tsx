"use client";

import { Grid3X3, Home, ShoppingCart, Sparkles, User } from "lucide-react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";

const navigationItems = {
  ar: [
    { href: "", icon: Home, label: "الرئيسية" },
    { href: "/products", icon: Grid3X3, label: "المتجر" },
    { href: "/customize", icon: Sparkles, label: "خصص" },
    { href: "/cart", icon: ShoppingCart, label: "السلة" },
    { href: "/profile", icon: User, label: "حسابي" },
  ],
  en: [
    { href: "", icon: Home, label: "Home" },
    { href: "/products", icon: Grid3X3, label: "Shop" },
    { href: "/customize", icon: Sparkles, label: "Customize" },
    { href: "/cart", icon: ShoppingCart, label: "Cart" },
    { href: "/profile", icon: User, label: "Profile" },
  ],
};

const PhoneMenu = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const items =
    navigationItems[locale as keyof typeof navigationItems] ||
    navigationItems.en;

  return (
    <nav
      className="fixed md:hidden bottom-0 inset-x-0 bg-background border-t border-border py-2 z-50 shadow-lg"
      aria-label="Mobile navigation"
    >
      <div className="grid grid-cols-5 gap-1">
        {items.map((item) => {
          const fullHref = `/${locale}${item.href}`;
          const isActive = pathname === fullHref;

          return (
            <Link
              key={item.href}
              href={fullHref}
              className={cn(
                "flex flex-col items-center py-1 transition-colors",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary",
              )}
              aria-current={isActive ? "page" : undefined}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-[10px] mt-1">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default PhoneMenu;
