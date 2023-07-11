import React, { createContext, useState, useEffect, useContext } from 'react';
import { Cart, Product } from '../@types/cart';

interface CartContextData {
  cart: Cart | null;
  AddToCart: (product: Product) => void;
  RemoveToCart: (product: Product) => void;
  DeleteProduct: (product: Product) => void;
  CleanCart: () => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export const CartProvider: React.FC<any> = ({ children }) => {
  const [cart, setCart] = useState<Cart | null>({ quantity: 0, totalPrice: 0, products: []});

  function AddToCart(productData: Product) {
    try {
      // Verifica se o produto já existe no carrinho
      const existingProduct = cart?.products && cart.products.find((item) => item.title === productData.title);

      if (existingProduct) {
        const productsUpdated = cart.products.map((item) => {
          if (item.title === productData.title) {
            return { ...item, quantity: (item.quantity || 0) + 1 };
          }
          return item;
        });

        const updatedCart: Cart = {
          ...cart,
          quantity: cart?.quantity! + 1,
          totalPrice: cart?.totalPrice! + productData.price,
          products: productsUpdated
        }
        
        setCart(updatedCart);

        localStorage.setItem('@App:cart', JSON.stringify(updatedCart));
      } else {
        // Se o produto não existe, adiciona ao carrinho
        const updatedCart: Cart = {
          ...cart,
          quantity: cart?.quantity! + 1,
          totalPrice: cart?.totalPrice! + productData.price,
          products: [...(cart?.products || []), { ...productData, quantity: 1 }]
        }

        setCart(updatedCart);

        localStorage.setItem('@App:cart', JSON.stringify(updatedCart));
      }
    } catch (error) {
      console.log(error)
    }
  }

  function RemoveToCart(productData: Product) {
    try {
      const { quantity } = cart?.products.find((item) => item.id === productData.id) ?? {};

      if(quantity && quantity > 1) {
        const productsUpdated = cart?.products.map((item) => {
          if (item.title === productData.title) {
            return { ...item, quantity: (item.quantity || 0) - 1 };
          }
          return item;
        });
        
        const updatedCart: Cart = {
        ...cart,
        quantity: cart?.quantity! - 1,
        totalPrice: cart?.totalPrice! - productData.price,
        products: productsUpdated || []
      }
      
      setCart(updatedCart);
      
      localStorage.setItem('@App:cart', JSON.stringify(updatedCart));
    } else {
      DeleteProduct(productData)
    }
    } catch (error) {
      console.log(error)
    }
  }

  function DeleteProduct(productData: Product) {
    try {
      const { quantity } = cart?.products.find((item) => item.id === productData.id) ?? {};
      const productsUpdated = cart?.products.filter((item) => item.id !== productData.id);

      const updatedCart: Cart = {
        ...cart,
        quantity: cart?.quantity! - (quantity || 1),
        totalPrice: cart?.totalPrice! - (productData.price * (quantity || 1)),
        products: productsUpdated || []
      }
      
      setCart(updatedCart);

      localStorage.setItem('@App:cart', JSON.stringify(updatedCart));
    } catch (error) {
      console.log(error)
    }
  }

  function CleanCart() {
    try {
      setCart({ quantity: 0, totalPrice: 0, products: []});

      localStorage.removeItem('@App:cart');
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
      value={{ cart, AddToCart, RemoveToCart, DeleteProduct, CleanCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const context = useContext(CartContext);

  return context;
}