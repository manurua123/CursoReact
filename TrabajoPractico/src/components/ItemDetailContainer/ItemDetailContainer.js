import React, { useState } from 'react';

import ItemDetail from '../ItemDetail/ItemDetail'
// import ItemCount from "../itemCount/ItemCount"
import { BrowserRouter as Router, Switch, Route, NavLink, useParams, } from "react-router-dom";
import ListaItems from "../../ListaItems"
import ItemCount from "../itemCount/ItemCount"


const ItemDetailContainer =() =>  {
  
  const {id}= useParams();
 
  const [detail] = (ListaItems.filter(i=>i.title===id));
  return(
    <div >
        <ItemDetail item={detail}/> 
    </div>
    )

}
export default ItemDetailContainer;

