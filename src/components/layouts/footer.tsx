import Image from "next/image";
import React from "react";
import { IoIosCall } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-primary px-3 py-5">
      <div className="mx-auto grid max-w-6xl grid-cols-12 px-6 py-4 md:px-10 lg:px-20">
        <div className="col-span-4">
          <Image
            src="/logo.svg"
            width={107}
            height={90}
            alt="logo"
            className="mb-5 object-contain"
          />
          <p className="max-w-[259px] text-sm font-extralight">
            Browse an array of masterpieces get your own , and help the local
            market
          </p>
          <ul className="my-10">
            <li className="mb-4 flex items-center gap-3">
              <IoIosCall className="text-xl" />
              <span className="text-xs md:text-base">(+20) 000000000</span>
            </li>
            <li className="mb-4 flex items-center gap-3">
              <HiOutlineMailOpen className="text-xl" />
              <span className="text-xs md:text-base">example@yadawi.com</span>
            </li>
            <li className="mb-4 flex items-center gap-3">
              <IoLocationOutline className="text-xl" />
              <span className="text-xs md:text-base">Cairo - Hurghada</span>
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <h6 className="mb-4 text-lg font-bold">Pages</h6>
          <div className="flex flex-col gap-4">
            <Link href={``} className="text-sm">
              Home
            </Link>
            <Link href={``} className="text-sm">
              Shop
            </Link>
            <Link href={``} className="text-sm">
              Categories
            </Link>
          </div>
        </div>
        <div className="col-span-2">
          <h6 className="mb-4 text-lg font-bold">Company</h6>
          <div className="flex flex-col gap-4">
            <Link href={``} className="text-sm">
              About us
            </Link>
            <Link href={``} className="text-sm">
              Careers
            </Link>
            <Link href={``} className="text-sm">
              Community
            </Link>
            <Link href={``} className="text-sm">
              Customers
            </Link>
            <Link href={``} className="text-sm">
              Contact us
            </Link>
          </div>
        </div>
        <div className="col-span-2">
          <h6 className="mb-4 text-lg font-bold">Resources</h6>
          <div className="flex flex-col gap-4">
            <Link href={``} className="text-sm">
            Support
            </Link>
            <Link href={``} className="text-sm">
            Help Center
            </Link>
            <Link href={``} className="text-sm">
            Preferences
            </Link>
            <Link href={``} className="text-sm">
            Privacy Policy
            </Link>
            <Link href={``} className="text-sm">
            Terms of use
            </Link>
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex flex-col items-center gap-6">
            <Link href={``} className="relative w-full h-10">
            <Image fill src={'/footer/google.svg'} className="w-full" alt="google play" />
            </Link>
            <Link href={``} className="relative w-full h-10">
            <Image fill src={'/footer/apple.svg'} className="w-full" alt="google play" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
