import React from 'react';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    Redirect
   } from "react-router-dom";
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import './ItemList.css' 
import ItemDetail from '../ItemDetail/ItemDetail';

const Item = (props) =>(
    <Router>
        <ul className="ContenedoLink">
            <Link className="LinkProducto" to='/item/' >
                <li className="titulo">{props.item.title}</li>
                <li className="imagen">{props.item.img}</li>  
            </Link>
        </ul>
        <Switch>
        <Route>
         <Route path="/item" children={<ItemDetail item={props.item} />} />
        </Route>
   
         </Switch>
    </Router>
) 


export default Item;