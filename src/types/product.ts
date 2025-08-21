export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  howToUse: string;
  testimonials: string[];
  faqs: { question: string; answer: string }[];
  differentials: string[];
  category: string;
  keywords: string[];
  metaTitle: string;
  metaDescription: string;
  affiliateLink: string;
  imageUrl?: string;
}