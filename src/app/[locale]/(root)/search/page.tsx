import { Suspense } from "react";
import { Skeleton } from "~/components/ui/skeleton";
import FilterBar from "./_components/filter-bar";
import ProductGrid from "./_components/products-grid";
import {
  PageContainer,
  PageHeader,
  PageTitle,
} from "~/components/page-component";

export default function SearchPage() {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Search Results</PageTitle>
        <p className="text-muted-foreground">16,035 items found for "plants"</p>
        <div className="mt-4">
          <FilterBar />
        </div>
      </PageHeader>

      <div className="mt-6">
        <Suspense fallback={<ProductGridSkeleton />}>
          <ProductGrid />
        </Suspense>
      </div>
    </PageContainer>
  );
}

function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 12 }).map(() => (
        <div key={Math.random()} className="border rounded-lg overflow-hidden">
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
