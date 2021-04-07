import React, {useState } from 'react';
import RouterApp from './routers/RouterApp'
import CartContext from './Context/CartContext'
import './App.css';

function App() {

  const [carrito, setCarrito] = useState([]);

  /* esto esta mal programado y no funciona si primero agregar un item al carro y depues vas a terminar compra*/
  const addItem = (item, cantidad)=> {
    if(carrito.length===0){
      carrito.push([item,cantidad])
    }
    else
      var ok= true;
      carrito.map((i)=> {
      if( (!i.includes(item)) && ok){
        carrito.push([item,cantidad])
        ok= false;
      }
      }
    )
  }
  const removeItem = (title) => {
    carrito.map((i)=> {
      if ( (i[0].title === title)) {
        var index = carrito.indexOf(i)
        if(index > -1)
          carrito.splice(index,1) 
    }})}

    const clear = () => setCarrito([])

    function isInCart (title){
      let ok = false;
      carrito.map((i)=>{
        if(i[0].title===title)
          ok = true
      })
      return ok
    }

    

    
  return (
    <div className="App">
      <CartContext.Provider value={{cart:carrito,addItem:addItem,removeItem:removeItem,clear:clear, isInCart:isInCart}}>
        <RouterApp/>
    </CartContext.Provider>
    </div>
  );
}

export default App;
