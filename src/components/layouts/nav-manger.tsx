"use client";

import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import { FileCog2Icon } from "lucide-react";
import { Link } from "~/i18n/routing";

const NavManger = () => {
  let token = localStorage.getItem("token");
  if (token === '' || token === null) {
    return (
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="relative rounded-full">
              <Image
                src="/profile.svg"
                fill
                priority
                className="object-cover"
                alt="profile"
              />
            </NavigationMenuTrigger>
            <NavigationMenuContent className="flex flex-col border border-gray-200">
              <NavigationMenuLink
                href=""
                className="w-full px-8 py-2 transition-all hover:bg-slate-200"
              >
                Profile
              </NavigationMenuLink>
              <NavigationMenuLink className="w-full bg-slate-100 px-8 py-2 text-red-500 transition-all hover:bg-slate-200">
                Logout
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
  }

  return (
    <Link href={`/login`} className="text-primary flex gap-2 text-sm items-center border-primary border rounded px-5   hover:bg-primary hover:text-white transition-all">
      Login 
    </Link>
  );
};

export default NavManger;
