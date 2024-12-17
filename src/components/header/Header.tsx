'use client'
import React from 'react'

import Link from 'next/link';   
import Image from 'next/image';
import { Suspense } from 'react';
import { useRouter } from 'next/navigation';
import ShoppingCartBtn from '../shoppingCartBtn/ShoppingCartBtn';



export default function Header() {
    const router = useRouter();
  const onClickSearch=()=>{
    const searchTextElement = document.getElementById("searchText") as HTMLInputElement| null;
    if(searchTextElement){
        router.push(`/products?search=${searchTextElement.value}`);
        searchTextElement.value="";
    }

  }  
  return (
    
    <div>
    <nav className="navbar navbar-expand-lg " style={{backgroundColor : "lightgray"}}>
        <div className="container-fluid ">
            <Link href="/" className="navbar-brand" >
                <Image src='/logo.png' height={80} width={120}alt="Logo" />
            </Link>
            
            {/* Search Bar */}
            <form className="d-flex flex-grow-1 mx-2" role="search">
                <div className="input-group">
                    <input type="search" id="searchText" className="form-control" placeholder="Search ShopQuik ..." aria-label="Search"/>
                    <button type="button" className="btn " style={{backgroundColor : "gray"}} onClick={onClickSearch}><i className="bi bi-search" ></i></button>
                   
                </div>
            </form>

            {/* Toggler for mobile */}
            <button className="navbar-toggler"type="button"data-bs-toggle="collapse"data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                aria-expanded="false"aria-label="Toggle navigation" >
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navigation links */}

            <div className="row mx-2">
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav  mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/" className="nav-link" >Home</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link href="/products" className="nav-link">Products</Link>       
                        </li>
                    

                        <li className="nav-item">
                            <Link href="/contactus" className="nav-link">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/aboutus" className="nav-link">About Us</Link>
                        </li>
                    </ul>
                </div>

            </div>
            <ShoppingCartBtn/>
        </div>
    </nav>
</div>
  )
}
