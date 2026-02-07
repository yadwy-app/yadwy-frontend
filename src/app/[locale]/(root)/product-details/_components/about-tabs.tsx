"use client";

import { useTranslations } from "next-intl";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { AboutSeller } from "./about-seller";
import { ProductOverview } from "./product-overview";

// The product overview data can be moved to server component preparation
const productOverview = [
  "Easy to care for",
  "Suitable for indoor decor",
  "Requires medium light",
  "Helps purify the air",
  "Comes in a high-quality ceramic pot",
  "Height: approximately 8-10 inches",
];

// Seller information can be prepared on the server
const sellerInfo = {
  sellerName: "Nature Store",
  sellerSubtitle: "Artisanal Ceramics Studio",
  sellerProductsCount: "500+",
  memberSince: "January 2020",
  bio: "Nature Store specializes in high-quality indoor plants and accessories. All plants are grown in sustainable conditions and shipped with care to ensure they arrive in perfect condition.",
  sellerRating: 5,
};

export default function AboutTabs() {
  // Client-side translations
  const t = useTranslations("ProductDetails");

  return (
    <Tabs defaultValue="overview" className="mb-12">
      <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0">
        <TabsTrigger
          value="overview"
          className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none px-4 py-3"
        >
          {t("featuresTitle")}
        </TabsTrigger>
        <TabsTrigger
          value="seller"
          className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none px-4 py-3"
        >
          {t("sellerTitle")}
        </TabsTrigger>
      </TabsList>

      <TabsContent value="overview" className="pt-6">
        <ProductOverview features={productOverview} />
      </TabsContent>

      <TabsContent value="seller" className="pt-6">
        <AboutSeller
          sellerName={sellerInfo.sellerName}
          sellerSubtitle={sellerInfo.sellerSubtitle}
          sellerProductsCount={sellerInfo.sellerProductsCount}
          memberSince={sellerInfo.memberSince}
          bio={sellerInfo.bio}
          sellerRating={sellerInfo.sellerRating}
        />
      </TabsContent>
    </Tabs>
  );
}
