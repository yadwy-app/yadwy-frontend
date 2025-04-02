import { FaHeadset } from "react-icons/fa6";
import { GoDatabase } from "react-icons/go";
import { HiOutlineTruck } from "react-icons/hi";
import type { Product } from "~/types";

export const mockProductsData: Product[] = [
  ...Array(9)
    .fill(null)
    .map((_, index) => ({
      id: Math.floor(Math.random() * 1e9),
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
        "Lorem ipsum dolor sit amet consectetur. Magna cursus gravida ullamcorper turpis molestie auctor duis consequat.",
      images: [
        "/artworks/p1.png",
        "/artworks/p2.png",
        "/artworks/p3.png",
        "/artworks/p4.png",
      ],
      reviewsCount: 3 + Math.floor(Math.random() * 10),
      originalPrice: index % 2 === 0 ? 100 + (index % 5) * 23 : null,
      isFavorite: Math.random() < 0.1,
      isNew: Math.random() < 0.3,
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
    icon: <HiOutlineTruck className="h-6 w-6 font-bold text-primary" />,
    description: "Free 3-5 day shipping",
  },
  {
    icon: <GoDatabase className="h-6 w-6 font-bold text-primary" />,
    description: "Without any additional taxes",
  },
  {
    icon: <FaHeadset className="h-6 w-6 font-bold text-primary" />,
    description: "24 customer support",
  },
];
