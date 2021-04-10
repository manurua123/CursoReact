import React, {useContext }  from 'react';
import CartContext from '../../Context/CartContext'
import './CartWidget.css'

function CartWidget() {
    const context = useContext(CartContext);
    return (
        <div className='CartWidget'>
            <i className="fas fa-dolly nav-links"></i>
            {context.cantidad !== 0 ? <p>{context.cantidad}</p> : null}
        </div>
    )
}
export default CartWidget;