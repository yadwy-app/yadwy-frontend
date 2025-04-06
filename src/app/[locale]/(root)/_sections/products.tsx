import { useTranslations } from "next-intl";
import { ProductCard } from "~/components/product-card";
import {
  Section,
  SectionDescription,
  SectionFooter,
  SectionTitle,
} from "~/components/section";
import { Button } from "~/components/ui/button";
import type { Product } from "~/types";

type Props = {
  title: string;
  description?: string;
  products: Product[];
};

export default function Products({ title, description, products }: Props) {
  const t = useTranslations("HomePage.NewArt");
  return (
    <Section>
      <SectionTitle>{title}</SectionTitle>
      {description ? (
        <SectionDescription>{description}</SectionDescription>
      ) : null}
      <div className="grid w-full grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <SectionFooter>
        <Button
          variant="outline"
          className="w-36 rounded-none border-primary text-secondary-foreground shadow-lg"
        >
          {t("button")}
        </Button>
      </SectionFooter>
    </Section>
  );
}
