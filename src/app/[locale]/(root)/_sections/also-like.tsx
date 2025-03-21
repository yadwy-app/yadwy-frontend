import {
  Section,
  SectionFooter,
  SectionTitle,
} from "~/components/section";
import { Button } from "~/components/ui/button";
import ProductCard from "../_components/product-card";

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

];
export default function AlsoLike() {
  return (
    <Section id="NewArt" className="gap-8">
      <SectionTitle>You May Also Like</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
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
