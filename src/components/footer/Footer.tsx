import React from 'react'
import Link from 'next/link'

export default function Footer() {
  console.log("Footer component called");
  return (
    <div >
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 p-4 "style={{backgroundColor : "lightgray"}}>
      <div className="col">
        <div className="card ">        
          <div className="card-body">
            <div className="footer-links d-flex flex-column">
                <h4 className="fw-light text-muted fw-bold ">ABOUT</h4>
    
                <Link href="#" className='text-secondary text-decoration-none fw-bold fs-6 p-1'>Contact Us</Link>
                <Link href=""  className='text-secondary text-decoration-none fw-bold fs-6 p-1'>About Us</Link>
                <Link href="" className='text-secondary text-decoration-none fw-bold fs-6 p-1'>Careers</Link>
                <Link href="" className='text-secondary text-decoration-none fw-bold fs-6 p-1'>Fast Shopping Stories </Link>
                <Link href=""  className='text-secondary text-decoration-none fw-bold fs-6 p-1'>Press</Link>
                <Link href=""  className='text-secondary text-decoration-none fw-bold fs-6 p-1'>Corporate Information</Link>
              </div>
          </div>
        </div>
      </div>
        <div className="col">
          <div className="card ">
           
            <div className="card-body">
            <div className="footer-links d-flex flex-column">
                <h4 className="fw-light text-muted fw-bold fs-custom">GROUP COMPANIES</h4>
    
                <Link href=""  className='text-secondary text-decoration-none fw-bold fs-6 p-1'>Mintra</Link>
                <Link href=""  className='text-secondary text-decoration-none fw-bold fs-6 p-1'>Shopeasy</Link>
                <Link href=""  className='text-secondary text-decoration-none fw-bold fs-6 p-1'>Cleartravel</Link>
              </div>
         </div>
          </div>
        </div>
        <div className="col">
          <div className="card bg-color  ">
           
            <div className="card-body">
            <div className="footer-links d-flex flex-column">
                <h4 className="fw-light text-muted fw-bold  fs-custom">HELP</h4>
    
                <Link href=""  className='text-secondary text-decoration-none fw-bold fs-6 p-1'>Payments</Link>
                <Link href=""  className='text-secondary text-decoration-none fw-bold fs-6 p-1'>Shipping</Link>
                <Link href=""  className='text-secondary text-decoration-none fw-bold fs-6 p-1'>Cancellation</Link>
                <Link href=""  className='text-secondary text-decoration-none fw-bold fs-6 p-1'>FAQ</Link>
                <Link href=""  className='text-secondary text-decoration-none fw-bold fs-6 p-1'>Report Infringment</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card bg-color  ">
           
            <div className="card-body">
            <div className="footer-links d-flex flex-column">
                <h4 className="fw-light text-muted fw-bold fs-custom">CONSUMER POLICY</h4>
    
                <Link href=""  className='text-secondary text-decoration-none fw-bold fs-6 p-1'>Cancellation & Returns</Link>
                <Link href=""  className='text-secondary text-decoration-none fw-bold fs-6 p-1'>Terms of Use</Link>
                <Link href=""  className='text-secondary text-decoration-none fw-bold fs-6 p-1'>Security</Link>
                <Link href=""  className='text-secondary text-decoration-none fw-bold fs-6 p-1'>Privacy </Link>
                <Link href=""  className='text-secondary text-decoration-none fw-bold fs-6 p-1'>Sitemap</Link>
                <Link href=""  className='text-secondary text-decoration-none fw-bold fs-6 p-1'>Corporate Information</Link>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}
