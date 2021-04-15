import { getFirestore } from "./configs/firebase";
import React, { useState } from "react";
import * as firebase from 'firebase/app';
import "firebase/firestore";


function ListaItems2() {

  const [db, setDb] = useState(getFirestore());

  function getAll() {
    const productos = db.collection("productos");
    const items = []
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
    const items = []
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

   function udpdateStock(id,cant){
      var datoRef = db.collection("productos").doc(id);
      const dato= datoRef.update({
        stock: cant
    })
  }

}





export default ListaItems2;