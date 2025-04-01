import { Section, SectionFooter, SectionTitle } from "~/components/section";
import { Button } from "~/components/ui/button";
import { mockProductsData } from "~/data";
import ProductCard from "../_components/product-card";

export default function AlsoLike() {
  return (
    <Section id="NewArt" className="gap-8">
      <SectionTitle>You May Also Like</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
        {mockProductsData.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.name}
            price={product.price}
            image={product.images[0] as string}
            rating={product.rating}
          />
        ))}
      </div>
      <SectionFooter>
        <Button
          variant="outline"
          className="w-full shadow-lg border-primary rounded-none text-secondary"
        >
          Show more
        </Button>
      </SectionFooter>
    </Section>
  );
}
