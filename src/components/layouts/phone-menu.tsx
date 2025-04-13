"use client";
import { Home, ShoppingCart, User, Heart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

const navigationItems = {
  ar: [
    { href: "", icon: Home, label: "الرئيسية" },
    { href: "/cart", icon: ShoppingCart, label: "عربة التسوق" },
    { href: "/profile", icon: User, label: "حسابي" },
    { href: "/favorite", icon: Heart, label: "المفضلة" },
  ],
  en: [
    { href: "", icon: Home, label: "Home" },
    { href: "/cart", icon: ShoppingCart, label: "Cart" },
    { href: "/profile", icon: User, label: "Profile" },
    { href: "/favorite", icon: Heart, label: "Favorites" },
  ],
};

const PhoneMenu = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const items = navigationItems[locale as keyof typeof navigationItems];
  console.log( pathname);
  return (
    <div className="fixed md:hidden bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 z-50">
      <div className="grid grid-cols-4 gap-4">
        {items.map((item) => (
          <Link
            key={item.href}
            href={`/${locale}${item.href}`}
            className={`flex flex-col items-center ${
              pathname === `/${locale}${item.href}`
                ? "text-primary"
                : "text-gray-600"
            } hover:text-primary`}
          >
            <item.icon className="text-xl" />
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PhoneMenu;
