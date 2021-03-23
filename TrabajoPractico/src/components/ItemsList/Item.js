import React from 'react';


import { Link } from "react-router-dom";
// import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import './ItemList.css' 
// import ItemDetail from '../ItemDetail/ItemDetail';

function Item (props){
        return(

        <div className="ContenedoLink">
            <Link className="LinkProducto" to={`item/${props.item.title}`} >
                <li className="titulo">{props.item.title}</li>
                <li className="imagen">{props.item.img}</li>
            </Link>
        </div>

    )
}

export default Item;