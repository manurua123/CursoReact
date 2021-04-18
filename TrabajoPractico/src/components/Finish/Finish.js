import React, {useContext} from 'react';
import FirebaseContext from '../../Context/FirebaseContext'
import { NavLink } from 'react-router-dom';
import './Finish.css'

const Finish = () => {
    const firebaseContext = useContext(FirebaseContext);
    return (
        <div className='finish'>
            <i class="fas fa-shipping-fast"></i>
            <h3>Tu compra fue registrado con el numero:</h3>
            <h4>{firebaseContext.lastId}</h4>
            <NavLink className='cartButton' to='/' >Volver a la tienda</NavLink>
        </div>
    )
}

export default Finish;