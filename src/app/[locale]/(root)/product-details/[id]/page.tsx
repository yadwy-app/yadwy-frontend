import { features, mockProductData } from "~/data";
import ProductDetails from "../_components/details";
import ProductImage from "../_components/product-images";
import Feature from "../_components/feature";
import { Separator } from "~/components/ui/separator";
import ButtonAction from "../_components/button-actions";
import Products from "../../_sections/products";

export async function generateStaticParams() {
  return mockProductData.map((product) => ({
    id: product.id.toString(), // تأكد من أن id هو string
  }));
}

type Props = {
  params: {
    id: string; // إزالة number
  };
};

function getProductById(id: string) {
  return mockProductData.find((p) => p.id.toString() === id);
}
const products = [
  {
    id: 518772981,
    name: "lefse plants in a white pot",
    price: 35,
    image: "/artworks/p1.png",
    rating: "5/2",
    category: "plants", // Added category
  },
  {
    id: 61829718217,
    name: "lefse plants in a white pot",
    price: 35,
    image: "/artworks/p2.png",
    rating: "5/4",
    category: "plants", // Added category
  },
  {
    id: 7222792607198,
    name: "lefse plants in a white pot",
    price: 35,
    image: "/artworks/p4.png",
    rating: "5/3",
    category: "plants", // Added category
  },
  {
    id: 828999982,
    name: "lefse plants in a white pot",
    price: 35,
    image: "/artworks/p5.png",
    rating: "5/1",
    category: "plants", // Added category
  },
  {
    id: 9220991,
    name: "lefse plants in a white pot",
    price: 35,
    image: "/artworks/p6.png",
    rating: "5/1",
    category: "plants", // Added category
  },
  {
    id: 5109282109,
    name: "lefse plants in a white pot",
    price: 35,
    image: "/artworks/p1.png",
    rating: "5/2",
    category: "plants", // Added category
  },
  {
    id: 6981228937,
    name: "lefse plants in a white pot",
    price: 35,
    image: "/artworks/p2.png",
    rating: "5/4",
    category: "plants", // Added category
  },
];

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  return Promise.resolve(params).then(({ id }) => {
    const product = getProductById(id);
    if (!product) return <h3>Product not Found</h3>;

    return (
      <div className="px-4 py-8 md:container flex flex-col gap-16">
        <div className="flex w-full flex-col justify-center gap-16 md:flex-row">
          <ProductImage images={product.images} />
          <div className="flex flex-col gap-[1.6rem] w-full">
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
        {products.length > 1 && (
          <Products title="You May Also Like" products={products} />
        )}
      </div>
    );
  });
}
