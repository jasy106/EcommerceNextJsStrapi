

// import { Product } from "@/model/product";
import ProductCard from "@/pages/productCard";
import { ProductServices } from "@/services/product-services";
import { useContext } from "react";

 function TopElectronics({products}:{products:any[]}) {

    const toDisplayProducts :any[] = products.filter((product : any)=> 
        product.category == "electronics")  // Filter products with category
        .slice(0, 4);           
        console.log('Top Electronics',toDisplayProducts)  ;
    return ( 

        <div className="container">
            <div className="row m-4 ">
                <h2>Top Deals in Electronics</h2>
                    <div className="card-group">  
                    {
                        toDisplayProducts.map((p : any)=>{
                            return(
                                <ProductCard  key={p.id}  product ={p} ></ProductCard>
                            );
                        })
                    }
                     </div>
            </div>
        </div>
     );
}

export default TopElectronics;