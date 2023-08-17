export interface Product {
  _id: string;
  user: string;
  name: string;
  image: string;
  brand: string;
  category: string;
  description: string;
  reviews: string[]; // Assuming Review is a nested model (optional)
  rating: number;
  numReviews: number;
  price: number;
  countInStock: number;
}
