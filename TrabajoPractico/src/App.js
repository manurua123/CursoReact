import React from 'react';
import RouterApp from './routers/RouterApp'
import './App.css';
import CartProvider from './components/CartProvider/CartProvider';
import ListaItems2 from './listaItems2';

function App() {

  return (
    <div className="App">
      {/* <ListaItems2/> */}
       <CartProvider>
        <RouterApp/>
      </CartProvider>  
    </div>
  );
}

export default App;
