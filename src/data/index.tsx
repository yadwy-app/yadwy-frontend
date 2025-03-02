import { HiOutlineTruck } from "react-icons/hi";
import { GoDatabase } from "react-icons/go";
import { FaHeadset } from "react-icons/fa6";

export const mockProductData = [
  {
    id: "1",
    title: "lefse plants in a white pot",
    rate: 4.5,
    price: "$100",
    description:
      "Lorem ipsum dolor sit amet consectetur. Magna cursus gravida ullamcorper turpis molestie auctor duis consequat. Ultrices pellentesque amet scelerisque velit ultrices erat tincidunt praesent nunc. Felis eget morbi vitae tincidunt turpis phasellus ",
    images: [
      "/artworks/p1.png",
      "/artworks/p2.png",
      "/artworks/p3.png",
      "/artworks/p4.png",
    ],
    reviewComment: [
      {
        userName: "Mohamed Mahmoud",
        userImage: "https://i.suar.me/K48O2/m",
        rating: 5,
        reviewText:
          "Lorem ipsum dolor sit amet consectetur. Dui dictum id morbi augue lorem lobortis. Quam viverra rhoncus pharetra nisl.",
      },
      {
        userName: "yosef mahmoud",
        userImage: "https://i.suar.me/K48O2/m",
        rating: 3,
        reviewText:
          "Lorem ipsum dolor sit amet consectetur. Dui dictum id morbi augue lorem lobortis. Quam viverra rhoncus pharetra nisl.",
      },
      {
        userName: "I love H",
        userImage: "https://i.suar.me/K48O2/m",
        rating: 5,
        reviewText:
          "Lorem ipsum dolor sit amet consectetur. Dui dictum id morbi augue lorem lobortis. Quam viverra rhoncus pharetra nisl.",
      },
    ],
  },
  {
    id: "2",
    title: "Product 2",
    rate: 4.7,
    price: "$200",
    description: "This is a detailed description of Product 2.",
    images: [
      "/artworks/p1.png",
      "/artworks/p2.png",
      "/artworks/p3.png",
      "/artworks/p4.png",
      "/artworks/p5.png",
      "/artworks/p6.png",
    ],
    reviewComment: [
      {
        userName: "Mahmoud",
        userImage: "https://i.suar.me/K48O2/m",
        rating: 5,
        reviewText:
          "Lorem ipsum dolor sit amet consectetur. Dui dictum id morbi augue lorem lobortis. Quam viverra rhoncus pharetra nisl.",
      },
      {
        userName: "yosef mahmoud",
        userImage: "https://i.suar.me/K48O2/m",
        rating: 3,
        reviewText:
          "Lorem ipsum dolor sit amet consectetur. Dui dictum id morbi augue lorem lobortis. Quam viverra rhoncus pharetra nisl.",
      },
      {
        userName: "I love H",
        userImage: "https://i.suar.me/K48O2/m",
        rating: 5,
        reviewText:
          "Lorem ipsum dolor sit amet consectetur. Dui dictum id morbi augue lorem lobortis. Quam viverra rhoncus pharetra nisl.",
      },
    ],
  },
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
