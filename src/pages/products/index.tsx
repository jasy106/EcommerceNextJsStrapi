import React from 'react'
import { ProductServices } from '@/services/product-services';
// import { Product } from '@/model/product';
import ProductCard from '../productCard';
import CategoryCheck from '@/components/productFilter/categoryCheck/CategoryCheck';
import CustomerReview from '@/components/productFilter/customerReview/CustomerReview';
import PriceSlider from '@/components/productFilter/priceSlider/PriceSlider';


export async function getServerSideProps(context: any) {
  const { query } = context; // Access query params from context
  const { category, rating, price, search } = query;

  try {
    let filteredProducts = await ProductServices.getProducts();

    // Filter by search keyword
    if (search) {
      filteredProducts = filteredProducts.filter((product: any) =>
        product.title.toLowerCase().includes((search as string).toLowerCase())
      );
    }

    // Filter by category
    if (category) {
      filteredProducts = filteredProducts.filter(
        (product: any) => product.category === category
      );
    }

    // Filter by rating
    if (rating) {
      filteredProducts = filteredProducts.filter(
        (product: any) => product.rating.rate >= parseFloat(rating as string)
      );
    }

    // Filter by price
    if (price) {
      filteredProducts = filteredProducts.filter(
        (product: any) => product.price <= parseFloat(price as string)
      );
    }

    return {
      props: { filteredProducts }, // Pass filtered data to the page
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      props: { filteredProducts: [] },
    };
  }
}
  export default function Products({ filteredProducts }: { filteredProducts: any[] }) {
    return (
      <div className='d-flex '>
      {/* Sidebar */}
      <aside className="p-3" style={{ background: '#f4f4f4' ,  
        flex: "0 0 20%", // Flex shorthand for fixed 20% width
        maxWidth: "20%", // Ensures sidebar doesn't exceed 40%
        }}>
        <CategoryCheck />
        <CustomerReview/>
        <PriceSlider/>
    </aside>

      {/* Main Content */}
      <main className="flex-fill p-3" style={{ flex: "1 1 80%" }}> 
      <div >
        <h5 className="fw-bold">Results</h5>
        <div>
          Check each product page for other buying options. Price and other
          details may vary based on product size and colour.
        </div>


        <div className="card-group">
          {
          filteredProducts.length > 0 ? (
            filteredProducts.map((product: any) => (
              <ProductCard key={product.id} product={product} />           
            ))) : (<p>No products match the selected filters.</p>)
          }
        </div>
    
      </div>
      </main>
    </div>
      
    );
}
