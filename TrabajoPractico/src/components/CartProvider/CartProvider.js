import React, { useState } from 'react';
import CartContext from '../../Context/CartContext'


function CartProvider(props) {

    const [carrito, setCarrito] = useState([]);
    const[cantidad, setCatidad] = useState(0)

    const addItem = (item, cantidad)=> {
        if(carrito.length===0){
            carrito.push([item,cantidad])
        }
        else
            if(!isInCart(item.title)){
            carrito.push([item,cantidad])
            }
            CantidadTotal()
            console.log(cantidad);
    }

    const removeItem = (valor) => {
        carrito.map((i)=> {
            if (i[0].title === valor) {
            var index = carrito.indexOf(i)
            setCarrito( carrito.splice(index,1) )
            console.log('el titulo es:',i[0].title,' el index es: ', index);
        }})
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

    function CantidadTotal(){
        var total= 0.
        carrito.map((i)=>{
            total = total + i[1];  
        })
        console.log('el total de elmentos es: ',total);
        setCatidad(total)
    }

    const { children } = props;
    return(
        <CartContext.Provider value={{cart:carrito,addItem:addItem,removeItem:removeItem,clear:clear, isInCart:isInCart,CantidadTotal:CantidadTotal,cantidad:cantidad}}>
            {children}
        </CartContext.Provider>
    )
}

export default  CartProvider;
