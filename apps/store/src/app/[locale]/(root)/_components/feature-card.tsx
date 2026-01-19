import Image, { type StaticImageData } from "next/image";

interface FeatureCardProps {
  feature: {
    title: string;
    desc: string;
    img: string | StaticImageData;
  };
}
export const FeatureCard = ({ feature }: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-center p-4 gap-3 bg-accent/30 rounded-xl">
      <Image
        src={feature.img}
        width={72}
        height={48}
        style={{ height: "auto" }}
        className="bg-lightPrimary rounded-full object-contain p-2.5"
        alt={feature.title}
      />
      <h6 className="text-base font-semibold text-center">{feature.title}</h6>
      <p className="text-center text-xs text-muted-foreground">
        {feature.desc}
      </p>
    </div>
  );
};
