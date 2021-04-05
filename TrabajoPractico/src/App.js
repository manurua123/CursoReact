import React, {useState } from 'react';
import RouterApp from './routers/RouterApp'
import CartContext from './Context/CartContext'
import './App.css';

function App() {
  const [carrito, setCarrito] = useState([]);
  
  const addItem = (item, cantidad)=> carrito.push([item, cantidad]);
  const removeItem = (tittle) =>{

  }
  const clear = () => setCarrito([])





  return (
    <div className="App">
      <CartContext.Provider value={{cart:carrito,addItem:addItem,removeItem:removeItem,clear:clear}}>
        <RouterApp/>
    </CartContext.Provider>
    </div>
  );
}

export default App;
