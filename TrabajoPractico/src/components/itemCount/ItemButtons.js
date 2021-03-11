import {useState} from 'react';
import './ItemsButtons.css'

const ItemCount = ({ stock, initial, onAdd }) => {
  const [datos, setDatos] = useState({
    cantidad: initial,
})



    return (
      <form className='formulario'>
        <div className='contenido'>
          Unidades Disponibles: {stock}
          <br />

           <button onClick={() => setDatos((cantidad) => cantidad +1)}><i class="fas fa-minus"></i></button> 

          <input type="number" min="1" max={stock} value={datos.cantidad} onChange={(e) => {
            const { value } = e.target
            setDatos({ cantidad: value })
          }} />

         <button onClick={() => setDatos((cantidad) => cantidad +1)}> <i class="fas fa-plus"></i> </button>

          <br />
          <button className="myButton" onClick={(e) => onAdd(e, datos.cantidad)}>Agregar al carrito</button>
        </div>
      </form>
    );
  };
  export default ItemCount;