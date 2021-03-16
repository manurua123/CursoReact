import React from 'react';

import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import './ItemList.css'

const Item = (props) =>(
    <ul className="producto">
    <li><ItemDetailContainer item={props.item}/></li>
    </ul>
)


export default Item;