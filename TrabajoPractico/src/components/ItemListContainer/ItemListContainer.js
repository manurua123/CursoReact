import React, { useContext } from 'react';
import './ItemsListContainer.css';
import ItemList from "../ItemsList/ItemList"
import { useParams, } from "react-router-dom";
import ListaItems from '../../ListaItems'
// import FirebaseContext from '../../Context/FirebaseContext'

const ItemsListContainer = (props) => {
    // const context = useContext(FirebaseContext);
    let { id } = useParams();
    return (
        <div className='ItemsListContainer'>
            {/* {console.log('a ItemLisContainer llegan:', context.getAll())}
            <ItemList items={(id ? (context.getByFilter(id)) : context.getAll())} /> */}

            {<ItemList items={(id ? (ListaItems.filter(i=>i.category===id)) : ListaItems)} />}
        </div>
    )
}

export default ItemsListContainer
