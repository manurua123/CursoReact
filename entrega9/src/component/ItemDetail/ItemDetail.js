import React, { useState } from 'react';
import './ItemDetail.css';
import ItemCount from "../itemCount/ItemCount"

const ItemDetail = (props)=> {
  const [stockActual,setStockActual] = useState(props.item.stock);
  return(
  <ul  className="producto">
        <li className="titulo">{props.item.title}</li>
        <li className="imagen">{props.item.img}</li>
        <li className="precio"> <p>precio:</p> {props.item.price}</li>
        <li> <ItemCount stock= {stockActual}/> </li>
        
  </ul>
  )
}


export default ItemDetail;