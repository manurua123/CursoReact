import React, {useState } from 'react';
import RouterApp from './routers/RouterApp'
import CartContext from './Context/CartContext'
import './App.css';
import CartProvider from './components/CartProvider/CartProvider';

function App() {


  return (
    <div className="App">
      <CartProvider>
        <RouterApp/>
      </CartProvider>
    </div>
  );
}

export default App;
