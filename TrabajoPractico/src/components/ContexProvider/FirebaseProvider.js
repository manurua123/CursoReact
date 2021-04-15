import { getFirestore } from "../../configs/firebase";
import React, { useState, useContext } from "react";
import * as firebase from 'firebase/app';
import "firebase/firestore";
import FirebaseContex from '../../Context/FirebaseContext'
import CartContext from '../../Context/CartContext'


function FirebaseProvider(props) {
    const cart = useContext(CartContext);
    const [db, setDb] = useState(getFirestore());
    //const [items, setItems]= useState([])

    function getAll() {
        const items = []
        var docRef = db.collection("productos").get().then((ok)=>{
            ok.forEach((doc)=>{
                items.push(doc.data()) //agrega cada elemento a un array 
            })
        })
        return items;
    }

    function categorias(){
        const categorias = []
        var docRef = db.collection("categorias").get().then((ok)=>{
            ok.forEach((doc)=>{
                categorias.push(doc.data().name) //agrega las categorias a un array 
            })
        })
        return categorias;
    }

    function getByFilter(category) {
        const items = []
        const productos = db.collection("productos").where("category", "==", category);
        productos.get().then((res) => {
            if (res.size > 0) {
                res.docs.map((doc) => {
                    items.push(doc.data())
                    });
            }
        });
        return items;
    }

    function udpdateStock(id, cant) {
        var datoRef = db.collection("productos").doc(id);
        const dato = datoRef.update({
            stock: cant
        })
    }
    function verStock(id) {
        var datoRef = db.collection("productos").doc(id);
        console.log(datoRef)
        return datoRef.stock;
    }

    const { children } = props;
    return (
        <FirebaseContex.Provider value={{ getAll: getAll, getByFilter: getByFilter,verStock:verStock, categorias:categorias }}>
            {children}
        </FirebaseContex.Provider>
    )
}





export default FirebaseProvider;