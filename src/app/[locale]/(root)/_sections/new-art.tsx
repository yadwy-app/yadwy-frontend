import {
  Section,
  SectionDescription,
  SectionFooter,
  SectionTitle,
} from "~/components/section";
import { Button } from "~/components/ui/button";
import ProductCard from "../_components/product-card";
import { useDispatch } from "react-redux";
import { useTranslations } from "next-intl";
const products = [
  {
    id: 5,
    name: "lefse plants in a white pot",
    price: 35,
    image: "https://i.suar.me/v39m4/l",
    rating: "5/2",
  },
  {
    id: 6,
    name: "lefse plants in a white pot",
    price: 35,
    image: "https://i.suar.me/QqzyJ/l",
    rating: " 5/4",
  },
  {
    id: 7,
    name: "lefse plants in a white pot",
    price: 35,
    image: "https://i.suar.me/K48O2/m",
    rating: "5/3",
  },
  {
    id: 8,
    name: "lefse plants in a white pot",
    price: 35,
    image: "https://i.suar.me/v39m4/l",
    rating: "5/1",
  },
  {
    id: 9,
    name: "lefse plants in a white pot",
    price: 35,
    image: "https://i.suar.me/v39m4/l",
    rating: "5/1",
  },
  {
    id: 10,
    name: "lefse plants in a white pot",
    price: 35,
    image: "https://i.suar.me/v39m4/l",
    rating: "5/1",
  },
];

export default function NewArt() {
  const t = useTranslations("HomePage.NewArt");
  return (
    <Section id="NewArt" className="gap-8">
      <SectionTitle>{t("title")}</SectionTitle>
      <SectionDescription>{t("description")}</SectionDescription>
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-4">
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
