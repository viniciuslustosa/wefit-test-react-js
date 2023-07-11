import React, { createContext, useState, useEffect, useContext } from 'react';
import { Product } from '../@types/cart';

import api from '../config/api';

interface CartContextData {
  cart: Product[] | null;
  AddToCart: (product: Product) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export const CartProvider: React.FC<any> = ({ children }) => {
  const [cart, setCart] = useState<Product[] | null>(null);

  async function AddToCart(productData: Product) {
    try {
        // Verifica se o produto já existe no carrinho
      const existingProduct = cart && cart.find((item) => item.title === productData.title);

      if (existingProduct) {
        // Se o produto já existe, atualiza apenas a quantidade
        const updatedCart = cart.map((item) => {
          if (item.title === productData.title) {
            return { ...item, quantity: (item.quantity || 0) + 1 };
          }
          return item;
        });

        setCart(updatedCart);
      } else {
        // Se o produto não existe, adiciona ao carrinho
        setCart([...(cart || []), { ...productData, quantity: 1 }]);
      }
      setCart(prevState => [...(prevState || []), productData]);

      localStorage.setItem('@App:cart', JSON.stringify([...(cart || []), productData]));
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const productsLocal = localStorage.getItem("@App:cart");

    if(productsLocal) setCart(JSON.parse(productsLocal))
  }, [])

  return (
    <CartContext.Provider
      value={{ cart, AddToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const context = useContext(CartContext);

  return context;
}