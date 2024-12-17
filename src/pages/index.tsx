import { Geist, Geist_Mono } from "next/font/google";

import Banner from "@/components/banner/Banner";
import Categories from "@/components/categories/Categories";
import FeaturedProducts from "@/components/featuredProducts/FeaturedProducts";
import TopElectronics from "@/components/topElectronics/TopElectronics";
import { ProductServices } from "@/services/product-services";
// import { Product } from "@/model/product";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const getStaticProps = async () => {
  let products = []; // Initialize an empty array for fallback
  try {
    products = await ProductServices.getProducts(); // Fetch products
  } catch (error) {
    console.log("Data Fetching error:", error);
  }
  return {
    props: { products }, // Ensure 'products' is always defined
  };
};

export default  function Home({products}:{products : any[]}) {
  
  return (
    <div >
      <Banner/>  
      <Categories/>
      <FeaturedProducts products={products}/>
      <TopElectronics products={products}/>  
      
    </div>
  );
}
