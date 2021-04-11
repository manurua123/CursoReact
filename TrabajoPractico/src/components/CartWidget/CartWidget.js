import React, {useContext }  from 'react';
import CartContext from '../../Context/CartContext'
import './CartWidget.css'

function CartWidget() {
    const context = useContext(CartContext);
 
    function cantElementos(){
        var total= 0.
        context.cart.map((i)=>{
            total = total + (i[1]);  
            console.log('que pasa aca')
        })
        return total;
        }
    
    return (
        <div className='CartWidget'>
            <i className="fas fa-dolly nav-links"></i>
            {cantElementos()!== 0 ? <p>{cantElementos()}</p> : null}
        </div>
    )
}
export default CartWidget;