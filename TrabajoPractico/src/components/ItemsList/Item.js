import React from 'react';
import { Link } from "react-router-dom";

import './ItemList.css' 


function Item (props){
        return(

        <div className="ContenedoLink">
            <Link className="LinkProducto" to={`/item/${props.item.title}`} >
                <li className="titulo">{props.item.title}</li>
                <li className="imagen">{props.item.img}</li>
            </Link>
        </div>

    )
}

export default Item;