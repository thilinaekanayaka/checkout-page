import React, { Fragment } from 'react';
import './App.css';
import Item from './components/Item';

const App = () => {
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
        offer={`When 3 or more Kone is purchased, you’ll get a discount where the price is dropped to RM 2588.99 per unit`}
        addItem={addItem}
      />
      <Item
        id={2}
        name={'Ironhide Cartridge'}
        price={529.99}
        offer={``}
        addItem={addItem}
      />
    </Fragment>
  );
}

export default App;
