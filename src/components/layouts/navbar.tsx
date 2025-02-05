import Image from "next/image";
import React from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { SelectItem } from "@radix-ui/react-select";
import { Button } from "../ui/button";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { LinkIcon } from "../ui/link-icon";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

export const Navbar = () => {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-y-8 px-6 py-4 md:px-10 lg:px-20">
      <div className="flex w-full items-center justify-between">
        <Link href={`/`} className="relative h-12 w-28">
          <Image
            src="/logo.svg"
            fill
            priority
            className="object-contain"
            alt="logo"
          />
        </Link>
        <div className="flex gap-4">
          <div className=" items-center gap-1 hidden md:flex">
            <div className="flex items-center">
              <Select>
                <SelectTrigger className="w-[98px] rounded-sm rounded-r-none border border-gray-300 bg-gray-200">
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="--">--</SelectItem>
                </SelectContent>
              </Select>
              <Input
                className="rounded-sm rounded-l-none border border-gray-300"
                placeholder="Search for artwork, plants...."
              />
            </div>
            <Button>
              <CiSearch className="text-white" />
            </Button>
          </div>
          <div className="flex items-center gap-3 border-x-2 border-gray-200 px-3">
            <div className="relative">
              <div className="absolute right-[0px] top-[-10px] flex h-[16px] w-[16px] items-center justify-center rounded-full bg-red-500 p-[2px] text-[9px] font-bold text-white">
                2
              </div>
              <LinkIcon href="">
                <MdOutlineShoppingBag className="text-1xl" />
              </LinkIcon>
            </div>
            <LinkIcon href="">
              <FaHeart className="text-1xl text-primary" />
            </LinkIcon>
          </div>
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
        </div>
      </div>
      <div className="flex items-center gap-1 md:hidden">
        <div className="flex items-center">
          <Select>
            <SelectTrigger className="w-[98px] rounded-sm rounded-r-none border border-gray-300 bg-gray-200">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="--">--</SelectItem>
            </SelectContent>
          </Select>
          <Input
            className="rounded-sm rounded-l-none border border-gray-300 text-[12px]"
            placeholder="Search for artwork, plants...."
          />
        </div>
        <Button>
          <CiSearch className="text-white" />
        </Button>
      </div>
    </div>
  );
};
