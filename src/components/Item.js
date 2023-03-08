import React, { useState, useEffect, Fragment } from "react";

const Item = (props) => {
  return (
    <Fragment>
      item desc : {props.test}
    </Fragment>
  )
}

export default Item;
