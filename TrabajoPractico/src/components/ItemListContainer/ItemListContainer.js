import React from 'react';
import './ItemsListContainer.css';
import ItemList from "../ItemsList/ItemList"
import { useParams } from 'react-router';
import ListaItems from '../../ListaItems'

const ItemsListContainer =(props) =>  {
    let { id } = useParams();
    return(
        <div className='ItemsListContainer'>
            <ItemList items={(id == null ? ListaItems : ListaItems.filter(item=> item.category == id))}/> 
        </div>
    )
    }

export default ItemsListContainer