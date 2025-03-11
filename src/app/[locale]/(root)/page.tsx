import { useTranslations } from "next-intl";
import OrderBanner from "./_components/order-banner";
import { Slider } from "./_components/slider";
import { Categories } from "./_sections/categories";
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
    id: 518772981,
    name: "lefse plants in a white pot",
    price: 35,
    image: "/artworks/p1.png",
    rating: "5/2",
  },
  {
    id: 61829718217,
    name: "lefse plants in a white pot",
    price: 35,
    image: "/artworks/p2.png",
    rating: " 5/4",
  },
  {
    id: 7222792607198,
    name: "lefse plants in a white pot",
    price: 35,
    image: "/artworks/p4.png",
    rating: "5/3",
  },
  {
    id: 828999982,
    name: "lefse plants in a white pot",
    price: 35,
    image: "/artworks/p5.png",
    rating: "5/1",
  },
  {
    id: 9220991,
    name: "lefse plants in a white pot",
    price: 35,
    image: "/artworks/p6.png",
    rating: "5/1",
  },
  {
    id: 5109282109,
    name: "lefse plants in a white pot",
    price: 35,
    image: "/artworks/p1.png",
    rating: "5/2",
  },
  {
    id: 6981228937,
    name: "lefse plants in a white pot",
    price: 35,
    image: "/artworks/p2.png",
    rating: " 5/4",
  },
  {
    id: 710921083844,
    name: "lefse plants in a white pot",
    price: 35,
    image: "/artworks/p4.png",
    rating: "5/3",
  },
  {
    id: 89829017777777733,
    name: "lefse plants in a white pot",
    price: 35,
    image: "/artworks/p5.png",
    rating: "5/1",
  },
  {
    id: 928179873,
    name: "lefse plants in a white pot",
    price: 35,
    image: "/artworks/p6.png",
    rating: "5/1",
  },
];

export default function Page() {
  const t = useTranslations("HomePage.NewArt");
  return (
    <div className="flex w-full flex-col gap-16">
      <Slider slides={slides} />
      <Categories />
      {products.length > 1 && (
        <Products
          title={t("title")}
          description={t("description")}
          products={products}
        />
      )}

      <div className="px-2">
        <OrderBanner />
      </div>
      {products.length > 1 && (
        <Products
          title="Hot Artworks"
          description={t("description")}
          products={products}
        />
      )}
    </div>
  );
}
