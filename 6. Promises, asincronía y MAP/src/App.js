import { useEffect, useState } from "react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import React from 'react'

function App() {
  const [items, setItems] = useState([]);
  const todosLosItems = [
    {
        "id": "1",
        "title": "producto 1",
        "description": "una descripcion del objeto 1",
        "price": "precio objeto 1",
        "picturURL": "link imagen 1"
    },
    {
        "id": "2",
        "title": "producto 2",
        "description": "una descripcion del objeto 2",
        "price": "precio objeto 2",
        "picturURL": "link imagen 2"
    },
    {
        "id": "3",
        "title": "producto 3",
        "description": "una descripcion del objeto 3",
        "price": "precio objeto 3",
        "picturURL": "link imagen 3"
    },
    {
        "id": "4",
        "title": "producto 4",
        "description": "una descripcion del objeto 4",
        "price": "precio objeto 4",
        "picturURL": "link imagen 4"
    }
 ]

  useEffect(() => {
    new Promise((todoBien, todoMal) => {
      //Ver que pasa si ponen el setItems(["Pera", "Manzana", "Mango", "Uva"])
      setTimeout(() => {
        todoBien( todosLosItems );
      }, 2000);
    }).then((resultado) => setItems(resultado));
  });

  return (
    <div className="App">
      <ItemListContainer items={items} />
    </div>
  );
}

export default App;
