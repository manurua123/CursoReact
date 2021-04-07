import React from 'react';
import './ItemDetail.css';
import ItemCount from "../itemCount/ItemCount"

const ItemDetail = (props)=> {

  return(
  <ul  className="producto">
        <li className="titulo">{props.item.title}</li>
        <li className="imagen">{props.item.img}</li>
        <li className='descripcion'>{props.item.description}</li>
        <li className="precio">Precio: ${props.item.price}</li>
        <ItemCount item= {props.item}/>
  </ul>
  )
}


export default ItemDetail;