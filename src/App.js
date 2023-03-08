import React, { useState, Fragment } from 'react';
import './App.css';
import Item from './components/Item';
import Cart from './components/Cart';

// Demo purposes only. Ideally should come from a backend API that sends a JSON of items for sale.
const items = [
  {
    id: 1,
    name: `Kone`,
    price: 3488.99,
    offerID: 1
  },
  {
    id: 2,
    name: `Ironhide Cartridge`,
    price: 529.99,
    offerID: 0
  },
]

// Demo purposes only. Ideally should come from a backend API that sends a JSON of offer details.
const offers = [
  {
    offerID: 1,
    offerText: `When 3 or more Kone is purchased, you’ll get a discount where the price is dropped to RM 2588.99 per unit`,
    offerLogic: 0
  }
]

const App = () => {
  const [cart, setCartItems] = useState([]);

  // let itemDetails = items.find(item => item.id === 1);
  // console.log('itemDetails', itemDetails);

  const addItem = id => {
    console.log('item added to cart :', id)
  }

  const removeItem = id => {
    console.log('item removed from cart :', id)
  }

  return (
    <Fragment>
      <Item
        id={1}
        name={`Kone`}
        price={3488.99}
        addItem={addItem}
      />
      <Cart cart={cart} />
    </Fragment>
  );
}

export default App;
