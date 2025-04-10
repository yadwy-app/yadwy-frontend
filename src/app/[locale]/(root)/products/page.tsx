import {
  PageContainer,
  PageHeader,
  PageTitle,
} from "~/components/page-component";
import { ProductCard } from "~/components/product-card";
import { mockProductsData } from "~/data";

export default function SearchPage() {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Search Results</PageTitle>
        <p className="text-muted-foreground">16,035 items found for "plants"</p>
      </PageHeader>

      <div className="mt-6">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
          {mockProductsData.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
