import React,{useRef,useState,useEffect} from "react";
import CurrencyFormat from 'react-currency-format';
import { addToCart } from "../../Healper/Healper";
import { EditCart } from '../../Healper/EditCart';
function CartItem({Cart}) {
  const [number, setnumber] = useState(Cart.quantity);
  const InputNumber = useRef(null);
  useEffect(() => {
    console.log('UseEffect',Cart)
  }, [])
   const setNumbers = (e)=>{
    setnumber(e.target.value)
    console.log(InputNumber.current.value);
    EditCart(Cart.id,InputNumber.current.value,Cart)
   }
  return (
    <tr className="cart_item">
      <td className="product-remove">
        <a onClick={(e)=>{e.preventDefault();addToCart(Cart.id,0,Cart)}} title="Remove this item" className="remove" href="#">
          ×
        </a>
      </td>

      <td className="product-thumbnail">
        <a href="single-product.html">
          <img
            width="145"
            height="145"
            alt="poster_1_up"
            className="shop_thumbnail"
            src={Cart.image}
          />
        </a>
      </td>

      <td className="product-name">
        <a href="single-product.html">{Cart.title}</a>
      </td>

      <td className="product-price">
        <span className="amount"><CurrencyFormat value={Cart.price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></span>
      </td>

      <td className="product-quantity">
        <div className="quantity buttons_added">
          {/* <button type="button" className="minus" onClick={()=>{setnumber(number - 1);addToCarts(Cart.id,number,Cart)}}>-</button>                                         */}
          <input
            type="number"
            size="8"
            className="input-text qty text"
            title="Qty"
            value={number}
            ref={InputNumber}
            onChange={setNumbers}
          />
          {/* <button type="button" className="plus" onClick={()=>{setnumber(number + 1);addToCarts(Cart.id,number,Cart)}}>+</button> */}
        </div>
      </td>

      <td className="product-subtotal">
        <span className="amount"><CurrencyFormat value={Cart.price * Cart.quantity} displayType={'text'} thousandSeparator={true} prefix={'$'} /></span>
      </td>
    </tr>
  );
}

export default CartItem;
