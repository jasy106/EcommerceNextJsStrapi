"use client"
import React from 'react'
import { useRouter ,useSearchParams} from "next/navigation";

export default function CategoryCheck() {
  const router = useRouter();
  const searchParams = useSearchParams();             // Access query parameters
  
  const params = new URLSearchParams(searchParams.toString());
  // console.log("Retrieving existing searchParams:",params);

  const onClickCategory=(value : string)=>{
    //set or delete the category parameter
    value.length>0 ? params.set("category", value) : params.delete("category");
  
    // Update the URL 
    const updatedQueryString = params.toString();
    // console.log("Updated QueryString:",updatedQueryString);
    router.push(`/products?${updatedQueryString}`);
    };

  return (
  <div className="category my-2">
    <h6 className="fw-bold">Category</h6>
    <div className="form-check">
        <input className="form-check-input" type="radio" name="category" value="none" id="noneCheck" 
       onClick={() => onClickCategory("")}/>
        
         <label className="form-check-label" htmlFor="noneCheck">
          None
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="category" value="mensClothing" id="mensClothingCheck" 
       onClick={() => onClickCategory("mensClothing")}/>
        
         <label className="form-check-label" htmlFor="mensClothingCheck">
          Mens Clothing
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="category" value="womensClothing" id="womensClothingCheck"        
        onClick={() => onClickCategory("womensClothing")}/>
        <label className="form-check-label" htmlFor="womensClothingCheck">Womens Clothing</label>
      </div> 

      <div className="form-check">
          <input className="form-check-input" type="radio" name="category" value="jewellery" id="jewelleryCheck"
           onClick={() => onClickCategory("jewellery")}/>
          <label className="form-check-label" htmlFor="jewelleryCheck">Jewellery</label>
      </div>
      <div className="form-check">
          <input className="form-check-input" type="radio" name="category" value="electronics" id="electronicsCheck"  
          onClick={() => onClickCategory("electronics")}/>
          <label className="form-check-label" htmlFor="electronicsCheck">Electronics</label>
      </div>           
      <div className="form-check">
        <input className="form-check-input" type="radio" name="category" value="perfumes" id="perfumesCheck"  
        onClick={() => onClickCategory("perfumes")}/>
        <label className="form-check-label" htmlFor="perfumesCheck">Perfumes</label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="category" value="shoes" id="shoesCheck"  
        onClick={() => onClickCategory("shoes")}/>
        <label className="form-check-label" htmlFor="shoesCheck">Shoes</label>
      </div>          
  </div>
  )
}
