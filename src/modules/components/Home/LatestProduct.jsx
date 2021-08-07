import React, {useState,useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import ProductCard from '../../common/ProductCard';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import Loading from '../../common/Loading';
function LatestProduct() {
    SwiperCore.use([Autoplay])
    const [products, setproducts] = useState([]);
    const [loading, setloading] = useState(false)
    useEffect(() => {
        const userAction = async () => {
            setloading(true)
            const response = await fetch('http://localhost:3004/products');
            setloading(false)
            const myJson = await response.json(); //extract JSON from the http response
            
            setproducts(myJson)
            console.log(products)
        }
        userAction();
    }, [])
    return (
        <>
          <div className="maincontent-area">
                <div className="zigzag-bottom"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="latest-product">
                                <h2 className="section-title">Latest Products</h2>
                                <Loading isLoading={loading} />
                                <Swiper spaceBetween={20}
                                        slidesPerView={5}
                                        loop={true}
                                        autoplay={{ delay: 5000,disableOnInteraction: true, }} 
                                        className="product-carousel">
                                            {
                                                products.map((slides,index)=>{
                                                    return(
                                                        <SwiperSlide key={index}>
                                                            <ProductCard product={slides} />
                                                        </SwiperSlide>
                                                    )
                                                })
                                            }
                                    
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default LatestProduct
