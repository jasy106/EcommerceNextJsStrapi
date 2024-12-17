import Image from 'next/image';
import React from 'react';


import carousel1 from '../../assets/images/carousel/carousel1.png';
import carousel2 from '../../assets/images/carousel/carousel2.png';
import carousel3 from '../../assets/images/carousel/carousel3.png';

export default function Banner() {
return ( 
    <div>
            <div id="bannerCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Image src={carousel1} className="d-block w-100 h-50" alt="Banner Summer Collection"/>
                    </div>
                    <div className="carousel-item">
                        <Image src={carousel2} className="d-block w-100 h-50" alt="Banner Summer Collection"/>
                    </div>
                    <div className="carousel-item">
                    <Image src={carousel3} className="d-block w-100 h-50" alt="Banner Summer Collection"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#bannerCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#bannerCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
    </div> );
}
