import React, { useContext, useEffect,useState } from 'react';
import './ItemsListContainer.css';
import ItemList from "../ItemsList/ItemList"
import { useParams, } from "react-router-dom";
import FirebaseContext from '../../Context/FirebaseContext'

const ItemsListContainer = (props) => {
    const context = useContext(FirebaseContext);
    const [productos, setProductos] = useState([])
    let { id } = useParams();


    const prod = async()=>{
        const resp = await context.getAll()
        setProductos(resp)
    }
    useEffect(()=>{
        prod();
    },[])

    return (
        <div className='ItemsListContainer'>
            <ItemList items={(id ? (productos.filter(i=>i.category===id)) : productos)} /> 

            {/* {<ItemList items={(id ? (ListaItems.filter(i=>i.category===id)) : ListaItems)} />} */}
        </div>
    )
}

export default ItemsListContainer
