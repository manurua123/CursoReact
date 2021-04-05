import React, {useState,useContext } from 'react';
import CartContext from '../../Context/CartContext'
import ItemCart from './ItemCart'
import './ItemCart.css'

const Cart =()=>{
    const context = useContext(CartContext);
    return(
        <div className='Cart'>
           {context.cart.map((item, index) => (
               <ItemCart key={index} item={item[0]} />
            ))}
               <button className={(context.cart.length > 0 ? 'cartButton' : 'noCartButton')} onClick={()=>context.clear()}> Limpiar Carrito</button>
        </div>
    )
}

export default Cart;



