import firebase from "firebase/app";
import React, { useState } from "react";
import { getFirestore } from "../../configs/firebase";
import "firebase/firestore";
import FirebaseContex from '../../Context/FirebaseContext'



function FirebaseProvider(props) {
    const [db, setDb] = useState(getFirestore());
    const [lastId, setLastId] = useState();
    const [categorias, setCategirias]=useState()

    function getAll() {
        const items = []
        var docRef = db.collection("productos").get().then((ok) => {
            ok.forEach((doc) => {
                items.push(doc.data()) //agrega cada elemento a un array
            })
        })
        return items;
    }

    function getCategorias() {
        const productos = db.collection("categorias");
        const cat =[]
        productos.get().then((res) => {
          if (res.size > 0) {
            res.docs.map((d) => {
            cat.push(d.data().name)
            });
          }
        });
        return (cat)
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

    function actualizarStock(datos) {
        datos.cart.map((c) => {
            var stockAct = {}
            const producto = db.collection("productos").doc(c[0].title)
            producto.get().then((i) => {
                if (i.exists) {
                    stockAct = { stock: (i.data().stock - c[1]) }
                    console.log('item:', c[0].title, 'Stock old:', i.data().stock, ' cantidad carriro', c[1], 'stock final', stockAct.stock)
                    producto.update(stockAct)
                }
            });

        })
    }

    function viewOrder (id){
        const productos = db
      .collection("productos")
      .doc(id); 
      productos.get().then((res) => {
        console.log(res.data());
      });
    }

    const { children } = props;
    return (
        <FirebaseContex.Provider value={{
            lastId: lastId,
            getAll: getAll,
            getByFilter: getByFilter,
            createOrder: createOrder,
            actualizarStock: actualizarStock,
            viewOrder:viewOrder,
            getCategorias:getCategorias,
        }}>
            {children}
        </FirebaseContex.Provider>
    )
}





export default FirebaseProvider;