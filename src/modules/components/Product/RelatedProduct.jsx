import React from 'react'
import ProductCard from '../../common/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
function RelatedProduct({catigoryProduct}) {
    return (
        <>
            <div className="related-products-wrapper">
                {
                    catigoryProduct.length != 0 ? <h2 className="related-products-title">Related Products</h2> : ''
                }
                <Swiper spaceBetween={20}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{ delay: 5000,disableOnInteraction: true, }}  className="related-products-carousel">
                    
                        {
                            catigoryProduct.map((product)=>{
                                return(
                                    <SwiperSlide key={product.id}>
                                        <ProductCard product={product} />
                                    </SwiperSlide>
                                )
                            })
                        }                               
                </Swiper>
            </div>
        </>
    )
}

export default RelatedProduct
