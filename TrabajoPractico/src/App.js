import React from 'react';
import { useEffect, useState } from "react";
import Navbar from "./components/NavBar/Navbar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const todosLosItems = [
    {title: 'chess', description: 'una breve descripcion del objeto', img: <i class="fas fa-chess"></i>, stock: 5,  price:'$13.5'},
    {title: 'anchor', description: 'una breve descripcion del objeto', img: <i class="fas fa-anchor"></i>, stock: 3,price:'$55'},
    {title: 'atlas', description: 'una breve descripcion del objeto', img: <i class="fas fa-atlas"></i>, stock: 10, price:'$43'},
    {title: 'cannabis', description: 'una breve descripcion del objeto', img: <i class="fas fa-cannabis"></i>, stock: 7,  price:'$33'},
    {title: 'bacterium', description: 'una breve descripcion del objeto', img: <i class="fas fa-bacterium"></i>, stock: 4,  price:'$89'},
    {title: 'bicycle', description: 'una breve descripcion del objeto', img:<i class="fas fa-bicycle"></i>, stock: 2, price:'$9.5'},
    {title: 'cat', description: 'una breve descripcion del objeto', img:<i class="fas fa-cat"></i>,stock: 1,  price:'$7'},
    {title: 'carrot', description: 'una breve descripcion del objeto', img: <i class="fas fa-carrot"></i>, stock: 99,  price:'$100'},

  ]

  useEffect(() => {
    new Promise((approved, disapproved) => {
      setTimeout(() => {
        approved( todosLosItems );
      }, 2000);
    }).then((resultado) => setItems(resultado));
  });

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer items={items} />
    </div>
  );
}

export default App;
