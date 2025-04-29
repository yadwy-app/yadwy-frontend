import type { Product } from "@yadwy/types";
import { Check, ShoppingBag, Truck } from "lucide-react";
// Seeded random function, we need this to make the data deterministic
// so that hydration errors don't occur
function seededRandom(seed: number) {
  let value = seed;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

const seed = 12345; // Replace with any seed value
const random = seededRandom(seed);

export const mockProductsData: Product[] = [
  ...Array(9)
    .fill(null)
    .map((_, index) => ({
      id: Math.floor(random() * 1e9),
      title: "lefse plants in a white pot",
      rate: 4.5 + (index % 5) * 0.1,
      price: 100 + (index % 5) * 20,
      name: [
        "Armani Shirt",
        "Calvin Klein Jeans",
        "Gucci Coat",
        "Prada Bag",
        "Dolce & Gabbana Watch",
        "Chanel Perfume",
        "Lacoste Shirt",
        "Burberry Coat",
        "Louis Vuitton Bag",
      ][index] as string,
      description:
        "This beautiful cactus features a vibrant pink flower crown and comes in a premium ceramic white pot. Perfect for adding a touch of nature to any indoor space with minimal maintenance required. Each plant is carefully grown in our greenhouse facilities using sustainable practices. The vibrant pink bloom on top is a signature characteristic of this particular cactus variety, making it a standout decorative piece for your home or office. The clean white ceramic pot complements any interior design style from minimalist to bohemian. Our plants are shipped with care instructions and a small package of specialized soil to help with your first repotting. We guarantee the health and quality of all our plants upon delivery. This cactus species is known for its resilience and ability to thrive in various indoor environments. The striking contrast between the green cactus body and the vibrant pink flower creates a visually appealing focal point in any room. Each cactus is unique, with slight variations in size and shape, making your plant truly one-of-a-kind. The ceramic pot is handcrafted by local artisans, ensuring high quality and attention to detail. The pot features a drainage hole at the bottom with a removable plug, allowing you to control the water drainage based on your plant's needs.",
      images: [
        "/artworks/p1.png",
        "/artworks/p2.png",
        "/artworks/p3.png",
        "/artworks/p4.png",
      ],
      reviewsCount: 3 + Math.floor(random() * 10),
      originalPrice: index % 2 === 0 ? 100 + (index % 5) * 23 : null,
      isFavorite: random() < 0.1,
      isNew: random() < 0.3,
      category: [
        [
          "Armani",
          "Calvin Klein",
          "Gucci",
          "Prada",
          "Dolce & Gabbana",
          "Chanel",
          "Lacoste",
          "Burberry",
          "Louis Vuitton",
        ][index] as string,
      ],
      rating: 3 + (index % 3),
      reviewComment: Array(3)
        .fill(null)
        .map((_, i) => ({
          userName: ["Mohamed Mahmoud", "Yosef Mahmoud", "I love H"][i],
          userImage: "https://i.suar.me/K48O2/m",
          rating: 3 + (i % 3),
          reviewText:
            "Lorem ipsum dolor sit amet consectetur. Dui dictum id morbi augue lorem lobortis.",
        })),
    })),
];

export const features = [
  {
    icon: <Truck className="h-5 w-5 font-bold text-background" />,
    header: "Free 3-5 day shipping",
    description: "Orders over $50 qualify for free shipping",
  },
  {
    icon: <Check className="h-5 w-5 font-bold text-background" />,
    header: "Without any additional taxes",
    description: "All prices include applicable taxes",
  },
  {
    icon: <ShoppingBag className="h-5 w-5 font-bold text-background" />,
    header: "24 customer support",
    description: "We're here to help with any questions",
  },
];
