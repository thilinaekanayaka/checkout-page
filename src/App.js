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
  {
    id: 3,
    name: `Ironhide`,
    price: 3299.99,
    offerID: 0
  },
  {
    id: 4,
    name: `Fox + Float`,
    price: 66.00,
    offerID: 0
  },
  {
    id: 5,
    name: `Shimano+ Derailuer`,
    price: 67.60,
    offerID: 0
  },
  {
    id: 6,
    name: `SANTA CRUZ`,
    price: 185.50,
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
  const [cart, setCartItems] = useState([])
  console.log('cart items', cart)

  const addItem = id => {
    const itemIndexInCart = cart.findIndex(item => item.id === id)
    if (itemIndexInCart !== -1) {
      const updatedItem = Object.assign({}, cart[itemIndexInCart]);
      updatedItem.itemCount = updatedItem.itemCount + 1
      const newCart = cart.slice()
      newCart[itemIndexInCart] = updatedItem
      setCartItems(newCart)
    }
    else {
      const itemDetails = items.find(item => item.id === id)
      itemDetails.itemCount = 1
      setCartItems(cart => [...cart, itemDetails])
    }
  }

  const removeItem = id => {
    const itemInCart = cart.find(item => item.id === id)
    if (itemInCart) {
      if (itemInCart.itemCount > 1) {
        const itemIndexInCart = cart.findIndex(item => item.id === id)
        const updatedItem = Object.assign({}, cart[itemIndexInCart]);
        updatedItem.itemCount = updatedItem.itemCount - 1
        const newCart = cart.slice()
        newCart[itemIndexInCart] = updatedItem
        setCartItems(newCart)
      } else {
        const newCart = cart.filter(item => item.id !== id)
        setCartItems(newCart)
      }
    }
  }

  return (
    <Fragment>
      {
        items.map(item => {
          return <Item
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            addItem={addItem}
            removeItem={removeItem}
          />
        })
      }
      <Cart cart={cart} />
    </Fragment>
  );
}

export default App;
