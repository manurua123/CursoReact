import React from 'react';
import './ItemsListContainer.css';
import ItemList from "../ItemsList/ItemList"
import ListaItems from '../../ListaItems'

const ItemsListContainer =(props) =>  {
    return(
        <div className='ItemsListContainer'>
            <ItemList items={ListaItems}/> 
        </div>
    )
    }

export default ItemsListContainer
