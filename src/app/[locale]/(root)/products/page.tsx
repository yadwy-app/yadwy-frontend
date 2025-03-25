import { Skeleton } from "~/components/ui/skeleton";
import ProductCard from "../_components/product-card";
const products = [
  ...Array(10)
    .fill(null)
    .map((_, index) => ({
      id: [
        518772981, 61829718217, 7222792607198, 828999982, 9220991, 5109282109,
        6981228937, 710921083844, 8982901777777733, 928179873,
      ][index % 10] as number, // Ensure id is always a number
      name: "lefse plants in a white pot",
      price: 35 + (index % 5) * 10,
      image: `/artworks/p${(index % 6) + 1}.png`,
      rating: `5/${(index % 5) + 1}`,
      category: "plants",
    })),
];
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
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.name}
                price={product.price}
                image={product.image}
                rating={product.rating}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="border rounded-lg overflow-hidden">
          <Skeleton className="aspect-square w-full" />
          <div className="p-4 space-y-3">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <div className="flex justify-between items-center pt-2">
              <Skeleton className="h-6 w-16" />
              <Skeleton className="h-9 w-24" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
