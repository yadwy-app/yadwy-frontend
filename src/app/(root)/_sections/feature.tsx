import Image from "next/image";
import React from "react";
import { Section } from "~/components/section";
import { FeatureCard } from "../_components/feature-card";
const features = [
  {
    id: 1,
    title: "Strength",
    desc: "The products we sell are durable , and authenticated ",
    img: "/feature/square.svg",
  },
  {
    id: 2,
    title: "Natural",
    desc: "Our products are natural , and made by local people which gives them support to enrich their communities ",
    img: "/feature/tree.svg",
  },
  {
    id: 3,
    title: "Strength",
    desc: "The products we sell are durable , and authenticated by professionals",
    img: "/feature/square.svg",
  },
];
export const Feature = () => {
  return (
    <Section id="Feature" className="w-full">
      <div className="grid grid-cols-12 gap-5">
        {features.map((feature) => (
          <FeatureCard feature={feature} key={feature.id} />
        ))}
      </div>
    </Section>
  );
};
