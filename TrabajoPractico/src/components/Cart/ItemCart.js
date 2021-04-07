import React from 'react';
import './ItemCart.css'
import CartContext from '../../Context/CartContext'
import {useContext} from 'react';


function Item (props){
    const context = useContext(CartContext);
        return(
        
        <div className="ItemCart">
            <li className="titulo">{props.item[0].title}</li>
            <li className="imagen">{props.item[0].img}</li>
            <li className='descripcion' >Cantidad: {props.item[1]}</li>
            <button className='cartButton' onClick={()=>context.removeItem(props.item[0].title)}> Quitar</button>
        </div>

    )
}

export default Item;