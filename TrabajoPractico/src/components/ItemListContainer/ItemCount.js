import {Component} from 'react'
import { useState } from "react";

const ItemCount=({stock, initial, onAdd})=>{
    return(
    <div>
         Disponibles:{stock} <br/>
        <input id="cantidad"type="number" placeholder={initial}/> <br/>
        <button onClick= {(e) => onAdd(e,1)}>Agregar al carrito</button>
    </div>
    )
}

export default ItemCount