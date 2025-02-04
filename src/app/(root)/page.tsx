import { Slider } from "./_components/slider";
import { Categories } from "./_sections/categories";
const slides = [
  {
    id: 1,
    imageUrl: "/hero/hero.png",
  },
  {
    id: 2,
    imageUrl: "/hero/hero.png",
  },
  {
    id: 3,
    imageUrl: "/hero/hero.png",
  },
];
export default function Page() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Slider slides={slides} />
      <Categories />
    </div>
  );
}
