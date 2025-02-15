import Image from "next/image";
import React from "react";
import BtnsHolder from "./_components/btns-holder";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";

const page = () => {
  return (
    <div className="mx-auto grid min-h-screen w-full grid-cols-3 bg-gradient-to-b from-primary to-white md:min-h-[500px] md:w-[1250px] md:from-white md:to-white">
      <div className="col-span-3 flex flex-col items-center justify-center gap-5 p-5 md:col-span-2">
        <Image
          src={`/logo.svg`}
          width={80}
          height={80}
          className="object-contain"
          alt="logo"
        />
        <Carousel className="overflow-hidden block md:hidden ">
          <CarouselContent className="flex gap-4">
            <CarouselItem className="w-full basis-1/2">
              <div className="overflow-hidden rounded-md shadow-lg">
                <Image
                  src={`/auth/bg-login.svg`}
                  width={321}
                  height={200}
                  className="h-[200px] w-full rounded-md object-cover"
                  alt="bg-login"
                />
              </div>
            </CarouselItem>

            <CarouselItem className="w-full basis-1/2" defaultChecked>
              <div className="overflow-hidden rounded-md shadow-lg">
                <Image
                  src={`/auth/bg-login.svg`}
                  width={321}
                  height={200}
                  className="h-[200px] w-full rounded-md object-cover"
                  alt="bg-login"
                />
              </div>
            </CarouselItem>

            <CarouselItem className="w-full basis-1/2">
              <div className="overflow-hidden rounded-md shadow-lg">
                <Image
                  src={`/auth/bg-login.svg`}
                  width={321}
                  height={200}
                  className="h-[200px] w-full rounded-md object-cover"
                  alt="bg-login"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>

        <h6 className="max-w-[432px] text-center text-3xl font-extrabold md:text-4xl">
          Explore handmade masterpieces{" "}
        </h6>
        <p className="max-w-[592px] text-center text-sm text-textColor">
          Browse a huge collection of handmade masterpieces and craft, and help
          the local culture on your way
        </p>
        <BtnsHolder />
        <hr className="border-gray-300" />
        <div className="flex gap-1">
          <span className="text-sm text-textColor">
            Already have an account ?
          </span>
          <Link href={`/login`} className="text-sm font-bold text-primary">
            sign in
          </Link>
        </div>
      </div>
      <div className="relative hidden h-full w-full md:col-span-1 md:block">
        <Image
          src={`/auth/bg-login.svg`}
          fill
          className="object-cover"
          alt="bg-login"
        />
      </div>
    </div>
  );
};

export default page;
