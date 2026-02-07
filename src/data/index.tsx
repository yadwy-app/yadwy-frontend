import { Check, ShoppingBag, Truck } from "lucide-react";
import type { Artisan } from "~/app/[locale]/(root)/_components/artisan-card";
import type { Product } from "~/types";

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

// Mock artisan data
export const mockArtisansData: Artisan[] = [
  {
    id: 1,
    name: "Sarah Ahmed",
    avatar: "https://i.pravatar.cc/150?img=1",
    specialty: "Wood Carving",
    productCount: 45,
  },
  {
    id: 2,
    name: "Mohamed Ali",
    avatar: "https://i.pravatar.cc/150?img=3",
    specialty: "Glass Art",
    productCount: 32,
  },
  {
    id: 3,
    name: "Fatima Hassan",
    avatar: "https://i.pravatar.cc/150?img=5",
    specialty: "Pottery",
    productCount: 58,
  },
  {
    id: 4,
    name: "Ahmed Mahmoud",
    avatar: "https://i.pravatar.cc/150?img=8",
    specialty: "Textiles",
    productCount: 27,
  },
  {
    id: 5,
    name: "Layla Omar",
    avatar: "https://i.pravatar.cc/150?img=9",
    specialty: "Jewelry",
    productCount: 63,
  },
  {
    id: 6,
    name: "Youssef Ibrahim",
    avatar: "https://i.pravatar.cc/150?img=11",
    specialty: "Leather Work",
    productCount: 41,
  },
  {
    id: 7,
    name: "Nour El-Din",
    avatar: "https://i.pravatar.cc/150?img=12",
    specialty: "Calligraphy",
    productCount: 29,
  },
  {
    id: 8,
    name: "Hana Khalil",
    avatar: "https://i.pravatar.cc/150?img=16",
    specialty: "Plant Arrangements",
    productCount: 38,
  },
];

export const mockProductsData: Product[] = [
  ...Array(8)
    .fill(null)
    .map((_, index) => ({
      id: Math.floor(random() * 1e9),
      title: "lefse plants in a white pot",
      rate: 4.5 + (index % 5) * 0.1,
      price: 100 + (index % 5) * 20,
      name: [
        "Handcrafted Wooden Bowl",
        "Artisan Glass Vase",
        "Ceramic Plant Pot",
        "Woven Basket Set",
        "Hand-painted Tile Art",
        "Natural Stone Coasters",
        "Bamboo Wind Chimes",
        "Macrame Wall Hanging",
        "Hand-carved Candle Holder",
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
          "Wood Work",
          "Glass Work",
          "Plants",
          "Textiles",
          "Ceramics",
          "Home Decor",
          "Wood Work",
          "Textiles",
          "Home Decor",
        ][index] as string,
      ],
      rating: 3 + (index % 3),
      artisan: mockArtisansData[index % mockArtisansData.length],
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
