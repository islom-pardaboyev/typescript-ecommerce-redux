import { createContext, useState } from "react";
import { ProductTypes } from "../types";

export const Context = createContext<{
  products: ProductTypes[];
  setProducts: React.Dispatch<React.SetStateAction<ProductTypes[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  products: [],
  setProducts: () => {},
  loading: false,
  setLoading: () => {},
});

export const MainContext = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<ProductTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <Context.Provider value={{ products, setProducts, loading, setLoading }}>
      {children}
    </Context.Provider>
  );
};
