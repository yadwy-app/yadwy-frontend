import { useTranslations } from "next-intl";
import OrderBanner from "./_components/order-banner";
import { Slider } from "./_components/slider";
import { Categories } from "./_sections/categories";
import { Feature } from "./_sections/feature";
import NewArt from "./_sections/new-art";
import Products from "./_sections/products";
import { products } from "~/data";
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
