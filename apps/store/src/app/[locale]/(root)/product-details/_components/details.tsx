import { Heart, Star } from "lucide-react";
import { Button } from "~/components/ui/button";

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
        <h1 className="text-xl font-bold font-heading md:text-3xl">{title}</h1>
        <Button
          variant="ghost"
          size="icon"
          className="w-10 h-10 lg:w-14 lg:h-14"
        >
          <Heart size={32} className="h-6! w-6!" />
        </Button>
      </div>
      <div className="border border-border flex w-fit items-center overflow-hidden justify-center rounded-md bg-yellow-100 text-black">
        <h3 className="bg-yellow-500 px-2">
          <Star className="w-4 text-background" />
        </h3>
        <span className="px-3 font-heading">{rate}/5</span>
      </div>
      <span className="text-2xl font-normal">{price}$</span>
      <p className="text-left text-lg text-muted-foreground">{description}</p>
    </div>
  );
}
