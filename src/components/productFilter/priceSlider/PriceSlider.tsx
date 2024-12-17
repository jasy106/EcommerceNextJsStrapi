'use client';
import { useState } from 'react';
import { useRouter,useSearchParams } from 'next/navigation';
import React from 'react';

export default function PriceSlider() {
    const router = useRouter();
    const searchParams = useSearchParams(); // Access query parameters
    const [price,setPrice]=useState(650);

    const onPriceChange =(event : any)=>{
     setPrice(event.target.value);
   }
 
   const onClickPrice=(value : string)=>{
    const params = new URLSearchParams(searchParams.toString());
    //Update or add the query parameter
    value.length>0 ? params.set("price", value) : params.delete("price");

    // Update the URL 
    const updatedQueryString = params.toString();
    router.push(`/products?${updatedQueryString}`);

   };

  return (
        
        <div className="price ">          
        <label htmlFor="priceRange" className="form-label fw-bold">Price : <output>(₹100 - ₹ {price})</output></label><br/>
        <input type="range" min="100" max="4000" onInput={onPriceChange} />
        <button className='btn btn-light btn-sm m-1 border' onClick={() => onClickPrice(price.toString())}>Go</button>
        <button className='btn btn-light btn-sm m-1 border' onClick={()=>onClickPrice("")}>Clear</button>
    </div>
  )
}
