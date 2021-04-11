import React, { Component } from 'react';
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
//import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className="NavbarItems">
                <NavLink to='/'> <h1 className="navbar-logo">Curso React<i className="fab fa-react"></i></h1></NavLink>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <DropdownButton id="dropdown-basic-button" title="Categorias">
                            <Dropdown.Item ><NavLink to="/category/Foods"><p className='nav-links'>Comida</p></NavLink></Dropdown.Item>
                            <Dropdown.Item ><NavLink to="/category/Vehicles"><p className='nav-links'>Vehiculos</p></NavLink></Dropdown.Item>
                            <Dropdown.Item ><NavLink to="/category/Animals"><p className='nav-links'>Animales</p></NavLink></Dropdown.Item>
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
}

export default Navbar