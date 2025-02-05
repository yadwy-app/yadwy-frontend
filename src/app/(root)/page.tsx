import { Slider } from "./_components/slider";
import { Categories } from "./_sections/categories";
import NewArt from "./_sections/new-art";
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
    <div className="flex flex-col gap-4 w-full">
      <Slider slides={slides} />
      <Categories />
      <NewArt />
    </div>
  );
}
