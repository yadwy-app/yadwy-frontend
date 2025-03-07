"use client";

import { cn } from "~/lib/utils";
import { buttonVariants } from "~/components/ui/button";
import { Link, usePathname } from "~/i18n/routing";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
    icon: JSX.Element;
  }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <nav className={cn("flex flex-col space-y-4", className)} {...props}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            buttonVariants({ variant: "outline" }),
            pathname === item.href &&
            "bg-primary hover:bg-primary/50 text-background",
            "justify-start gap-x-2 text-lg",
          )}
        >
          {item.icon}
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
