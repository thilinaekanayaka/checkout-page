import React, { Fragment } from 'react';
import './App.css';
import Item from './components/Item';

const App = () => {
  return (
    <Fragment>
      <Item test={"test text"} />
    </Fragment>
  );
}

export default App;
