import React from 'react'
import '../ItemsList/ItemList.css'
import ItemCount from "../itemCount/ItemCount"

const ItemDetail = (props)=> (
    <>
    <li className="titulo">{props.item.title}</li>
     <li className="imagen">{props.item.img}</li>
     <li className="precio"> <p>precio: </p> {props.item.price}</li>
     <li className="botones"><ItemCount stock= {props.item.stock}/></li>
    </>
)

export default ItemDetail;