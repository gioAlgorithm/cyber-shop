export interface ProductCard {
  id: number;
  image: string;
  name: string;
  description: string;
  location: string;
  type: string;
  industry: string;
  monetization: string;
  siteAge: number;
  netProfit: number;
  price: number;
  link: string | null;
  category: string;
}

export type CardProps = ProductCard;
