export interface Property {
  id: string;
  title: string;
  price: number;
  location: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
  };
  details: {
    bedrooms: number;
    bathrooms: number;
    squareFeet: number;
    yearBuilt: number;
  };
  description: string;
  images: string[];
  features: string[];
  agent: {
    name: string;
    phone: string;
    email: string;
    image: string;
  };
}

export interface FilterOptions {
  priceRange: {
    min: number;
    max: number;
  };
  bedrooms: number | null;
  bathrooms: number | null;
  minSquareFeet: number | null;
  location: string;
}