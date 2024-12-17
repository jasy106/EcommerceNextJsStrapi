"use client";

import React, { useContext,useState } from "react";
import CartContext from './contexts/CartContext';


export default function AddToCart({ product }: { product: any }) {

  const { addToCart } = useContext(CartContext);
  const [addedToCart, setAddedToCart] = useState(false); // State to track if added to cart

  const handleAddToCart = () => {
    addToCart(product);
    setAddedToCart(true); // Show "Added to Cart" message
    setTimeout(() => setAddedToCart(false), 3000);
    
  };

  return (
    <div>
        <button className="rounded-pill btn btn-warning m-1" onClick={handleAddToCart} >Add to cart </button>
        {addedToCart && <p className="text-success mt-2"><i className="fa fa-check" ></i>Added to Cart.</p>}
    </div>
  );
}

