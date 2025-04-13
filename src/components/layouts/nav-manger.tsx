"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CiLogin } from "react-icons/ci";
import { Link } from "~/i18n/routing";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

const NavManager = () => {
  const [token, setToken] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setToken(localStorage.getItem("token"));
  }, []);

  if (!isClient) return null;

  if (!token) {
    return (
      <Button asChild>
        <Link href="/login">
          <CiLogin className="text-xl" />
          Login
        </Link>
      </Button>
    );
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    window.location.reload();
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image
              src="/profile.svg"
              fill
              priority
              className="object-cover"
              alt="profile"
            />
          </NavigationMenuTrigger>
          <NavigationMenuContent className="flex min-w-[150px] flex-col border border-gray-200">
            <NavigationMenuLink
              href="/profile"
              className="w-full px-4 py-2 transition-all hover:bg-slate-200"
            >
              Profile
            </NavigationMenuLink>
            <button
              type="button"
              onClick={handleLogout}
              className="w-full px-4 py-2 text-left text-red-500 transition-all hover:bg-slate-200"
            >
              Logout
            </button>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavManager;
