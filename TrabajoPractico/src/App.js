import React from 'react';
import Navbar from "./components/NavBar/Navbar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer/>
    </div>
  );
}

export default App;
