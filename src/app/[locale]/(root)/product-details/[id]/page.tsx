import { notFound } from "next/navigation";
import { PageContainer } from "~/components/page-component";
import { Separator } from "~/components/ui/separator";
import { features, mockProductsData } from "~/data";
import Categories from "../../_sections/categories";
import Products from "../../_sections/products";
import ButtonAction from "../_components/button-actions";
import ProductDetails from "../_components/details";
import Feature from "../_components/feature";
import ProductImage from "../_components/product-images";

function getProductById(id: number) {
  return mockProductsData.find((p) => p.id === id);
}

export default async function Page({
  params,
}: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const productId = Number(id);

  if (Number.isNaN(productId)) {
    notFound();
  }

  const product = getProductById(productId);
  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <h3 className="text-2xl font-semibold text-muted-foreground">
          Product Not Found
        </h3>
      </div>
    );
  }

  return (
    <PageContainer>
      <div className="flex w-full flex-col justify-center gap-16 md:flex-row">
        <ProductImage images={product.images} />
        <div className="flex w-full flex-col md:gap-14 gap-4">
          <ProductDetails
            title={product.title}
            price={product.price}
            rate={product.rate}
            description={product.description}
          />
          <Separator className="w-24 bg-primary" />
          <div className="space-y-4">
            {features.map((feature) => (
              <Feature
                key={feature.description}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </div>
          <Separator className="w-24 bg-primary" />
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
        </div>
      </div>
      <Products title="You May Also Like" products={mockProductsData} />
      <Categories />
    </PageContainer>
  );
}
