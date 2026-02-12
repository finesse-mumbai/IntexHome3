
export interface CategoryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface BuyerImageProfile {
  title: string;
  imageUrl: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  company: string;
  role: string;
  imageUrl: string;
  type: 'BUYER' | 'EXHIBITOR';
}

export interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  rating: number;
  year: string;
}