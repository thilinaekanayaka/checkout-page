import React, { Fragment } from "react";
import './Cart.css';

const Cart = (props) => {
  // if (props.cart[0])
  //   console.log('cart props', props.cart[0].offer.offerLogic(2))

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
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {
                props.cart.map(item => {
                  return <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.itemCount}</td>
                    {
                      !item.offer ?
                        <td>{item.price * item.itemCount}</td> :
                        <td>offer</td>
                    }
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
