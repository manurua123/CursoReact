import React from 'react';
import { useState } from 'react';
import ItemButtons from './ItemButtons';


const ItemCount =(props)=>{
    const [stockActual,setStockActual] = useState(props.stock);

    const restarStock =  (e,nuevoStock) => {
        e.preventDefault();
        setStockActual((stockActual)=> stockActual - nuevoStock);
    };
    return (
        <div className = 'ItemCount'>
             {(stockActual>0) ?  <ItemButtons stock={stockActual} initial={0} onAdd={restarStock}/> : <p>STOCK NO DISPONIBLE</p> }
            
        </div>
    );
};
export default ItemCount;