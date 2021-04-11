import React from 'react';
import RouterApp from './routers/RouterApp'
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
