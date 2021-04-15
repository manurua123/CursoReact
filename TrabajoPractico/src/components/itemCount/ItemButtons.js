import { useContext, useState } from 'react';
import './ItemsButtons.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import CartContext from '../../Context/CartContext'

const ItemCount = ({ stock, initial, onAdd, item }) => {
  const [valor, setDatos] = useState(initial)
  const context = useContext(CartContext);
  return (

    <div className='contenido'>
      Unidades Disponibles: {stock} <br />
      <div className='box1'>
        <button className="changeButton sub" disabled={(valor < 1) ? true : false} onClick={() => { setDatos((valor) => valor - 1) }}><i class="fas fa-minus"></i></button>
        {valor}
        <button className="changeButton add" disabled={(valor >= stock) ? true : false} onClick={() => setDatos((valor) => valor + 1)}> <i class="fas fa-plus"></i> </button>
      </div>
      <div className='botones'>
        <button className={(valor > stock | valor < 1) ? 'noSendButton' : 'sendButton'} disabled={(valor > stock | valor < 1) ? true : false} onClick={
          (e) => {
            onAdd(e, valor);
            context.addItem(item, valor)
          }}
        >Agregar al carro</button>
        <NavLink className={(valor > 0 & valor <= stock) ? 'cartButton' : 'noCartButton'} to='/cart' onClick={() => context.addItem(item, valor)}>Comprar</NavLink>

      </div>
    </div>

  );
};
export default ItemCount;