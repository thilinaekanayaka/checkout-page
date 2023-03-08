import React, { Fragment } from "react";
import './Cart.css';

const Cart = (props) => {
  console.log('cart', props.cart)
  return (
    <Fragment>
      {props.cart.length === 0 &&
        <div>- cart empty -</div>
      }
    </Fragment>
  )
}

export default Cart;