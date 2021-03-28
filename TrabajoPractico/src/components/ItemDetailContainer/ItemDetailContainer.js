import React from 'react';

import ItemDetail from '../ItemDetail/ItemDetail'
// import ItemCount from "../itemCount/ItemCount"
import { BrowserRouter as Router, Switch, Route, NavLink, useParams, } from "react-router-dom";
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

