import React from 'react';
import './ItemsListContainer.css';
import ItemList from "../ItemsList/ItemList"
import { BrowserRouter as Router, Switch, Route, NavLink, useParams, } from "react-router-dom";
import ListaItems from '../../ListaItems'

const ItemsListContainer =(props) =>  {
    let { id } = useParams();
    return(
        <div className='ItemsListContainer'>
            <ItemList items={(id ? (ListaItems.filter(item=> item.category === id)) : ListaItems  )}/> 
        </div>
    )
    }

export default ItemsListContainer
