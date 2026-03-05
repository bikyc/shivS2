export interface Product {
  id: string;
  name: string;
  category: string;
  subCategory: string;
  image: string;
  description?: string;
  tag?: string;
}

export type Page = 'home' | 'new-arrivals' | 'shoes' | 'accessories' | 'travel' | 'store';
