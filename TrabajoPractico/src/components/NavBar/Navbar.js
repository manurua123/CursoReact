import React, { Component, useContext, useState } from 'react';
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

import './Navbar.css'
import FirebaseContext from '../../Context/FirebaseContext'


const Navbar = () => {
    const context = useContext(FirebaseContext);
    const [state, setState] = useState(false);

    function handleClick (){
        setState(!state)
    }
    console.log('Llegaron las categortias:',context.categorias())
    console.log('Accediendo al elemnto 1:',context.categorias()[1])
    context.categorias().map((c)=>{
        console.log('categoria: ',c.name)
    })

    return (
        <nav className="NavbarItems">
            <NavLink to='/'> <h1 className="navbar-logo">Curso React<i className="fab fa-react"></i></h1></NavLink>
            <div className="menu-icon" onClick={()=>handleClick()}>
                <i className={state ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={state ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <DropdownButton id="dropdown-basic-button" title="Categorias">
                        
                        {/* <Dropdown.Item><NavLink to={`/category/${c}`}><p className='nav-links'>{c}</p></NavLink> </Dropdown.Item> */}
                    </DropdownButton>
                </li>
                <li ><NavLink to="/"><p className='nav-links'>Nosotros</p></NavLink></li>
                <li ><NavLink to="/"><p className='nav-links'>Contacto</p></NavLink></li>
                <li ></li>
                <li ><NavLink to="/cart"><CartWidget /></NavLink></li>
                <li></li>
            </ul>
        </nav>
    )
}

export default Navbar