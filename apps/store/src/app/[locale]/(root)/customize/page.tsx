import { getTranslations } from "next-intl/server";
import { Suspense } from "react";
import {
  PageContainer,
  PageHeader,
  PageTitle,
} from "~/components/page-component";
import { Skeleton } from "~/components/ui/skeleton";
import CustomizeFilterBar from "./_components/customize-filter-bar";
import CustomizeProductsGrid from "./_components/customize-products-grid";

interface CustomizePageProps {
  searchParams: Promise<{
    category?: string;
    minPrice?: string;
    maxPrice?: string;
    material?: string;
    sort?: string;
    page?: string;
  }>;
}

export default async function CustomizePage({
  searchParams,
}: CustomizePageProps) {
  const t = await getTranslations("CustomizePage");
  const params = await searchParams;

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>{t("title")}</PageTitle>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          {t("description")}
        </p>
      </PageHeader>

      <div className="mt-4">
        <CustomizeFilterBar />
      </div>

      <div className="mt-6">
        <Suspense fallback={<ProductGridSkeleton />}>
          <CustomizeProductsGrid filters={params} />
        </Suspense>
      </div>
    </PageContainer>
  );
}

function ProductGridSkeleton() {
  const skeletonIds = [
    "sk-1",
    "sk-2",
    "sk-3",
    "sk-4",
    "sk-5",
    "sk-6",
    "sk-7",
    "sk-8",
    "sk-9",
    "sk-10",
    "sk-11",
    "sk-12",
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {skeletonIds.map((id) => (
        <div key={id} className="border rounded-lg overflow-hidden">
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
