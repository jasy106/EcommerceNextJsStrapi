import { createContext } from "react";
// import { Product } from "../model/product";

// Define the type for the context
interface CartContextType {
  cartData: Array<any & { quantity: number }>; // Adding quantity to Product
  addToCart: (product: any) => void;
  increaseQuantity: (id: number) => void; // Specify the id to increase quantity
  decreaseQuantity: (id: number) => void; // Specify the id to decrease quantity
  removeFromCart: (id: number) => void; // Specify the id to remove from cart
}

// Provide a default value
const InitialCartContext: CartContextType = {
  cartData: [],
  addToCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  removeFromCart: () => {}
};

// Create the context
const CartContext = createContext<CartContextType>(InitialCartContext);

export default CartContext;
