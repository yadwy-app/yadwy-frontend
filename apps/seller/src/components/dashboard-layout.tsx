"use client";

import type React from "react";

import {
  BarChart3,
  Bell,
  Home,
  LogOut,
  Menu,
  Package,
  Settings,
  ShoppingBag,
  User,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const routes = [
    {
      name: "Dashboard",
      path: "/",
      icon: Home,
    },
    {
      name: "Orders",
      path: "/orders",
      icon: ShoppingBag,
      badge: 5,
    },
    {
      name: "Products",
      path: "/products",
      icon: Package,
    },
    {
      name: "Wallet",
      path: "/wallet",
      icon: Wallet,
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: BarChart3,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: Settings,
    },
  ];

  return (
    <div className="flex min-h-screen w-full bg-muted/20">
      {/* Sidebar for desktop */}
      <aside className="hidden w-64 flex-col bg-white border-r border-border md:flex">
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-auto h-8 w-8">
                  <User className="h-4 w-4" />
                  <span className="sr-only">User menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </aside>

      {/* Mobile sidebar */}
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

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 md:px-6">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
          <div className="ml-auto flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="sr-only">Notifications</span>
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                    3
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>New order received</DropdownMenuItem>
                <DropdownMenuItem>Product out of stock</DropdownMenuItem>
                <DropdownMenuItem>Payment processed</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Avatar className="h-8 w-8 md:hidden">
              <AvatarImage src="/placeholder-user.png" alt="User" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
