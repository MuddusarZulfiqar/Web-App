import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import CurrencyFormat from 'react-currency-format';
import {addToCart} from '../Healper/Healper';
function ProductCard({product}) {
    const {image,title,shareprice,price} = product;
    
    return (
        <>
           <div className="single-product">
               <span className={product.bestSale ? 'bestSale' : ''}>{product.bestSale ? 'Best Sale' : ''}</span>
                <div className="product-f-image">
                    <div className="product-image">
                        <img src={image} alt="" />
                    </div>
                    <div className="product-hover">
                        {
                            product.avalible >=1 ? <Link onClick={()=>addToCart(product.id,1,product)} to="#" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i>Add to cart</Link> : ''   
                        }
                        <Link to={`/product/${product.id.toString()}}`} className="view-details-link"><i className="fa fa-link"></i> See details</Link>
                    </div>
                </div>
                
                <h2>{title}</h2>
                <div className="product-carousel-price">
                    <ins><CurrencyFormat value={shareprice} displayType={'text'} thousandSeparator={true} prefix={'$'} /></ins> <del><CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></del>
                </div> 
            </div> 
        </>
    )
}

export default ProductCard
