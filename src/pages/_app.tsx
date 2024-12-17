import "../styles/globals.css"; // Your global CSS
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css';

// import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Bootstrap JS

import type { AppProps } from "next/app";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import CartProvider from "@/components/CartProvider/CartProvider";


export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  
  <CartProvider>
    <Header/>
      <Component {...pageProps} />
    <Footer/>
    </CartProvider>
    
  </>
);
}
