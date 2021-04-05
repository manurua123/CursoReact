import React from 'react';
import './ItemCart.css'
import CartContext from '../../Context/CartContext'
import {useContext, useState} from 'react';


function Item (props){
    const context = useContext(CartContext);
        return(
        
        <div className="ItemCart">
            <li className="titulo">{props.item.title}</li>
            <li className="imagen">{props.item.img}</li>
            <button className={(context.cart.length > 0 ? 'cartButton' : 'noCartButton')} onClick={()=>context.removeItem(props.item.title)}> Quitar</button>
        </div>

    )
}

export default Item;