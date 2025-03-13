// src/app/[locale]/(root)/page.tsx
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

// Updated products array with category
const products = [
  ...Array(10)
    .fill(null)
    .map((_, index) => ({
      id: [
        518772981, 61829718217, 7222792607198, 828999982, 9220991, 5109282109,
        6981228937, 710921083844, 89829017777777733, 928179873,
      ][index % 10],
      name: "lefse plants in a white pot",
      price: 35 + (index % 5) * 10,
      image: `/artworks/p${(index % 6) + 1}.png`,
      rating: `5/${(index % 5) + 1}`,
      category: "plants",
    })),
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
