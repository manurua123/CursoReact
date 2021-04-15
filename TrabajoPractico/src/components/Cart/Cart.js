import React, { useContext } from 'react';
import CartContext from '../../Context/CartContext'
import ItemCart from './ItemCart'
import { NavLink } from 'react-router-dom';
import './ItemCart.css'

const Cart = () => {
    const context = useContext(CartContext);

    function PrecioTotal() {
        var total = 0.
        context.cart.map((i) => {
            total = total + (i[0].price * i[1]);
        })
        return total;
    }

    const HayCosas = () => {
        return (
            <div className='Cart'>
                <div className='CartItemList'>
                    {context.cart.map((item, index) => (
                        <ItemCart key={index} item={item} />
                    ))}
                </div>
                <ul className='botonesCarrito'>
                    <li><button className=' limpiarCarro' onClick={() => context.clear()}> Eliminar todo</button> </li>
                    <li><h3 className='montoTotal'> Monto total   $ <PrecioTotal /> </h3></li>
                    <li><><NavLink className='cartButton terminarCompra' to='/formClient' >Terminar Compra</NavLink></></li>
                </ul>
            </div>)
    }

    const NoHayCosas=(props) =>{
        return (
            <div className='noCart'>
                <i class="fas fa-shopping-basket"></i>
                <h3>Tu carrito esta vacio</h3>
                <NavLink className='cartButton' to='/' >Ver Productos</NavLink>
            </div>
        )
    }

    function Evalution() {
        return (
            (context.cart.length === 0 ? <NoHayCosas /> : <HayCosas />)
        )
    }
    return (
        <div>
            <Evalution />
        </div>
    );
}

export default Cart;



