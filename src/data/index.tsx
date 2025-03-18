import { HiOutlineTruck } from "react-icons/hi";
import { GoDatabase } from "react-icons/go";
import { FaHeadset } from "react-icons/fa6";
export const mockProductData = [
  ...Array(10)
    .fill(null)
    .map((_, index) => ({
      id: [
        "518772981",
        "928179873",
        "89829017777777733",
        "61829718217",
        "828999982",
        "9220991",
        "5109282109",
        "6981228937",
        "710921083844",
      ][index % 9],
      title: "lefse plants in a white pot",
      rate: 4.5 + (index % 5) * 0.1,
      price: `$${100 + (index % 5) * 20}`,
      description:
        "Lorem ipsum dolor sit amet consectetur. Magna cursus gravida ullamcorper turpis molestie auctor duis consequat.",
      images: [
        "/artworks/p1.png",
        "/artworks/p2.png",
        "/artworks/p3.png",
        "/artworks/p4.png",
      ],
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

export const products = [
  {
    id: 1,
    name: "Armani Shirt",
    price: 50,
    category: "Armani",
    image: "/artworks/p1.png",
    rating: "4.7",
  },
  {
    id: 2,
    name: "Calvin Klein Jeans",
    price: 80,
    category: "Calvin Klein",
    image: "/artworks/p2.png",
    rating: "4",
  },
  {
    id: 3,
    name: "Gucci Coat",
    price: 100,
    category: "Gucci",
    image: "/artworks/p3.png",
    rating: "5",
  },
  {
    id: 4,
    name: "Prada Bag",
    price: 90,
    category: "Prada",
    image: "/artworks/p4.png",
    rating: "3.5",
  },
  {
    id: 5,
    name: "Dolce & Gabbana Watch",
    price: 70,
    category: "Dolce & Gabbana",
    image: "/artworks/p5.png",
    rating: "2.5",
  },
  {
    id: 6,
    name: "Chanel Perfume",
    price: 120,
    category: "Chanel",
    image: "/artworks/p6.png",
    rating: "4.8",
  },
  {
    id: 7,
    name: "Lacoste Shirt",
    price: 55,
    category: "Lacoste",
    image: "/artworks/p1.png",
    rating: "5",
  },
  {
    id: 8,
    name: "Burberry Coat",
    price: 95,
    category: "Burberry",
    image: "/artworks/p2.png",
    rating: "2",
  },
  {
    id: 9,
    name: "Louis Vuitton Bag",
    price: 110,
    category: "Louis Vuitton",
    image: "/artworks/p3.png",
    rating: "2.5",
  },
  // Add more products as needed
];
