export interface Category {
  id: string;
  name: string;
  span: "1x1" | "2x2" | "2x1";
}

export interface Subcategory {
  id: string;
  categoryId: string;
  name: string;
}

export interface Product {
  id: string;
  subcategoryId: string;
  name: string;
  specs: string[];
  description: string;
  inStock: boolean;
  price?: string;
  images?: string[];
  thumbnail?: string;
  pdfUrl?: string;
}

export interface Manufacturer {
  id: string;
  name: string;
  logo: string;
  description?: string;
  highlights?: string[];
  subcategories?: string[];
  brandColor?: string;
  catalogs?: { name: string; url: string }[];
}
