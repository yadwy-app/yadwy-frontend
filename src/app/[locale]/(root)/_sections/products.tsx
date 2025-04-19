import { useTranslations } from "next-intl";
import { ProductCard } from "~/components/product-card";
import {
  Section,
  SectionDescription,
  SectionFooter,
  SectionHeader,
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
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
        {description ? (
          <SectionDescription>{description}</SectionDescription>
        ) : null}
      </SectionHeader>
      <div className="grid w-full grid-cols-2 sm:grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <SectionFooter>
        <Button variant="outline">{t("button")}</Button>
      </SectionFooter>
    </Section>
  );
}
