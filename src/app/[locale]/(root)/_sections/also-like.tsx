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
import { mockProductsData } from "~/data";

export default function AlsoLike() {
  const t = useTranslations("HomePage.AlsoLike");
  return (
    <Section id="NewArt">
      <SectionHeader>
        <SectionTitle>{t("title")}</SectionTitle>
        <SectionDescription>{t("description")}</SectionDescription>
      </SectionHeader>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
        {mockProductsData.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <SectionFooter>
        <Button variant="outline">{t("button")}</Button>
      </SectionFooter>
    </Section>
  );
}
