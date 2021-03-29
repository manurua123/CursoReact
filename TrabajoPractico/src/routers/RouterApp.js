import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, NavLink, useParams, Redirect, } from "react-router-dom";
import ItemsListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import './RouterApp.css'
import Navbar from "../components/NavBar/Navbar";

const RouterApp = () => {

  return (
    <Router>
        <Navbar/>
      <Switch>
        <Route path='/item/:id?' children={<ItemDetailContainer/>}/>
        <Route path="/category/:id?" children={<ItemsListContainer/>} />
        <Route path='/cart' exact children={<estoSeriaUnCarritoDeCompras />} />
        <Route path='/' exact children={<ItemsListContainer />} />
        <Redirect to='/' />
      </Switch>  
    </Router>
  );
}

function estoSeriaUnCarritoDeCompras() {
 
  return (
    <div>
     <h1>ESTO ES UN CARRITO DE COMPRAS</h1>
     <h1>ESTO ES UN CARRITO DE COMPRAS</h1>
     <h1>ESTO ES UN CARRITO DE COMPRAS</h1>
     <h1>ESTO ES UN CARRITO DE COMPRAS</h1>
     <h1>ESTO ES UN CARRITO DE COMPRAS</h1>
     <h1>ESTO ES UN CARRITO DE COMPRAS</h1>
     <h1>ESTO ES UN CARRITO DE COMPRAS</h1>
     <h1>ESTO ES UN CARRITO DE COMPRAS</h1>
     <h1>ESTO ES UN CARRITO DE COMPRAS</h1>
     <h1>ESTO ES UN CARRITO DE COMPRAS</h1>
     <h1>ESTO ES UN CARRITO DE COMPRAS</h1>
    
    </div>
  )

}

export default RouterApp;