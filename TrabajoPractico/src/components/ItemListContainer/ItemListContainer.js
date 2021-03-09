import React, { Component } from 'react';
import { useState } from "react";
import { Items } from "./Items";
import './ItemsListContainer.css';
import ItemCount from "./ItemCount"

const ItemsListContainer =() =>  {
        const [stockActual,setStockActual] = useState();

        const restarStock =  (e,nuevoStock) => {
            e.preventDefault();
            setStockActual((stockActual)=> stockActual-nuevoStock);
        }
        return(
            <div >
                <ul className= "ItemsList">
                 {Items.map((item) => {
                        return (
                            <div className="itemBox">
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                                <a className={item.cName}>{item.img}</a>
                                <ItemCount stock={item.stock} initial={1} onAdd={restarStock}/>
                            </div>
                        )
                 })}
                 </ul>
            </div>
        )
    }


export default ItemsListContainer