import {
  Section,
  SectionDescription,
  SectionFooter,
  SectionTitle,
} from "~/components/section";
import { Button } from "~/components/ui/button";
import ProductCard from "../_components/product-card";
import { useDispatch } from "react-redux";
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
  
  return (
    <Section id="NewArt" className="gap-8">
      <SectionTitle>New Artworks</SectionTitle>
      <SectionDescription>
        Lorem ipsum dolor sit amet consectetur. Urna vehicula commodo varius
        nibh enim id proin. Felis nibh facilisi ac non pharetra proin.
      </SectionDescription>
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
          Show more
        </Button>
      </SectionFooter>
    </Section>
  );
}
