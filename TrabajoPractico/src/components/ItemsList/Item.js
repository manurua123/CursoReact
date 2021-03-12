import React from 'react';
import ItemCount from "../itemCount/ItemCount"
import './ItemList.css'

const Item = (props) =>(
    <ul className="producto">
     <li className="titulo">{props.item.title}</li>
     <li className="descripcion">{props.item.description}</li>
     <li className="imagen">{props.item.img}</li>
     <li className="precio"> precio: {props.item.price}</li>
     <li className="botones"><ItemCount stock= {props.item.stock}/></li>
    </ul>
)


export default Item;