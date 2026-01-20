"use client";

import type React from "react";

import { routes } from "@/lib/routes";
import { cn } from "@yadwy/ui";
import { Avatar, AvatarFallback, AvatarImage } from "@yadwy/ui";
import { Badge } from "@yadwy/ui";
import { Sheet, SheetContent } from "@yadwy/ui";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNavbar({
  isSidebarOpen,
  setIsSidebarOpen,
}: {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const pathname = usePathname();

  return (
    <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
      <SheetContent side="left" className="w-64 p-0">
        <div className="flex h-14 items-center border-b px-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="text-xl font-bold text-primary">Yadwy</span>
          </Link>
        </div>
        <nav className="flex-1 overflow-auto py-4">
          <ul className="grid gap-1 px-2">
            {routes.map((route) => (
              <li key={route.path}>
                <Link
                  href={route.path}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted",
                    pathname === route.path
                      ? "bg-muted text-primary"
                      : "text-muted-foreground",
                  )}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <route.icon className="h-4 w-4" />
                  <span>{route.name}</span>
                  {route.badge && (
                    <Badge className="ml-auto h-5 w-5 justify-center rounded-full p-0">
                      {route.badge}
                    </Badge>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="border-t p-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/placeholder-user.png" alt="User" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium">Sarah's Crafts</span>
              <span className="text-xs text-muted-foreground">
                sarah@example.com
              </span>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
