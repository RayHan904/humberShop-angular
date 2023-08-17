export interface CartItem {
  _id: string;
  user: string;
  name: string;
  image: string;
  brand: string;
  category: string;
  description: string;
  reviews: string[];
  rating: number;
  numReviews: number;
  price: number;
  countInStock: number;
  qty: number;
}
