import Image from "next/image";
import React from "react";
import { IoIosCall } from "react-icons/io";

export const Footer = () => {
  return (
    <div className="bg-primary px-3 py-5">
      <div className="mx-auto grid max-w-6xl grid-cols-12 items-center justify-between gap-y-8 px-6 py-4 md:px-10 lg:px-20">
        <div className="col-span-4">
          <Image
            src="/logo.svg"
            width={107}
            height={90}
            alt="logo"
            className="mb-5 object-contain"
          />
          <p className="text-sm font-extralight">
            Browse an array of masterpieces get your own , and help the local
            market
          </p>
          <ul className="my-10">
            <li className="flex gap-5 mb-4">
              <IoIosCall />
              <span className="text-xs">(+20) 000000000</span>
            </li>
            <li className="flex gap-5 mb-4">
              <IoIosCall />
              <span>(+20) 000000000</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
