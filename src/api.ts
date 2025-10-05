// src/api.ts
import axios from "axios";

// About data interface
export interface AboutData {  // <-- renamed from About
  mission: string;
}

const API_URL = "http://localhost:8000/api"; // Laravel backend

export const getAbouts = async (): Promise<AboutData[]> => {  // <-- renamed
  const res = await axios.get<{ status: string; data: AboutData[] }>(`${API_URL}/aboutss`);
  return res.data.data; // return About records array
};

// Clents data interface
export interface ClientData {  // <-- renamed from About
  image: string;
  company_name: string;
}

export const getClients = async (): Promise<ClientData[]> => {  // <-- renamed
  const res = await axios.get<{ status: string; data: ClientData[] }>(`${API_URL}/clients`);
  return res.data.data; // return Clients records array
};
// Sliders data interface
export interface SliderData {  // <-- renamed from About
  id: number;
  title: string;
  description: string;
  slider_image: string;
}

export const getSliders = async (): Promise<SliderData[]> => {  // <-- renamed
  const res = await axios.get<{ status: string; data: SliderData[] }>(`${API_URL}/sliders`);
  return res.data.data; // return Clients records array
};


// Gallery data interface
export interface GalleryData {
  id: number;
  title: string;
  description: string;
  image: string;
}

// Fetch galleries API
export const getGalleries = async (): Promise<GalleryData[]> => {
  const res = await axios.get<{ status: string; data: GalleryData[] }>(`${API_URL}/galleries`);
  return res.data.data; // return Gallery records array
};


// companies data interface
export interface CompanyData {
  id: number;
  company_address: string;
  phone_number: string;
  email: string;
  left_logo: string;
}

// Fetch Companies API
export const getCompanies = async (): Promise<CompanyData[]> => {
  const res = await axios.get<{ status: string; data: CompanyData[] }>(`${API_URL}/companies`);
  return res.data.data; // return Gallery records array
};

// Services data interface
export interface ServiceFeature {
  id: number;
  service_id: number;
  feature: string;
}

export interface ServiceData {
  id: number;
  category_id: number;
  title: string;
  description: string;
  othertext: string;
  image: string | null;
  features: ServiceFeature[]; // <-- array of features
}


// Fetch Services API
export const getServices = async (): Promise<ServiceData[]> => {
  const res = await axios.get<{ status: string; data: ServiceData[] }>(`${API_URL}/services`);
  return res.data.data;
};



// product Feature interface
export interface ProductFeature {
  id: number;
  product_id: number;
  feature: string;
  created_at: string;
  updated_at: string;
}

//product Category interface
export interface ProductCategory {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

// Product interface
export interface ProductData {
  id: number;
  category_id: number | null;
  name: string;
  description: string | null;
  images: string;
  status: number;
  created_at: string;
  updated_at: string;
  category: ProductCategory | null;
  features: ProductFeature[];
}
// Fetch Services API
export const getProducts = async (): Promise<ProductData[]> => {
  const res = await axios.get<{ status: string; data: ProductData[] }>(`${API_URL}/products`);
  return res.data.data;
};
