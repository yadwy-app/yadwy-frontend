import { mockProductsData } from "~/data";
import { ProductCard } from "~/components/product-card";

export default function SearchPage() {
  return (
    <div className="min-h-screen flex flex-col md:w-full lg:max-w-7xl">
      <section className="flex-1 container mx-auto px-4 py-6">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Search Results</h3>
          <p className="text-muted-foreground">
            16,035 items found for "plants"
          </p>
        </div>

        <div className="mt-6">
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
            {mockProductsData.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
