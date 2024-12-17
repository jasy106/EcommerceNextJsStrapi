import React, { useContext } from 'react';
import Link from 'next/link';

import RenderStars from '@/RenderStars';
// import { Product } from '@/model/product';
import AddToCart from '@/AddToCart';

export default function ProductCard({product}:{product: any}) {
// var prod = props.product;
if (!product) {
  return null; // Return null to prevent rendering if product is invalid
}

console.log("Called ProductCard",product);

 
return (
    <div className={`col-6 col-sm-4 col-md-3  m-1 p-2 border `}style={{width :250}} >
    {/* // Card container with responsive columns and Bootstrap tooltip for description  */}
      <div  data-bs-toggle="tooltip" data-bs-placement="top" title={product.description}>
        <div className='d-flex justify-content-center' >
          
            <img src={product.image.url }  alt={product.title} height ={200} width ={150}  />
        </div>
        <Link href={'/products/'+product.documentId} style={{ textDecoration: 'none' }} >
          <span  style={{ color: 'black',cursor: 'pointer'}}> {product.title}</span>
        </Link>          
        <div >
          <span className="fs-6 m-1">₹</span>
          <span className="fs-4 fw-bold">{product.price }</span>
          <RenderStars rating={product.rating} />
          
          </div>

        
      </div>
        <AddToCart product={product}/>
            
        
      </div>
  );
}