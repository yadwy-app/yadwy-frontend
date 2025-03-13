import {
  Section,
  SectionDescription,
  SectionFooter,
  SectionTitle,
} from "~/components/section";
import { Button } from "~/components/ui/button";
import ProductCard from "../_components/product-card";
import { useTranslations } from "next-intl";
type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  rating: string;
};

type Props = {
  title: string;
  description?: string;
  products: Product[];
};
export default function Products({ title, description, products }: Props) {
  const t = useTranslations("HomePage.NewArt");
  return (
    <Section id="NewArt" className="gap-8 md:w-full lg:max-w-7xl mx-auto">
      <SectionTitle>{title}</SectionTitle>
      {description ? (
        <SectionDescription>{description}</SectionDescription>
      ) : null}
      <div className="grid w-full grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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
      <SectionFooter className="mt-10">
        <Button
          variant="outline"
          className="w-full rounded-none border-primary text-secondary shadow-lg"
        >
          {t("button")}
        </Button>
      </SectionFooter>
    </Section>
  );
}
