"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "~/i18n/routing";
import { cn } from "~/lib/utils";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
    icon: JSX.Element;
    exact?: boolean;
  }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname();
  const t = useTranslations("ProfilePage.ProfileSidebar"); // Add translation namespace

  return (
    <nav className={cn("grid items-start gap-2", className)} {...props}>
      {items.map((link) => {
        const isActive = link.exact
          ? pathname === link.href
          : pathname?.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
              isActive ? "bg-accent text-accent-foreground" : "transparent",
            )}
          >
            {link.icon}
            {t(link.title.toLowerCase().replace(" ", ""))}{" "}
            {/* Translate title */}
          </Link>
        );
      })}
    </nav>
  );
}
