import React, { useContext, useState } from 'react';
import CartContext from '../../Context/CartContext'
import FirebaseContext from '../../Context/FirebaseContext'
import CheckoutItem from './CheckoutItem'
import { NavLink } from 'react-router-dom';
import './Checkout.css'

const Checkout = () => {
    const firebaseContext = useContext(FirebaseContext);
    const cartContext = useContext(CartContext);
    const [datos, setDatos] = useState({
        nombre: '',
        telefono: '',
        email: '',
        cart: cartContext,
        email2: '*'
    })
    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }
    const active = () => {
        cartContext.clear()
        firebaseContext.createOrder(datos)
        firebaseContext.actualizarStock(datos.cart)
    }
    return (
        <div className='checkoutContainer'>
            <div className='checkoutItemList'>
                {cartContext.cart.map((item, index) => (
                    <CheckoutItem key={index} item={item} />
                ))}
            </div>
            <form className='checkoutForm'>
                <h3>Datos de Contacto</h3>
                <label for="nombre">Nombre y apellido</label>
                <input type="text" onChange={handleInputChange} name="nombre"></input>
                <label for="nombre">Telefono</label>
                <input type="text" onChange={handleInputChange} name="telefono"></input>
                <label for="nombre">Email</label>
                <input type="text" onChange={handleInputChange} name="email"></input>
                <label for="nombre">Repite el Email</label>
                <input type="text" onChange={handleInputChange} name="email2"></input>
                <h3>TOTAL $ {cartContext.PrecioTotal()}</h3>
                <NavLink className={datos.email === datos.email2 ? 'cartButton' : 'noCartButton'} to='/finish' onClick={() => active()} > boton test </NavLink>
            </form>
        </div >
    )
}

export default Checkout;


