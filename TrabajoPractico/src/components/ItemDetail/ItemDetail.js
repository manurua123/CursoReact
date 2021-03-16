import React from 'react'
import './ItemDetail.css'

const ItemDetail = (props )=> (
    <>
    
    <li className="titulo">{props.item.title}</li>
    <li className="imagen">{props.item.img}</li>
    <li className="precio"> <p>precio:</p> {props.item.price}</li>
    
    </>
)

export default ItemDetail;