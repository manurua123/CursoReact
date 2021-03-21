import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import CartWidget from "../CartWidget/CartWidget";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
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
                <h1 className="navbar-logo">Curso React<i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    <li ><a className='nav-links'>Categoria</a></li>
                    <li ><a className='nav-links'>Nostros</a></li>
                    <li ><a className='nav-links'>Contacto</a></li>
                    <li><CartWidget/></li>
                </ul>
            </nav>
          
        )
    }
}

export default Navbar