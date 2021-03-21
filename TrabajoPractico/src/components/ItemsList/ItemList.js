import React from 'react';
import Item from "./Item";
import './ItemList.css'

const ItemList = (props) => (
  <>
    <ul className='listaProductos'>
      {props.items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </ul>
  </>
);

export default ItemList;