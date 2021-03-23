import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, NavLink, useParams, } from "react-router-dom";
import ItemsListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import CartWidget from "../components/CartWidget/CartWidget";
import './RouterApp.css'
import ItemDetail from "../components/ItemDetail/ItemDetail";

const RouterApp = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => { setClicked(!clicked) }
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
            <li><CartWidget /></li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path='/item:title'>
          <MostrarmeAlgoPorFavor />
          {/* <ItemDetailContainer/> */}
        </Route>
        <Route path="/categoria/:id?" children={<ItemsListContainer />} />
        <Route path='/' exact children={<ItemsListContainer />} />
      </Switch>
    </Router>
  );
}

function MostrarmeAlgoPorFavor() {
  let { tittle } = useParams();
  return (
    <div>
      <h1>articulo: {tittle}</h1>
      <h2>articulo: {tittle}</h2>
      <h3>articulo: {tittle}</h3>
      <h4>articulo: {tittle}</h4>
      <h5>articulo: {tittle}</h5>
    
    </div>
  )

}

export default RouterApp;