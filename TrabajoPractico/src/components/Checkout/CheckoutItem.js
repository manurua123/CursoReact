import React from 'react';
import './Checkout.css'

function CheckoutItem(props) {
    return (

        <ul className='ItemCartDetail' >
            <li className="imagen">{props.item[0].img}</li>
            <li className="titulo">{props.item[0].title} </li>
            <li className='cantidad' >Cantidad: <br />{props.item[1]}</li>
            <li className='cantidad' >Precio: <br />${props.item[0].price * props.item[1]}</li>
        </ul>

    )
}

export default CheckoutItem;