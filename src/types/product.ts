export interface Entity {
  id: number;
}

export interface ProductArtisan {
  id: number;
  name: string;
  avatar: string;
}

export interface Product extends Entity {
  title: string;
  rate: number;
  price: number;
  description: string;
  name: string;
  category: string[];
  images: string[];
  rating: number;
  isFavorite: boolean;
  isNew: boolean;
  originalPrice: number | null;
  reviewsCount: number;
  artisan?: ProductArtisan;
  reviewComment: {
    userName: string | undefined;
    userImage: string;
    rating: number;
    reviewText: string;
  }[];
}
