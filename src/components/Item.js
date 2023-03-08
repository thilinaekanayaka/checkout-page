import React, { useState, useEffect, Fragment } from "react";
import './Item.css';

const Item = (props) => {
  return (
    <Fragment>
      <div>{props.name}</div>
      <div>RM {props.price}</div>
      <div>Offer: {props.offer}</div>
      <div><button onClick={() => props.addItem(props.id)}>Add to cart</button></div>
    </Fragment>
  )
}

export default Item;
