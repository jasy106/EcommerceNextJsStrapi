'use client'
import React from 'react'
import { useContext } from "react";
import { useEffect,useState } from "react";
import { useRouter } from 'next/navigation';
import CartContext from '../../contexts/CartContext';
import { CartServices } from '../../services/cart-services';

export default function OrderSummary() {
  const {cartData,removeFromCart} =useContext(CartContext);
  const [total,setTotal] =useState(0);
  const router = useRouter();

  async function onClickPlaceOrder() {
    try {
      // clear the cart ,local storage and entries in strapi
        const entries = await CartServices.getCartItems(); // Await the promise to resolve
        console.log("Cart entries:", entries);

        // Process entries
        entries.forEach((entry:any) => {
            console.log(entry); // Example: Log each entry
            CartServices.deleteCartItem(entry);
        });
    } catch (error) {
        console.error("Error fetching cart items:", error);
    }
    removeFromCart(0);
    router.push('/placeOrder');

  }

  const calculateTotal=()=>{
    let totalAmount = 0;

    cartData.forEach((item)=>{
        totalAmount= totalAmount + (item.price * item.quantity);
    });
    setTotal(totalAmount);
    
}
useEffect(calculateTotal,[cartData]);
return ( 
  <><h1 className="border-bottom  text-center">Checkout</h1>
  <div className=" d-flex container justify-content-between">
    
    <div>
    
      <div>
          <h4 >Delivery Address</h4>
          <hr></hr>
          <p>Fredrick Patterson</p><p>11B Street,H.H Sheikh Khalifa Bin Freeway</p>
          <p>Ras Al Khaimah,UAE</p>
      </div>
      <div>
          <h4 className="border-bottom">Select Payment Method:</h4>
          <div className="form-check">
              <input className="form-check-input" type="radio" name="paymentMethod" id="card" value="card" />
              <label className="form-check-label" htmlFor="card">Credit or Debit Card</label>
          </div>
          <div className="form-check">
              <input className="form-check-input" type="radio" name="paymentMethod" id="netBanking" value="netBanking" />
              <label className="form-check-label" htmlFor="netBanking">Net Banking</label>
          </div>
          <div className="form-check">
              <input className="form-check-input" type="radio" name="paymentMethod" id="upi" value="upi" />
              <label className="form-check-label" htmlFor="upi">Other UPIs</label>
          </div>
          <div className="form-check">
              <input className="form-check-input" type="radio" name="paymentMethod" id="cod" value="cod" />
              <label className="form-check-label" htmlFor="cod">Cash on Delivery</label>
          </div>
      </div>
    </div>
    <div className='flex-3'>
      <h4 className=" border-bottom m-2">Order Summary</h4>
      <div className="border">
          <div>
              <strong><div className="row align-items-center mb-2">
                <div className="col-6">
                  <p className="mb-0">Item</p>
                </div>
                <div className="col-3 text-center">
                  <p className="mb-0">Quantity</p>
                </div>
                <div className="col-3 text-end">
                  <p className="mb-0">Price</p>
                </div>
                </div>
              </strong>
          </div>
          <div className="container">
            {cartData.map((item) => (
              <div key={item.id} className="row align-items-center mb-2">
                <div className="col-6">
                  <p className="mb-0">{item.title}</p>
                </div>
                <div className="col-3 text-center">
                  <p className="mb-0">{item.quantity}</p>
                </div>
                <div className="col-3 text-end">
                  <p className="mb-0">₹{item.price}</p>
                </div>
              </div>
            ))}
          </div>

              <hr></hr>
              <div className="text-end">
                  <h5> Total : {total}</h5>
                  {/* hardcoding shipping charges */}
                  
                  <h5>Shipping Charges: ₹ 0</h5>
              </div>
      </div>
      <h3 className="text-danger text-end">Order Total :₹ {total }</h3>
      <div className="text-center"><button className="btn btn-secondary m-4" onClick={onClickPlaceOrder}
        >Place your Order</button></div>
    </div>
  </div>
  </>
);
}
