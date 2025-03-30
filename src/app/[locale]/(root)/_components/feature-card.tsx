import Image, { type StaticImageData } from "next/image";
import React from "react";

interface FeatureCardProps{
  feature: {
    title: string,
    desc: string,
    img: string | StaticImageData
  }
}
export const FeatureCard = ({feature} : FeatureCardProps) => {
  return (
    <div className="col-span-12 md:col-span-4 flex flex-col items-center p-3  gap-4">
      <Image
        src={feature.img}
        width={92}
        height={60}
        style={{ height: "auto" }}
        className="bg-lightPrimary rounded-full object-contain p-3"
        alt={feature.title}
      />
      <h6 className="text-2xl font-bold">{feature.title}</h6>
      <p className="text-center text-sm">
        {feature.desc}
      </p>
    </div>
  );
};
