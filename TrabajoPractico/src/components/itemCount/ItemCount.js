import { useState } from 'react';
import ItemButtons from './ItemButtons';
import React from 'react';

const ItemCount =()=>{
    const [stockActual,setStockActual] = useState(10);

    const restarStock =  (e,nuevoStock) => {
        e.preventDefault();
        setStockActual((stockActual)=> stockActual - nuevoStock);
    };
    return (
        <div className = 'ItemCount'>
            <ItemButtons stock={stockActual} initial={1} onAdd={restarStock}/>
        </div>
    );
};
export default ItemCount;