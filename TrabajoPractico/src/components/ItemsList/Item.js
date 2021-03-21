import React from 'react';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    Redirect,useRouteMatch,
   } from "react-router-dom";
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import './ItemList.css' 
import ItemDetail from '../ItemDetail/ItemDetail';

function Item (props){
    let match = useRouteMatch();
    return(
    <Router>
        <div className="ContenedoLink">
        <Link className="LinkProducto" to={`/item/${props.item.title}`} >
            <li className="titulo">{props.item.title}</li>
            <li className="imagen">{props.item.img}</li>
            </Link>
        </div>
    </Router>
    )
}


export default Item;