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
    <>
      <div className="flex items-center justify-between w-full">
        <Link href={`/`} className="relative h-12 w-28">
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
          <div className="flex items-center gap-3 border-x-2 border-gray-200 px-3">
            <div className="relative">
              <div className="bg-red-500 flex justify-center items-center absolute w-[16px] h-[16px] top-[-10px] right-[0px] text-[9px] p-[2px] rounded-full text-white font-bold">2</div>
              <LinkIcon href="">
                <MdOutlineShoppingBag className="text-1xl" />
              </LinkIcon>
            </div>
            <LinkIcon href="">
              <FaHeart className="text-1xl text-primary" />
            </LinkIcon>
          </div>
        </div>
      </div>
    </>
  );
};
