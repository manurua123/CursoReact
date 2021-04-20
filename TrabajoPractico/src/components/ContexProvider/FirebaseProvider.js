import firebase from "firebase/app";
import React, {useState } from "react";
import { getFirestore } from "../../configs/firebase";
import "firebase/firestore";
import FirebaseContex from '../../Context/FirebaseContext'



function FirebaseProvider(props) {
    const [db, setDb] = useState(getFirestore());
    const [lastId, setLastId] = useState();


    const getAll= async()=> {
        const productos = await db.collection("productos").get();
        const prod =[]
        productos.forEach((doc) => {
            prod.push(doc.data())
        });
      return prod;
    }

     const getCategorias= async()=> {
        const productos = await db.collection("categorias").get();
        const cat =[]
        productos.forEach((doc) => {
            cat.push(doc.id)
        });
      return cat;
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