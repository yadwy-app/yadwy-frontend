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

export const Navbar = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <Link href={"/"} className="relative h-12 w-28">
          <Image src="/logo.svg" layout="fill" objectFit="contain" alt="" />
        </Link>
        <div className="flex gap-4">
          <div className="flex items-center gap-1">
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
          <div className="flex gap-3 items-center border-x-2 px-3 border-gray-200">
            <LinkIcon href="">
              <MdOutlineShoppingBag className="text-1xl" />
            </LinkIcon>
            <LinkIcon href="">
              <FaHeart className="text-1xl text-primary" />
            </LinkIcon>
          </div>
        </div>
      </div>
    </div>
  );
};
