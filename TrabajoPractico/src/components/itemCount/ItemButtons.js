import {useState} from 'react';
import './ItemsButtons.css'
import React from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [valor, setDatos] = useState(initial)

    return (

        <div className='contenido'>
           Unidades Disponibles: {stock} <br/>
          <div className='box1'>
            <button  className="changeButton sub"  disabled={(valor < 2) ? true:false} onClick={() => {setDatos((valor) => valor -1)}}><i class="fas fa-minus"></i></button>

            {valor}

           <button className="changeButton add" disabled={(valor >= stock) ? true:false} onClick={() => setDatos((valor) => valor +1)}> <i class="fas fa-plus"></i> </button>
        </div>

        <button className={(valor > stock | valor < 1) ? 'noSendButton':'sendButton'}  disabled={(valor > stock | valor < 1) ? true:false} onClick={(e) => onAdd(e, valor)}>Agregar al carrito</button>
        </div>

    );
  };
  export default ItemCount;