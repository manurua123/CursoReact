import firebase from "firebase/app";
import React, { useState} from "react";
import { getFirestore } from "../../configs/firebase";
import "firebase/firestore";
import FirebaseContex from '../../Context/FirebaseContext'



function FirebaseProvider(props) {

    const [db, setDb] = useState(getFirestore());
    const [lastId, setLastId] = useState();

    function getAll() {
        const items = []
        var docRef = db.collection("productos").get().then((ok) => {
            ok.forEach((doc) => {
                items.push(doc.data()) //agrega cada elemento a un array
            })
        })
        return items;
    }

    function categorias() {
        const categorias = []
        var docRef = db.collection("categorias").get().then((ok) => {
            ok.forEach((doc) => {
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
    function createOrder(datos) {
        const productos = []
        datos.cart.cart.map((i) => {
            productos.push({ id: i[0].title, price: i[0].price, quantity: i[1] })
        })
        const newOrder = {
            user: { nombre: datos.nombre, telefono: datos.telefono, email: datos.email },
            products: productos,
            state: 'generada',
            total: datos.cart.PrecioTotal(),
            createOn: firebase.firestore.Timestamp.fromDate(new Date()),
        };
        const orders = db.collection("orders");
        orders.add(newOrder).then((resp) => {
            setLastId(resp.id);
        })
    }








    const { children } = props;
        return (
            <FirebaseContex.Provider value={{
                getAll: getAll,
                getByFilter: getByFilter,
                categorias: categorias,
                createOrder: createOrder,
                lastId: lastId
            }}>
                {children}
            </FirebaseContex.Provider>
        )
    }





    export default FirebaseProvider;