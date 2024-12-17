'use client'
import styles from '../../../styles/CustomerReview.module.css';
import React from 'react'
import { useRouter ,useSearchParams} from "next/navigation";

export default function CustomerReview() {
  const router = useRouter();
  const searchParams = useSearchParams(); // Access query parameters
  const params = new URLSearchParams(searchParams.toString());

  const onClickRating=(value : string)=>{
    //Update or add the query parameter
    value.length>0 ? params.set("rating", value) : params.delete("rating");

    // Update the URL 
    const updatedQueryString = params.toString();
    router.push(`/products?${updatedQueryString}`);
  };
  return (
    <div >
    <h6 className=" fw-bold my-2">CustomerReview</h6>
    <ul className="list-unstyled ">
      <li onClick={() => onClickRating("4")}>
        
          <span className={`fa fa-star ${styles.checked}`}></span>
          <span className={`fa fa-star ${styles.checked}`}></span>
          <span className={`fa fa-star ${styles.checked}`}></span>
          <span className={`fa fa-star ${styles.checked}`}></span>
          <span className={`fa fa-star ${styles.unchecked}`}></span> & Up 
        
      </li>
 
        <li onClick={() => onClickRating("3")}>
          <span className={`fa fa-star ${styles.checked}`}></span>
          <span className={`fa fa-star ${styles.checked}`}></span>
          <span className={`fa fa-star ${styles.checked}`}></span>
          <span className={`fa fa-star ${styles.unchecked}`}></span>
          <span className={`fa fa-star ${styles.unchecked}`}></span>& Up 
        {/* </Link> */}
      </li>
      <li onClick={() => onClickRating("2")}>
        
          <span className={`fa fa-star ${styles.checked}`}></span>
          <span className={`fa fa-star ${styles.checked}`}></span>
          <span className={`fa fa-star ${styles.unchecked}`}></span>
          <span className={`fa fa-star ${styles.unchecked}`}></span>
          <span className={`fa fa-star ${styles.unchecked}`}></span> & Up 
        
      </li>
      <li onClick={() => onClickRating("1")}>
        
          <span className={`fa fa-star ${styles.checked}`}></span>
          <span className={`fa fa-star ${styles.unchecked}`}></span>
          <span className={`fa fa-star ${styles.unchecked}`}></span>
          <span className={`fa fa-star ${styles.unchecked}`}></span>
          <span className={`fa fa-star ${styles.unchecked}`}></span> & Up 
        
      </li>
    </ul>
    <button className='btn btn-light btn-sm m-1 border' onClick={() => onClickRating("")}>Clear</button>
  </div>
  )
}
