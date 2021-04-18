import React, { useContext, useEffect, useState } from 'react';
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import './Navbar.css'
import FirebaseContext from '../../Context/FirebaseContext'


const Navbar = () => {
    const context = useContext(FirebaseContext);
    const [state, setState] = useState(false);
    const [categorias, setCategorias] = useState([])

    function handleClick() {
        setState(!state)
    }

    console.log('Llegaron las categortias:', context.getCategorias())
    console.log('Largo del array:', context.getCategorias().length)
    return (
        <nav className="NavbarItems">
            <NavLink to='/'> <h1 className="navbar-logo">Curso React<i className="fab fa-react"></i></h1></NavLink>
            <div className="menu-icon" onClick={() => handleClick()}>
                <i className={state ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={state ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <DropdownButton id="dropdown-basic-button" title="Categorias">
                        <Dropdown.Item><NavLink to={`/category/Foods`}><p className='nav-links'>Foods</p></NavLink> </Dropdown.Item>
                        <Dropdown.Item><NavLink to={`/category/Vehicles`}><p className='nav-links'>Vehicles</p></NavLink> </Dropdown.Item>
                        <Dropdown.Item><NavLink to={`/category/Animals`}><p className='nav-links'>Animals</p></NavLink> </Dropdown.Item>
                    </DropdownButton>
                </li>
                <li ><NavLink to="/cart"><CartWidget /></NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar