import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import CartWidget from "../CartWidget/CartWidget";
import {
   
    NavLink
   } from "react-router-dom";

import './Navbar.css'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
               <NavLink to='/'> <h1 className="navbar-logo">Curso React<i className="fab fa-react"></i></h1></NavLink>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    <li ><NavLink  to="/category/Foods"><p className='nav-links'>Comida</p></NavLink></li>
                    <li ><NavLink to="/category/Vehicles"><p className='nav-links'>Vehiculos</p></NavLink></li>
                    <li ><NavLink to="/category/Animals"><p className='nav-links'>Animales</p></NavLink></li>
                    <li ><NavLink to="/cart"><CartWidget/></NavLink></li>
                    <li></li>
                </ul>
            </nav> 
        )
    }
}

export default Navbar