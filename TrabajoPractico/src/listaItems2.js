import { getFirestore } from "./configs/firebase";
import React, { useState } from "react";
import * as firebase from 'firebase/app';
import "firebase/firestore";


function ListaItems2() {

  const [db, setDb] = useState(getFirestore());

  function getAll() {
    const productos = db.collection("productos");
    const items=[]
    productos.get().then((res) => {
      if (res.size > 0) {
        res.docs.map((d) => {
          items.push({
            id: d.id,
            ...d.data(),
          });
        });
      }
    });
    return items;
  }

  function getByFilter(category) {
    const productos = db.collection("productos").where("category", "==", category);
    const items=[]
      productos.get().then((res) => {
      if (res.size > 0) {
        res.docs.map((d) => {
          items.push({
          id: d.id,
          ...d.data(),
          });
        });
      }
    });
    return items;
  }

return (
<div className="App">
<h1>UN TITULO</h1>
<br />
{
console.log('todos los elementos : ',getAll())
}

{
console.log('todos los elementos de una categoria: ',getByFilter('Foods'))
}
{getByFilter('Foods')[1]}
</div>
);
}

export default ListaItems2;