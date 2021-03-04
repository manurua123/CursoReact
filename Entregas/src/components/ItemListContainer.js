import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Item from "./Item"
import objeto from '../assets/img/box-solid.svg';


function  ItemListContainer (props){

    return (
        <>
          {
              props.items.map(item =>  
                <Item 
                id={item.id}
                nombre={item.nombre}
                imagen={item.imagen}
                />
              )
          }  
        </>
    )
}

export default ItemListContainer;