import React, { useState } from "react";
import {
 BrowserRouter as Router,
 Switch,
 Route,
 Link,
 NavLink,
 Redirect
} from "react-router-dom";

import ItemsListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetail from "../components/ItemDetail/ItemDetail";
import CartWidget from "../components/CartWidget/CartWidget";
import './RouterApp.css'
const RouterApp = () => {

  const [clicked, setClicked] = useState(false);
  const handleClick =()=>{
    setClicked(!clicked)
  }
  return (
  <Router>
    <div >
      <nav className="NavbarItems">
          <NavLink className='logo' to="/">
            <h1 className="navbar-logo">Curso React<i className="fab fa-react"></i></h1>
            <div className="menu-icon" onClick={handleClick}>
             <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
          </NavLink>
          <ul className={clicked ? 'nav-menu active' : 'nav-menu'}> 
          <li><NavLink className='nav-links' to="/categoria/Vehicles">Vehiculos</NavLink></li>
          <li><NavLink className='nav-links' to="/categoria/Foods">Comidas</NavLink></li>
          <li><NavLink className='nav-links' to="/categoria/Animals">Animales</NavLink></li>
          <li><CartWidget/></li>
        </ul>
      </nav>
      <Switch>
      <Route path="/categoria/:id?" children={<ItemsListContainer />} />
      <Route exact path='/' children={<ItemsListContainer />}/>
      </Switch>
    </div>
  </Router>
  );
}

function item() {
  return <h2>ITEM</h2>;
}

export default RouterApp;