export interface Product {
  id: number;
  title: string;
  rate: number;
  price: number;
  description: string;
  name: string;
  category: string[];
  images: string[];
  rating: number;
  reviewComment: {
    userName: string | undefined;
    userImage: string;
    rating: number;
    reviewText: string;
  }[];
}
