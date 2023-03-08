import React, { Fragment } from "react";
import './Cart.css';

const Cart = (props) => {
  console.log('cart props', props.cart)

  return (
    <Fragment>
      {props.cart.length === 0 ?
        <div className="card-heading">- cart empty -</div> :
        <div>
          <label className="card-heading">Shopping Cart Summary</label>
          <table>
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Unit Price</th>
              </tr>
            </thead>
            <tbody>
              {
                props.cart.map(item => {
                  return <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.itemCount}</td>
                    <td>{item.price}</td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      }
    </Fragment>
  )
}

export default Cart;
