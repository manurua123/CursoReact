import React, { useState } from 'react';
import CartContext from '../../Context/CartContext'


function CartProvider(props) {

    const [carrito, setCarrito] = useState([]);
    const [cantidad, setCatidad] = useState(0)

    const addItem = (item, cantidad)=> {
        if(carrito.length===0){
            carrito.push([item,cantidad])
        }
        else{
            if(!isInCart(item.title)){
            carrito.push([item,cantidad])
            }
            else{
                addCant(item,cantidad)
            } 
        }
        cantidadTotal();
    }

    const removeItem = (valor) => {
        setCarrito(carrito.filter(i => i[0].title != valor));
        setCatidad(0);
        cantidadTotal();
    }

    const clear = () => {
        setCarrito([])
        setCatidad(0)
    }

    function isInCart (title){
        let ok = false;
        carrito.map((i)=>{
        if(i[0].title===title)
            ok = true
        })
        return ok
    }

    function addCant(item, cant){
        carrito.map((i)=>{
            if(i[0]===item)
                i[1] = i[1]+cant
            })
    }

    function cantidadTotal(){
        setCatidad(carrito.reduce((prev,next)=> prev + next[1],0))
    }

    const { children } = props;
    return(
        <CartContext.Provider value={{cart:carrito,addItem:addItem,removeItem:removeItem,clear:clear, isInCart:isInCart,CantidadTotal:cantidadTotal,cantidad:cantidad}}>
            {children}
        </CartContext.Provider>
    )
}

export default  CartProvider;
