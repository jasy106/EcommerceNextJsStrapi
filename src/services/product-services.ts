import { ServiceBase } from "./service-base";
// import { Product } from "../model/product";

export class ProductServices extends ServiceBase{

    static getProducts =async()=>{
        
        console.log("Fetching products from:", this.getURL('/products'));

        try {
            var productResponse = await fetch(ServiceBase.getURL('/products?populate=*'),
                {
                    method : 'GET',
                    headers : {'Authorization' : this.API_TOKEN}
                });
                var products=await productResponse.json();
                return products.data;
            }
        catch (error: any) {
                    console.log("Error:", error);
                }  
    }

    static getProductsById =async(id : string)=>{     
        try {
            var productResponse = await fetch(ServiceBase.getURL(`/products/${id}?populate=*`),
                {
                    method : 'GET',
                    headers : {'Authorization' : this.API_TOKEN}
                });
                var product=await productResponse.json();
                return product.data;
            }
        catch (error: any) {
                    console.log("Error:", error);
                }  
    }

}