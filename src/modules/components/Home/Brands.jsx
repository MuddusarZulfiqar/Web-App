import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
function Brands() {
    const brandImages = [
        "img/brand1.png",
        "img/brand2.png",
        "img/brand3.png",
        "img/brand4.png",
        "img/brand5.png",
        "img/brand6.png",
        "img/brand1.png",
        "img/brand2.png",
    ]
    return (
        <>
           <div className="brands-area">
                <div className="zigzag-bottom"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="brand-wrapper">
                                <Swiper spaceBetween={20}
                                        slidesPerView={4}
                                        loop={true}
                                        autoplay={{ delay: 3000,disableOnInteraction: true, }} className="brand-list">
                                        {
                                            brandImages.map((brand,index)=>{
                                                return(
                                                    <SwiperSlide key={index}>
                                                        <img src={brand} alt="" />
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

export default Brands
