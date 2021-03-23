import React from 'react';

import ItemDetail from '../ItemDetail/ItemDetail'
// import ItemCount from "../itemCount/ItemCount"
import { useParams } from 'react-router';
import ListaItems from "../../ListaItems"


const ItemDetailContainer =() =>  {
  const {title}= useParams()
  return(
    <div >
      <p> ESTO NO ANDA</p>
         {title}
        <ItemDetail items={ListaItems.filter(items=> items.title === title)}/> 
    </div>
    )

}
export default ItemDetailContainer;

