import React from 'react'
import Image from 'next/image';

import contactusImage from '../../assets/images/contactus/contactus.jpg';
import phoneImage from '../../assets/images/contactus/phone.png';
import emailImage from '../../assets/images/contactus/email.png';

export default function ContactUs() {
  return ( 
    <div className="d-flex ">
        <div className="col-lg-6 col-md-12  text-center d-flex align-items-center">
            
            <div className=" d-flex  m-4">
                <div className="col-12 col-md-6 mb-4 ">
                    <div className="card  d-flex flex-column align-items-center m-4 p-4">
                        <Image src={phoneImage} alt="phoneImage" height={50} width={50}></Image>
                        <h5>Talk to Sales</h5>
                        <div className="card-body">
                            <p>Just pick up the phone to chat with a member of our Sales Team.</p>
                            <p>(+12) 0123456789</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 mb-4 ">
                    <div className="card  d-flex flex-column align-items-center m-4 p-4">
                        <Image src={emailImage} alt="emailImage" height={50} width={50}></Image>
                        <h5>Contact Customer Support</h5>
                        <div className="card-body">
                            <p>Sometimes you need some little help.Don't worry we are here.</p>
                            <button className='btn btn-secondary'>Contact Support</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <div >
</div>
<div className="col-lg-6 col-md-12 "  >
    <Image src={contactusImage} alt="ContactUs Image" style={{objectFit:"fill" ,height:"80vh",width:"50vw" }}></Image>
</div>
</div>
);
}
