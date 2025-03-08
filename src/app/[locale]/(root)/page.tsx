import { useTranslations } from "next-intl";
import OrderBanner from "./_components/order-banner";
import { Slider } from "./_components/slider";
import { Categories } from "./_sections/categories";
import { Feature } from "./_sections/feature";
import NewArt from "./_sections/new-art";
import Products from "./_sections/products";
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
const products = [
  {
    id: 5,
    name: "lefse plants in a white pot",
    price: 35,
    image: "/artworks/p1.png",
    rating: "5/2",
  },
  {
    id: 6,
    name: "lefse plants in a white pot",
    price: 35,
    image: "/artworks/p2.png",
    rating: " 5/4",
  },
  {
    id: 7,
    name: "lefse plants in a white pot",
    price: 35,
    image: "/artworks/p4.png",
    rating: "5/3",
  },
  {
    id: 8,
    name: "lefse plants in a white pot",
    price: 35,
    image: "/artworks/p5.png",
    rating: "5/1",
  },
  {
    id: 9,
    name: "lefse plants in a white pot",
    price: 35,
    image: "/artworks/p6.png",
    rating: "5/1",
  },
  {
    id: 5,
    name: "lefse plants in a white pot",
    price: 35,
    image: "/artworks/p1.png",
    rating: "5/2",
  },
  {
    id: 6,
    name: "lefse plants in a white pot",
    price: 35,
    image: "/artworks/p2.png",
    rating: " 5/4",
  },
  {
    id: 7,
    name: "lefse plants in a white pot",
    price: 35,
    image: "/artworks/p4.png",
    rating: "5/3",
  },
  {
    id: 8,
    name: "lefse plants in a white pot",
    price: 35,
    image: "/artworks/p5.png",
    rating: "5/1",
  },
  {
    id: 9,
    name: "lefse plants in a white pot",
    price: 35,
    image: "/artworks/p6.png",
    rating: "5/1",
  },
];

export default function Page() {
  const t = useTranslations("HomePage.NewArt");
  return (
    <div className="flex flex-col gap-16 w-full">
      <Slider slides={slides} />
      <Categories />
      <Products
        title={t("title")}
        description={t("description")}
        products={products}
      />
      <div className="px-2">
        <OrderBanner />
      </div>
      <Products
        title="Hot Artworks"
        description={t("description")}
        products={products}
      />
    </div>
  );
}
