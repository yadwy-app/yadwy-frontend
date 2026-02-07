import { ProductCard } from "~/components/product-card";
import type { Product } from "~/types";

type Props = {
  title: string;
  products: Product[];
};

export default function SimilarProducts({ title, products }: Props) {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-3xl font-black rtl:leading-tight font-heading text-foreground">
        {title}
      </h2>
      <div className="grid w-full grid-cols-2 sm:grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
