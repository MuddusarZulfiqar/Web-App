import React,{useEffect,useState} from 'react'
import * as Bootstrap from "react-bootstrap";
import RelatedProducts from '../components/Product/RelatedProduct';
import { addToCart } from '../Healper/Healper';
import SearchField from '../common/SearchField';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import Loading from '../common/Loading'
import CurrencyFormat from 'react-currency-format';

function Product(props) {
    const [product, setproduct] = useState({})
    const [catigoryProduct, setcatigoryProduct] = useState([]);
    const [quantity, setquantity] = useState(1);
    useEffect(() => {
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
        let id = props.match.params.id.replace("}",'')
        fetch(`http://localhost:3004/products/${+id}`)
            .then((response) => response.json())
            .then((data) => {
                setproduct(data)
            })
            .catch((error) => console.log(error.message));
            fetch(`http://localhost:3004/products`)
            .then((response) => response.json())
            .then((data) => {
                const response = data;
                const relatedProduct = response.filter(item => product.category === item.category);
                setcatigoryProduct(relatedProduct)
                console.log(catigoryProduct);
                // setproduct(data)
                // console.log(product)
            })
            .catch((error) => console.log(error.message));
    }, [])
    console.log(quantity)
    const AddCart = ()=>{
        addToCart(product.id,quantity,product)
    }
    return (
        <>
            <div className="single-product-area">
                <div className="zigzag-bottom"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="single-sidebar">
                                <SearchField />
                            </div>
                        </div>
                        
                        <div className="col-md-8">
                            <div className="product-content-right">
                                
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="product-images">
                                            <div className="product-main-img">
                                                <img src={product.image} alt="" />
                                            </div>
                                            
                                            <div className="product-gallery">
                                                <img src="/img/product-thumb-1.jpg" alt="" />
                                                <img src="/img/product-thumb-2.jpg" alt="" />
                                                <img src="/img/product-thumb-3.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-sm-6">
                                        <div className="product-inner">
                                            <h2 className="product-name">{product.title}</h2>
                                            <div className="product-inner-price">
                                                <ins><CurrencyFormat value={product.shareprice} displayType={'text'} thousandSeparator={true} prefix={'$'} /></ins> <del><CurrencyFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></del>
                                            </div>    
                                            
                                            <div className="cart mb-4">
                                                <div className="quantity">
                                                    <input type="number" className="input-text qty text" title="Qty" onChange={(e)=>{setquantity(+e.target.value)}} value={quantity} name="quantity" min="1" step="1" max={product.avalible} />
                                                </div>
                                                {
                                                    product.avalible >=1 ? <button className="add_to_cart_button" onClick={AddCart}>Add to cart</button> : <button className="add_to_cart_button" disabled="true" style={{cursor:'no-drop'}}>Out of Stock</button>
                                                }
                                                
                                            </div>   
                                            
                                            <div className="product-inner-category">
                                                <p>Category: <a href="">{product.category}</a></p>
                                                <p>Status: <a href="" className={`${product.avalible === 0 ? 'text-danger':''} 'mt-5'`} className="">{product.avalible==0 ? 'Not In Stock' : 'In Stock'}</a></p>
                                            </div> 
                                            
                                            <Bootstrap.Tabs defaultActiveKey="detail" id="uncontrolled-tab-example" className="mb-3">
                                                <Bootstrap.Tab eventKey="detail" title="Description">
                                                    <p>{product.detail}</p>
                                                </Bootstrap.Tab>
                                                <Bootstrap.Tab eventKey="stars" title="Reviews">
                                                    <p>Product Get: {product.stars} Stars</p>
                                                </Bootstrap.Tab>
                                            </Bootstrap.Tabs>
                                            
                                        </div>
                                    </div>
                                </div>
                                <RelatedProducts catigoryProduct={catigoryProduct} />
                            </div>                    
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product
