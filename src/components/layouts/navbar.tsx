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
import { FaHeart } from "react-icons/fa";
import { CartBtn } from "~/app/[locale]/(root)/_components/cart-btn";
import NavManager from "./nav-manger";

export const Navbar = () => {
  return (
    <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-y-8 py-4 md:px-10 lg:px-20 xl:px-0">
      <div className="flex w-full items-center justify-between px-5 md:px-0">
        <Link href={"/"} className="relative h-12 w-28">
          <Image
            src="/logo.svg"
            fill
            priority
            className="object-contain"
            alt="logo"
          />
        </Link>
        <div className="flex gap-4">
          <div className="hidden items-center gap-1 md:flex">
            <div className="flex items-center">
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
            <CartBtn />
            <LinkIcon href="">
              <FaHeart className="text-1xl text-primary" />
            </LinkIcon>
          </div>

          <NavManager />
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
