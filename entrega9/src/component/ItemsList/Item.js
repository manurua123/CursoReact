import React from 'react';


import { Link } from "react-router-dom";
// import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import './ItemList.css' 
import ItemDetail from '../ItemDetail/ItemDetail';

function Item (props){
        return(

        <div className="ContenedoLink">
            <ItemDetail item={props.item}/>
        </div>

    )
}

export default Item;