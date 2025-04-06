import { notFound } from "next/navigation";
import { Separator } from "~/components/ui/separator";
import { features, mockProductsData } from "~/data";
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
  if (Number.isNaN(Number(id))) {
    notFound();
  }
  const product = getProductById(Number(id));
  if (!product) return <h3>Product not Found</h3>;

  return (
    <div className="flex flex-col gap-16 py-8">
      <div className="flex w-full flex-col justify-center gap-16 md:flex-row">
        <ProductImage images={product.images} />
        <div className="flex w-full flex-col gap-[1.6rem]">
          <ProductDetails
            title={product.title}
            price={product.price}
            rate={product.rate}
            description={product.description}
          />
          <Separator className="w-24 bg-primary" />
          {features.map((feature) => (
            <Feature
              key={feature.description}
              icon={feature.icon}
              description={feature.description}
            />
          ))}
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
    </div>
  );
}
