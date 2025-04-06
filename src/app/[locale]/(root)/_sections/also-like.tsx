import { ProductCard } from "~/components/product-card";
import { Section, SectionFooter, SectionTitle } from "~/components/section";
import { Button } from "~/components/ui/button";
import { mockProductsData } from "~/data";

export default function AlsoLike() {
  return (
    <Section id="NewArt" className="gap-8">
      <SectionTitle>You May Also Like</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
        {mockProductsData.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <SectionFooter>
        <Button
          variant="outline"
          className="w-full shadow-lg border-primary rounded-none text-secondary-foreground"
        >
          Show more
        </Button>
      </SectionFooter>
    </Section>
  );
}
