import React from 'react'
import Image from 'next/image';
import teamImage from '../../assets/images/about/team.jpg';
import missionImage from '../../assets/images/about/mission.jpg';
import introductionImage from '../../assets/images/about/aboutus.png';

export default function AboutUs() {
    return (
        <>
            {/* Section 1: Introduction */}
            <div className=" mb-5 d-flex align-items-center" 
                style={{
                    height: "40vh", 
                    width: "100vw", 
                    backgroundImage: `url(${introductionImage.src})`,
                    backgroundSize: "cover", 
                    backgroundPosition: "center", 
                    backgroundRepeat: "no-repeat"
                }}>
                <div className=" text-center"style={{ width: "90%", maxWidth: "600px", color: "#fff" }}>
                    <h1 className='p-2'>About Us</h1>
                    <p className='fs-5 m-3'>Welcome to <strong><i>ShopQuik</i></strong>, where quality meets convenience! 
                    We are dedicated to offering you the best selection of products, backed by our commitment to customer satisfaction.</p>
                </div>
            </div>
    
            <div className="container my-5">
                {/* Section 2: Mission Statement */}
                <div className="row align-items-center mb-5">
                    <div className="col-md-6 mb-3 mb-md-0">
                        <Image src={missionImage} alt="Our Mission" className="img-fluid rounded" />
                    </div>
                    <div className="col-md-6">
                        <h2>Our Mission</h2>
                        <p>Our mission is to provide top-quality products that enhance your lifestyle, 
                            from home essentials to the latest trends. We believe in delivering value, sustainability, 
                            and a seamless shopping experience that you can trust.</p>
                    </div>
                </div>
    
                {/* Section 3: Our Story */}
                <div className="row align-items-center mb-5">
                    <div className="col-md-6 order-md-2 mb-3 mb-md-0">
                        <Image src={teamImage} alt="Our Team" className="img-fluid rounded" />
                    </div>
                    <div className="col-md-6 order-md-1">
                        <h2>Our Story</h2>
                        <p>Founded in 2020, <strong><i>ShopQuik</i></strong> started as a small venture with big dreams. 
                        From humble beginnings, we've grown into a trusted e-commerce brand, thanks to our loyal 
                        customers and our commitment to excellence.</p>
                    </div>
                </div>
    
                {/* Section 4: Values */}
                <div className="text-center mb-5">
                    <h2>Our Values</h2>
                    <ul className="list-unstyled">
                        <li><strong>Customer First:</strong> Your satisfaction is our priority.</li>
                        <li><strong>Quality:</strong> We strive to deliver the best products available.</li>
                        <li><strong>Integrity:</strong> We believe in transparency and fairness.</li>
                        <li><strong>Sustainability:</strong> We’re committed to eco-friendly practices.</li>
                    </ul>
                </div>
    
                {/* Section 5: Call to Action */}
                <div className="text-center mt-5">
                    <h2>Join Our Community</h2>
                    <p>We’d love for you to be a part of our journey! Follow us on social media, sign up for our newsletter, and stay connected.</p>
                    <button className="btn btn-secondary">Shop Now</button>
                </div>
            </div>
        </>
    );
}
