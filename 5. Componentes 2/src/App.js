import React from 'react';
import ClaseEjemplo from "./components/ClaseEjemplo"
import FuncionEjemplo from "./components/FuncionEjemplo"
import './App.css';

function App() {
  return (
    <div className="App">
   <h2>CLASE</h2>
    <ClaseEjemplo />
<p>-------------------------------</p>
<h2>FUNCION</h2>
    <FuncionEjemplo />
    </div>
  );
}

export default App;
