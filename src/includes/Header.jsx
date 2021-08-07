import React,{useEffect,useState} from 'react'
import CurrencyFormat from 'react-currency-format';
// import * as ReactBootstrap from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Header() {
    const [cardCounter, setcardCounter] = useState(0);
    const [cartProduct, setcartProduct] = useState([]);
    const [total, settotal] = useState(0)
    useEffect(() => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'http://localhost:3004/subscribe'); 
            xhr.send(); 
            xhr.onload = function() {
            if (xhr.status != 200) { 
                alert(`Error ${xhr.status}: ${xhr.statusText}`); 
            } else { 
                let response = JSON.parse(xhr.responseText)
                setcardCounter(response.length)
            }
        }
        fetch(`http://localhost:3004/cart`)
        .then((response) => response.json())
        .then((data) => {
            const response = data;
            localStorage.setItem('CardItems', JSON.stringify(response));
            setcartProduct(response);
            const getTotal = ()=>{
                const productTotalArr =  response.map((product)=>{
                     return product.quantity * product.price
                 }).reduce( (acc,val)=>{
                     return acc+val
                  },0);
                  console.log(productTotalArr)
                  settotal(productTotalArr)
                  localStorage.setItem('CartTotal', JSON.stringify(productTotalArr));
             }
             getTotal();
        })
        .catch((error) => console.log(error.message));
        
    },[])
    setInterval(() => {
        setcardCounter(JSON.parse(localStorage.getItem('CardItems')).length)
        settotal(JSON.parse(localStorage.getItem('CartTotal')))
    }, 100);

    return (
        <>
           <div className="site-branding-area">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="logo">
                                <h1><NavLink to="/"><img src="img/logo.png" alt="logo" /></NavLink></h1>
                            </div>
                        </div>
                        
                        <div className="col-sm-6">
                            <div className="shopping-item">
                                <Link to="/cart">Cart - <span className="cart-amunt"><CurrencyFormat value={total} displayType={'text'} thousandSeparator={true} prefix={'$'} /></span> <i className="fa fa-shopping-cart"></i> <span className="product-count">{cardCounter}</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mainmenu-area">
                <div className="container">
                    <div className="row">
                        <div className="navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li><NavLink activeClassName="active" to="/" exact>Home</NavLink></li>
                                <li><NavLink activeClassName="active" to="shop.html">Shop page</NavLink></li>
                                <li><NavLink activeClassName="active" to="single-product.html">Single product</NavLink></li>
                                <li><NavLink activeClassName="active" to="/cart">Cart</NavLink></li>
                                <li><NavLink activeClassName="active" to="/checkout">Checkout</NavLink></li>
                                <li><NavLink activeClassName="active" to="/Category">Category</NavLink></li>
                                <li><NavLink activeClassName="active" to="/other">Others</NavLink></li>
                                <li><NavLink activeClassName="active" to="/content">Contact</NavLink></li>
                            </ul>
                        </div> 
                         
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
