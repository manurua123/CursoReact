import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, } from "react-router-dom";
import ItemsListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Cart from '../components/Cart/Cart'
import './RouterApp.css'
import Navbar from "../components/NavBar/Navbar";

const RouterApp = () => {

  return (
    <Router>
        <Navbar/>
      <Switch>
        <Route path='/item/:id?' children={<ItemDetailContainer/>}/>
        <Route path="/category/:id?" children={<ItemsListContainer/>} />
        <Route path='/cart' exact children={<Cart />} />
        <Route path='/' exact children={<ItemsListContainer />} />
        <Redirect to='/' />
      </Switch>  
    </Router>
  );
}



export default RouterApp;