import React, {useContext }  from 'react';
import CartContext from '../../Context/CartContext'
import './CartWidget.css'

function CartWidget() {
    const context = useContext(CartContext);
    function ContarProductos(){
        var total= 0.
        context.cart.map((i)=>{
            total = total + i[1]
            console.log(i[1]);
        })
        return(
            <p> {total} </p>
        );
    }
    function MostrarCantidad(){
        return  (
            (context.cart.length !== 0 ? <ContarProductos/> : null )
        )
    }
    return (
        <div className='CartWidget'>
            <i className="fas fa-dolly nav-links"></i>
         <MostrarCantidad/>
        </div>
    )
}
export default CartWidget;