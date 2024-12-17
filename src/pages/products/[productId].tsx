import React from 'react'

import { ProductServices } from '@/services/product-services';
// import { Product } from '@/model/product';
import styles from '../../styles/ProductDetails.module.css'
import RenderStars from '@/RenderStars';
import AddToCart from '@/AddToCart';


export async function getServerSideProps(context: any) {
    const { params } = context; // Access query params from context
    const { productId } = params;
  
    try {
        const product = await ProductServices.getProductsById(productId);     
        return { props: { product }};
        } catch (error) {
            console.error("Error fetching products:", error);      
        }
  }

export default  function ProductDetails({product}:{product : any}) {
  console.log("Reached ProductDetails page");

    return ( 
      
      <div className="container my-4 p-4 border d-flex justify-content-around">
          <div className={`col-5  ${styles.productImageSize}`}><img  src={product.image.url} style={{ objectFit: "contain", width: "100%", height: "100%" }} /></div>
          <div className="col-6   ">
              <h2>{product.title}</h2>
              <p className="fs-5">{product.description}rating </p>
              <RenderStars rating={product.rating}/>
              <hr></hr>
              <span className="fs-5 m-1">₹</span>
              <span className="fs-3 fw-bold">{product.price }</span>
              <p>Inclusive of all taxes. No Cost EMI available</p>
              <div>
              <AddToCart product={product}/>
                         
              </div>
          </div>
      </div>
      
   );
}
