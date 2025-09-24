export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  wasPrice: number;
  isSale: boolean;
  isFeatured: boolean;
  discountPercentage: number;
  description: string;
  rating: {
    value: number;
    votedCount: number;
  };
  createdAt: string;
  specialOffer: string | null;
  colors: string[];
  soldTimes: number;
  code: string;
  thumbnail: string;
  imageSet: string[];
}

export interface ProductCard {
  id: string;
  imageUrl: string;
  title: string;
  code: string;
  price: string;
  wasPrice: string;
  productUrl: string;
}
