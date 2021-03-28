import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, NavLink, useParams, } from "react-router-dom";

import './RouterApp.css'


const RouterApp = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => { setClicked(!clicked) }
  return (
    <Router>
      <Switch>
        <Route path='/cart'/>
          <p>ACA VA EL CARITO</p>
        <Route path='/' />
      </Switch>
    </Router>
  );
}


export default RouterApp;