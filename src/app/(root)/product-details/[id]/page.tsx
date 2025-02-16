import { features, mockProductData } from "~/data";
import ProductDetails from "../_components/details";
import ProductImage from "../_components/product-images";
import Feature from "../_components/feature";
import { Separator } from "~/components/ui/separator";
import ButtonAction from "../_components/button-actions";
export async function generateStaticParams() {
  return mockProductData.map((product) => ({
    id: product.id,
  }));
}
type Props = {
  params: {
    id: string;
  };
};
function getProductById(id: string) {
  return mockProductData.find((p) => p.id === id);
}

export default function Page({ params }: Props) {
  const product = getProductById(params.id);
  if (!product) return <h3>Product not Found</h3>;

  return (
    <div className="px-4 py-8 md:container">
      <div className="flex w-full flex-col justify-center gap-12 md:flex-row">
        <ProductImage images={product.images} />
        <div className="flex flex-col gap-[1.6rem]">
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
          <ButtonAction />
        </div>
      </div>
    </div>
  );
}
