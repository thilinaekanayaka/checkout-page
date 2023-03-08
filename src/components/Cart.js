import React, { Fragment } from "react";
import './Cart.css';

const Cart = (props) => {
  const roundUpValues = (value) => {
    return Math.round((value + Number.EPSILON) * 100) / 100
  }

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
                      !item.offer &&
                      <td>{roundUpValues(item.price * item.itemCount)}</td>
                    }
                    {item.offer && !item.offer.offerLogic(item.itemCount, item.price) &&
                      <td>{roundUpValues(item.price * item.itemCount)}</td>
                    }
                    {item.offer && item.offer.offerLogic(item.itemCount, item.price) &&
                      <td>{roundUpValues(item.offer.offerLogic(item.itemCount, item.price))}</td>
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
