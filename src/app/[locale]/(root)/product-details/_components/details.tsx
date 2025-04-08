import { Heart, Star } from "lucide-react";

type Props = {
  title: string;
  price: number;
  rate: number;
  description: string;
};

export default function ProductDetails({
  title,
  price,
  rate,
  description,
}: Props) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-start md:items-center">
        <h2 className="text-xl font-bold font-heading text-secondary-foreground md:text-3xl">
          {title}
        </h2>
        <Heart className="w-8 h-8" />
      </div>
      <div className="flex w-fit items-center justify-center gap-2 rounded-lg bg-yellow-50 text-black">
        <h3 className="rounded-l-lg bg-[#FEE440] px-2">
          <Star className="w-4 text-background" />
        </h3>
        <span className="px-2 font-bold font-heading">{rate}/5</span>
      </div>
      <span className="text-2xl font-normal">{price}</span>
      <p className="text-left text-lg text-[#5E6A6B]">{description}</p>
    </div>
  );
}
