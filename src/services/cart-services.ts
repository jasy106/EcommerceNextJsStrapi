import { ServiceBase } from "./service-base";
// import { Product } from "../model/product";

export class CartServices extends ServiceBase{

    static getCartItems =async()=>{
        
        console.log("Fetching products from:", this.getURL('/carts'));

        try {
            var productResponse = await fetch(ServiceBase.getURL('/carts'),
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

    static postCartItem = async(item : any)=>{
        try {
            const endpoint = ServiceBase.getURL('/carts');
console.log("Posting to endpoint:", endpoint);
                const response = await fetch(ServiceBase.getURL('/carts'), {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization':  this.API_TOKEN},
                    body: JSON.stringify(item),
                });
    
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
    
                const result = await response.json();
                
                console.log("Item successfully synced with Strapi:", result);

            
        } catch (error) {
            console.error("Error syncing cart:", error);
        }
    }

    static deleteCartItem = async (item: any) => {
        const url = `${ServiceBase.getURL('/carts')}/${item.documentId}`;
        console.log("Deleting cart item at:", url);
    
        try {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Authorization': this.API_TOKEN
                },
            });
    
            if (!response.ok) {
                const errorDetails = await response.json();
                console.error("Error deleting cart item:", errorDetails);
                throw new Error(`Failed to delete cart item. Status: ${response.status}`);
            }
    
            console.log("Cart item deleted successfully.");
 
        } catch (error: any) {
            console.error("Error during cart item deletion:", error.message);
        }
    }
    
}