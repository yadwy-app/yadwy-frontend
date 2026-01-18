// src/app/[locale]/(root)/page.tsx
import { useTranslations } from "next-intl";
import { PageContainer } from "~/components/page-component";
import { mockProductsData } from "~/data";
import OrderBanner from "./_components/order-banner";
import { Slider } from "./_components/slider";
import { Categories } from "./_sections/categories";
import { FeaturedArtisans } from "./_sections/featured-artisans";
import { Gifts } from "./_sections/gifts";
import { HowItWorks } from "./_sections/how-it-works";
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
  const t = useTranslations("HomePage");
  const products = mockProductsData;

  return (
    <PageContainer className="flex flex-col gap-16">
      {/* 1. Hero Slider */}
      <Slider slides={slides} />

      {/* 2. How It Works - 3-step process */}
      <HowItWorks />

      {/* 3. Categories */}
      <Categories />

      {/* 4. New Art Products */}
      {products.length > 1 && (
        <Products
          title={t("NewArt.title")}
          description={t("NewArt.description")}
          products={products}
        />
      )}

      {/* 5. Gifts Section */}
      <Gifts />

      {/* 6. Customization Banner */}
      <div className="px-2">
        <OrderBanner />
      </div>

      {/* 7. Featured Artisans */}
      <FeaturedArtisans />

      {/* 8. Hot Art Products */}
      {products.length > 1 && (
        <Products
          title={t("HotArt.title")}
          description={t("HotArt.description")}
          products={products}
        />
      )}
    </PageContainer>
  );
}
