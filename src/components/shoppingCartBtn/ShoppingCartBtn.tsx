'use client'
import { useRouter } from "next/navigation"
import { useState,useContext,useEffect } from "react";
import CartContext from "@/contexts/CartContext";
function ShoppingCartBtn() {
    const router = useRouter();
    const {cartData} = useContext(CartContext);

    const [itemCount,setItemCount] =useState(0);

    const onClickCartBtn=()=>{
        router.push('/shoppingCart');
    }
    const calculateItems =()=>{
        let totalItems =0;
    
        cartData.forEach((item)=>{
            totalItems= totalItems + item.quantity;
        });
        console.log("Item Count is : ",totalItems)
        setItemCount(totalItems);
    }
    useEffect(()=>{
        console.log('cartData updated:', cartData);
        calculateItems();
    },[cartData]);
    return ( 
        <div className="position-relative">
        <button className="btn " style={{backgroundColor : "gray"}} onClick={onClickCartBtn} >
            <i className="bi bi-cart-fill"></i>
        </button>
        
        {itemCount > 0 && (
                            <span className="badge badge-pill badge-danger position-absolute top-0 start-50 ">
                                {itemCount}
                            </span>
                        )}
        </div>
     );
}

export default ShoppingCartBtn;