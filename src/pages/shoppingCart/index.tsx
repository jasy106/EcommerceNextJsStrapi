'use client'
import React from 'react'
import { useContext ,useState,useEffect} from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import CartContext from '@/contexts/CartContext';
import { CartServices } from '@/services/cart-services';

import styles from '../../styles/ShoppingCart.module.css';

export default function shoppingCart() {
    const router = useRouter();
    const {cartData,decreaseQuantity,increaseQuantity,removeFromCart} = useContext(CartContext);
    const [total,setTotal] =useState(0);
    const [itemCount,setItemCount] =useState(0);
    const calculateTotal=()=>{
        let totalAmount = 0;

        cartData.forEach((item)=>{
            totalAmount= totalAmount + (item.price * item.quantity);
        });
        setTotal(totalAmount);
    }

    const calculateItems =()=>{
        let totalItems =0;

        cartData.forEach((item)=>{
            totalItems= totalItems + item.quantity;
        });
        // console.log("Item Count is : ",totalItems)
        setItemCount(totalItems);
    }
    const onClickProceedToBuy=()=>{
        console.log("redirectingto orderSummary");

       // create the data to be pushed to strapi-cartItems(title,qty,price,productId)
        const cartItems = cartData.map(cartItem => ({
            data: {
                    title: cartItem.title,
                    quantity: cartItem.quantity,
                    price: cartItem.price,
                  }
                        
                }));
                for (const item of cartItems) {
                    CartServices.postCartItem(item);
                }                
        router.push('/orderSummary');
    }

    useEffect(calculateItems,[cartData]);
    useEffect(calculateTotal,[cartData]);

    return ( 
        <div className="container ">
            <h3>Shopping Cart</h3>
{            (cartData.length === 0) ?
            <p>Shopping Cart is empty</p>:
            (cartData.map((item:any) => (
                <div key ={item.id}className="d-flex m-1 p-2  border">
                    <div className=" col-2 m-2 ">
                        
                        <Image src={item.image.url} alt= {item.title} width={100} height={100}/>
                    </div>
                    <div className=" col-9 m-2 ">
                        <div className="d-flex justify-content-between ">
                            <h5 className="m-2">{item.title}</h5>
                            <p className="m-2 fw-bold">Price: ₹{item.price}</p>
                        </div>
                        <div className=" d-flex  col-4">
                            <div className=" d-flex ">
                                <label  className="form-label m-2">Quantity :</label>
                                <div className={`input-group ${styles.quantityBtnGrp}`}>
                                    <button type="button" className="btn btn-outline-secondary "onClick={()=>decreaseQuantity(item.id)}>-</button>
                                    <input type="text" className="form-control text-center" value={item.quantity} readOnly />
                                    <button className="btn btn-outline-secondary"type="button" onClick={()=>increaseQuantity(item.id)}>+</button>

                                </div>
                            </div>

                            <div><button className="btn btn-secondary  mx-2" onClick={()=>removeFromCart(item.id)}>Remove</button></div>
                        </div>
                    </div>                   
                </div>
            )))}
            <div className="d-flex justify-content-between">
                <div><button className="btn btn-secondary" onClick={()=>{
                    router.push('/products');
                }}>Continue Shopping</button></div>
                <p className="fw-bold fs-2">Subtotal ({itemCount} items):   {total.toFixed(2)}</p>
            </div>
            <hr></hr>
            <div className=" text-center m-2 ">
                <button className="btn btn-secondary" onClick={onClickProceedToBuy} >Proceed to Buy</button>
            </div>
        </div>
     );
}
