import React, { useContext } from 'react';
import FirebaseContext from '../../Context/FirebaseContext'
import { NavLink } from 'react-router-dom';
import { useParams, } from "react-router-dom";
import './Finish.css'

const Finish = (propr) => {
    const firebaseContext = useContext(FirebaseContext);
    const { id } = useParams();

    const NoHayCosas = () => {
        return (
            <>
                <i class="fas fa-shipping-fast"></i>
                <h3>Tu compra fue registrado con el numero:</h3>
                <h4>{firebaseContext.lastId}</h4>
                <h3> {id}</h3>
            </>
        )
    }

    const HayCosas = () => {
        return (
            <>
               {/* aca va la parte de ver la ordern */}
            </>
        )
    }

    function Evalution() {
        return (
            (id ? <HayCosas /> : <NoHayCosas />)
        )
    }
    return (
        <div className='finish'>
            {Evalution()}
            <NavLink className='cartButton' to='/' >Volver a la tienda</NavLink>
        </div>
    )
}

export default Finish;