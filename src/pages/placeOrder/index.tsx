'use client'
import React from 'react'
import Link from 'next/link';


export default function PlaceOrder() {
  return (
    <div className="container text-center py-5">
      <h1 className="text-success mb-4">Thank You for Shopping with Us!</h1>
      <p className="lead">
        Your order has been successfully placed. We appreciate your business and look forward to serving you again.
      </p>
      <p>
        You will receive an email confirmation shortly. If you have any questions about your order, feel free to{' '}
        <Link href="/contactus" className="text-secondary">
          contact us
        </Link>.
      </p>
      <div className="mt-5">
        <Link href="/products">
          <button className="btn btn-secondary">Continue Shopping</button>
        </Link>
        <Link href="/">
          <button className="btn btn-secondary ms-3">Go to Home</button>
        </Link>
      </div>
    </div>
  );
}
