import React from 'react';
import './ItemDetail.css';
import ItemCount from "../itemCount/ItemCount"

const ItemDetail = (props)=> {

  return(
  <ul  className="producto">
         <li className="titulo">{props.title}</li>
        <li className="imagen">{props.img}</li>
        <li className='descripcion'>{props.description}</li>
        <li className="precio"> <p>precio:</p> {props.price}</li>
        <ItemCount stock= {props.stock}/>
  </ul>
  )
}


export default ItemDetail;