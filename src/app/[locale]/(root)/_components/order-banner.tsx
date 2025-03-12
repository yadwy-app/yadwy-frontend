"use client";

import { PenLine } from "lucide-react";
import { Button } from "~/components/ui/button";

export default function OrderBanner() {
  return (
    <div className="relative w-full lg:max-w-7xl h-[400px]  md:h-[429px]  mx-auto">
      {/* Main container with border */}
      <div className="absolute inset-0 border-2 border-[#C0D6D6] rounded-lg overflow-hidden">
        {/* Content container */}
        <div className="flex h-full">
          {/* Left content */}
          <div className="relative z-10 flex-1 p-8 flex flex-col md:justify-between gap-8">
            <div>
              <h2 className="md:text-[40px] text-lg font-bold text-[#283D3D] leading-[50px] mb-6">
                Your Order is{" "}
                <span className="relative inline-block">
                  Personal
                  <svg
                    className="absolute -z-10 left-[-0.25em] right-[-0.25em] bottom-[0.1em] h-[0.6em] w-[calc(100%+0.5em)]"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 100"
                  >
                    <path
                      d="M0,50 Q25,45 50,50 T100,50 L95,90 Q70,85 50,90 T5,90 Z"
                      fill="#8FB6B6"
                      fillOpacity="0.35"
                    />
                  </svg>
                </span>
                to you
              </h2>
              <p className="md:text-[20px] text-lg text-[#5E6A6B] leading-[139.4%] max-w-[600px]">
                Lorem ipsum dolor sit amet consectetur. Magna cursus gravida
                ullamcorper turpis molestie auctor duis consequat. Ultrices
                pellentesque amet scelerisque velit ultrices erat
              </p>
            </div>
            <div className="flex gap-4">
              <Button className="bg-[#8FB6B6] hover:bg-[#7FA6A6] text-white px-4 py-2 rounded-md flex items-center gap-3">
                <PenLine className="w-4 h-4" />
                Make your order
              </Button>
              <Button
                variant="outline"
                className="bg-white text-[#262626] border-[#D9DEDE] shadow-sm"
              >
                More Details
              </Button>
            </div>
          </div>
          <div className="md:relative md:flex-1 hidden md:flex">
            <div className="absolute inset-0 bg-[url('/banner.svg')] bg-cover bg-center rounded-r-lg" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FDFDFD] via-[rgba(253,253,253,0.5)] to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
