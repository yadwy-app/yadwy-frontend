// src/app/[locale]/(root)/page.tsx
import { useTranslations } from "next-intl";
import { mockProductsData } from "~/data";
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

export default function Page() {
  const t = useTranslations("HomePage.NewArt");
  const th = useTranslations("HomePage.HotArt");
  const products = mockProductsData;
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

      <div className="px-2 ">
        <OrderBanner />
      </div>
      {products.length > 1 && (
        <Products
          title={th("title")}
          description={th("description")}
          products={products}
        />
      )}
    </div>
  );
}
