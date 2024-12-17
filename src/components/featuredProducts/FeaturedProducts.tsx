
// import { Product } from "@/model/product";
import ProductCard from "@/pages/productCard";
import { ProductServices } from "@/services/product-services";
import { useContext } from "react";


 function FeaturedProducts({products}:{products:any[]}) {
    const toDisplayProducts : any[]= products.filter((product : any) => 
        product.rating.count > 100)  // Filter products with rating count > 100
        .slice(0, 4);           
        
        if (toDisplayProducts){
            return ( 

                <div className="container">
                    <div className="row m-4 ">
                        <h2>Featured Products</h2>
                            <div className="card-group" >  
                            {
                                toDisplayProducts.map((p : any)=>{
                                    return(
                                        <ProductCard key={p.id}product={p} ></ProductCard>
                                    );
                                })
                            }
                             </div>
                    </div>
                </div>
             );
        }
        else return;
    
}

export default FeaturedProducts;