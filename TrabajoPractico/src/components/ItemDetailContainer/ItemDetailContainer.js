import React from 'react';

import ItemDetail from '../ItemDetail/ItemDetail'
import ItemCount from "../itemCount/ItemCount"




const ItemDetailContainer =(props) =>  {
  return(
    <div >
        <li className="titulo">{props.item.title}</li>
        <li className="imagen">{props.item.img}</li>

    </div>
    )

}
export default ItemDetailContainer;

