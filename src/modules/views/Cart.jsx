import React, { useEffect, useState } from "react";
import SearchField from "../common/SearchField";
import CartItem from "../components/Cart/CartItem";
import { Scrollbar } from "smooth-scrollbar-react";
import { addToCart } from "../Healper/Healper";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";
function Cart() {
  const [cartItems, setcartItems] = useState([]);
  const [cartTotal, setcartTotal] = useState(0);
  useEffect(() => {
    fetch(`http://localhost:3004/cart`)
      .then((response) => response.json())
      .then((data) => {
        // localStorage.setItem('CardItems', JSON.stringify(response));
        const response = data;
        setcartItems(response);
        const productTotalArr = response
          .map((product) => {
            return product.quantity * product.price;
          })
          .reduce((acc, val) => {
            return acc + val;
          }, 0);
        setcartTotal(productTotalArr);
      })
      .catch((error) => console.log(error.message));
  }, []);
  if(cartItems.length>0){
  return (
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
              <div className="woocommerce">
                <form method="post" action="#">
                  <table cellSpacing="0" className="shop_table cart">
                    <thead>
                      <tr>
                        <th className="product-remove">&nbsp;</th>
                        <th className="product-thumbnail">&nbsp;</th>
                        <th className="product-name">Product</th>
                        <th className="product-price">Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-subtotal">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((cartItem) => {
                        return (
                          <CartItem
                            key={cartItem.id}
                            Cart={cartItem}
                          />
                        );
                      })}

                      <tr>
                        <td className="actions" colSpan="6">
                          <input
                            type="submit"
                            value="Checkout"
                            name="proceed"
                            className="checkout-button button alt wc-forward"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </form>
                <div className="cart-collaterals">
                  <div className="cart_totals ">
                    <h2>Cart Totals</h2>
                    <table cellSpacing="0">
                      <tbody>
                        <tr className="cart-subtotal">
                          <th>Cart Subtotal</th>
                          <td>
                            <span className="amount">
                              <CurrencyFormat
                                value={cartTotal}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                              />
                            </span>
                          </td>
                        </tr>

                        <tr className="shipping">
                          <th>Shipping and Handling</th>
                          <td>Free Shipping</td>
                        </tr>

                        <tr className="order-total">
                          <th>Order Total</th>
                          <td>
                            <strong>
                              <span className="amount">
                                <CurrencyFormat
                                  value={cartTotal}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                  prefix={"$"}
                                />
                              </span>
                            </strong>{" "}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
else{
  return(
    <div className="single-product-area">
      <div className="zigzag-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="single-sidebar">
                <SearchField />
              </div>
            </div>
            <div className="col-md-8 mt-5 text-center">
              <h4>Cart is Empity <Link to="/">Goto Home !</Link> </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default Cart;
