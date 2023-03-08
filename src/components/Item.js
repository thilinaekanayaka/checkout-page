import React, { Fragment } from "react";
import './Item.css';

const Item = (props) => {
  return (
    <Fragment>
      <div className="name">{props.name}</div>
      <div className="price">RM {props.price}</div>
      {props.offer && props.offer != `` &&
        <div className="offer">Offer: {props.offer}</div>
      }
      <div className="add"><button className="add-button" onClick={() => props.addItem(props.id)}>Add to cart</button></div>
      <hr />
    </Fragment>
  )
}

export default Item;
