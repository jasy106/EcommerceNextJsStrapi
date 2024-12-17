"use client";

import React, { useState } from "react";
import CartContext from "@/contexts/CartContext";
// import { Product } from "@/model/product";

export default function CartProvider({ children }: { children: React.ReactNode }) {
    const [cartData, setCartData] = useState<Array<any & { quantity: number }>>([]);

  const addToCart = (product: any) => {
    console.log("Product to add to cart is : ",product);
    
    setCartData(prevCart => {
        const itemExists = prevCart.find(c => c.id === product.id);

        if (itemExists) {
            console.log("item exists, update the quantity");
          // If item exists, update the quantity
          return prevCart.map(c =>
            c.id === product.id
              ? { ...c, quantity: c.quantity + 1 }
              : c
          );
        } else {
            console.log('product does not exist, add it with quantity 1');
          // If product does not exist, add it with quantity 1
          return [...prevCart, { ...product, quantity: 1 }];
        }
      });
    console.log("After addinng cartdata with product",cartData);
  };


const increaseQuantity = (id :any) => {
    setCartData((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
}
    const decreaseQuantity = (id : any) => {
        setCartData((prevCart) =>
          prevCart.map((item) =>
            item.id === id && item.quantity > 0
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0) // Remove items with quantity 0
        );
    
      };
        // Remove item from the cart
  const removeFromCart = (id :number) => {
    if(id == 0){
        
        setCartData([]);
        
    }
    else
    setCartData(prevCart => prevCart.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartData, addToCart ,increaseQuantity,decreaseQuantity,removeFromCart}}>
      {children}
    </CartContext.Provider>
  );
}
