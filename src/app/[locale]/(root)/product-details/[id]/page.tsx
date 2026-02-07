import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { PageContainer } from "~/components/page-component";
import { Separator } from "~/components/ui/separator";
import { features, mockProductsData } from "~/data";
import { getCachedTranslations } from "~/i18n/cached-translations";
import type { Product } from "~/types";
import ProductDetails from "../_components/details";
import Feature from "../_components/feature";
import ProductImage from "../_components/product-images";

// Lazy load non-critical components
const AboutTabs = dynamic(() => import("../_components/about-tabs"), {
  loading: () => (
    <div className="h-[200px] animate-pulse bg-gray-100 rounded-md" />
  ),
});

const SimilarProducts = dynamic(
  () => import("../_components/similar-products"),
  {
    loading: () => (
      <div className="h-[300px] animate-pulse bg-gray-100 rounded-md" />
    ),
  },
);
const ButtonAction = dynamic(() => import("../_components/button-actions"), {
  loading: () => (
    <div className="h-[100px] animate-pulse bg-gray-100 rounded-md" />
  ),
});

function getProductById(id: number) {
  return mockProductsData.find((p) => p.id === id);
}

// Get similar products (limit to 4 for better performance)
function getSimilarProducts(product: Product) {
  return mockProductsData.filter((p) => p.id !== product.id).slice(0, 4);
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id, locale } = await params;
  const productId = Number(id);

  // Use cached translations
  const t = await getCachedTranslations("common", locale);

  if (Number.isNaN(productId)) {
    notFound();
  }

  const product = getProductById(productId);
  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <h3 className="text-2xl font-semibold text-muted-foreground">
          {t("productNotFound")}
        </h3>
      </div>
    );
  }

  const similarProducts = getSimilarProducts(product);

  return (
    <PageContainer className="flex flex-col gap-8">
      <div className="flex w-full flex-col justify-center gap-16 md:flex-row">
        <ProductImage images={product.images} />
        <div className="flex w-full flex-col md:gap-6 gap-4">
          <ProductDetails
            title={product.title}
            price={product.price}
            orgPrice={180}
            rate={product.rate}
            reveiwCount={30}
            description={product.description}
          />
          <Separator className="w-full bg-primary/30" />
          <div className="space-y-4">
            {features.map((feature) => (
              <Feature
                key={feature.description}
                header={feature.header}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </div>
          <Separator className="w-full bg-primary/30" />
          <Suspense
            fallback={
              <div className="h-[100px] animate-pulse bg-gray-100 rounded-md" />
            }
          >
            <ButtonAction
              item={{
                id: product.id,
                title: product.title,
                price: product.price,
                quantity: 0,
                unitPrice: product.price,
                imageCover: product.images[0] as string,
              }}
            />
          </Suspense>
        </div>
      </div>

      <Suspense
        fallback={
          <div className="h-[200px] animate-pulse bg-gray-100 rounded-md" />
        }
      >
        <AboutTabs />
      </Suspense>

      <Suspense
        fallback={
          <div className="h-[300px] animate-pulse bg-gray-100 rounded-md" />
        }
      >
        <SimilarProducts
          title={t("youMayAlsoLike")}
          products={similarProducts}
        />
      </Suspense>
    </PageContainer>
  );
}
