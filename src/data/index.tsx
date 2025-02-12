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
      "https://i.suar.me/K48O2/m",
      "https://i.suar.me/v39m4/l",
      "https://i.suar.me/QqzyJ/l",
      "https://i.suar.me/K48O2/m",
      "https://i.suar.me/v39m4/l",
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
      "https://i.suar.me/K48O2/m",
      "https://i.suar.me/QqzyJ/l",
      "https://i.suar.me/v39m4/l",
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
  // Add more products as needed
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
