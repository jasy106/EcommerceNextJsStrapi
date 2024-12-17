'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from '../../styles/Categories.module.css';


import Category1 from '../../assets/images/category/Category1.png';
import Category2 from '../../assets/images/category/Category2.png';
import Category3 from '../../assets/images/category/Category3.jpg';
import Category4 from '../../assets/images/category/Category4.png';
import Category5 from '../../assets/images/category/Category5.png';
import Category6 from '../../assets/images/category/Category6.png';


function Categories() {
    const router=useRouter();
    const onClickCategory=(category:string)=>{
        router.push(`/products?category=${category}`);
    }
   return ( 

        <div className="container">
            <div className="row m-4 ">
                <h2>Categories</h2>
                
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 " style={{ cursor: 'pointer' }}>
                        <div className="card border-0" onClick={()=>{onClickCategory("mensClothing")}} >
                            <Image src={Category1} className={styles.roundedCircle}  alt="Mens Clothing" />
                        </div>
                        <p className='text-center '>Mens Clothing</p>
                    </div>
                
                <div className="col-6 col-sm-4 col-md-3 col-lg-2" style={{ cursor: 'pointer' }}>
                    <div className="card border-0" onClick={()=>{onClickCategory("womensClothing")}} >
                        <Image src={Category2} className={styles.roundedCircle} alt="Womens Clothing" />
                    </div>
                    <p className='text-center '>Womens Clothing</p>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2" style={{ cursor: 'pointer' }}>
                    <div className="card border-0" onClick={()=>{onClickCategory("jewellery")}} >
                        <Image src={Category3}className={styles.roundedCircle} alt="Jewellery" />
                    </div>
                    <p className='text-center '>Jewellery </p>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2" style={{ cursor: 'pointer' }}>
                    <div className="card border-0" onClick={()=>{onClickCategory("electronics")}} >
                        <Image src={Category4} className={styles.roundedCircle} alt="Electronics" />
                    </div>
                    <p className='text-center '>Electronics </p>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2" style={{ cursor: 'pointer' }}>
                    <div className="card border-0" onClick={()=>{onClickCategory("perfumes")}} >
                        <Image src={Category5} className={styles.roundedCircle} alt="Perfumes" />
                    </div>
                    <p className='text-center '>Perfumes</p>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2" style={{ cursor: 'pointer' }}>
                    <div className="card border-0" onClick={()=>{onClickCategory("shoes")}} >
                        <Image src={Category6} className={styles.roundedCircle} alt="Shoes" />
                    </div>
                    <p className='text-center '>Shoes</p>
                </div>        
            </div>
        </div>
        
     );
}

export default Categories;