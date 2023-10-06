/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';
import { ICartProduct, IProduct } from '../types';

interface ICartContext {
  products: IProduct[];
  setProducts(products: IProduct[]): void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: ICartProduct[];
  setCartItems(products: ICartProduct[]): void;
  isCartVisible: boolean;
  setIsCartVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartContext = createContext<ICartContext | null>(null);

export function useCart() {
  const context = useContext(CartContext);
  if (context === null)
    throw new Error('useContext deve estar dentro do Provider');
  return context;
}

export function CartContextProvider({ children }: React.PropsWithChildren) {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [cartItems, setCartItems] = useState<ICartProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [isCartVisible, setIsCartVisible] = useState(false);

  return (
    <CartContext.Provider
      value={{
        products,
        setProducts,
        loading,
        setLoading,
        cartItems,
        setCartItems,
        isCartVisible,
        setIsCartVisible,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
