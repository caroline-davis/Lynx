import { create } from 'zustand';

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
};

type ProductState = {
  products: ProductType[];
  setProducts: (products: ProductType[]) => void;
};

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}));
