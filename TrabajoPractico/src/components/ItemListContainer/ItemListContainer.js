import React from 'react';

import './ItemsListContainer.css';
import ItemList from "../ItemsList/ItemList"

const ItemsListContainer =(props) =>  {
        return(
            <div >
                <ItemList items={props.items}/>
            </div>
        )
    }


export default ItemsListContainer