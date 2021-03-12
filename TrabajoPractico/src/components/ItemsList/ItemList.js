import React from 'react';
import Item from "./Item";
import './ItemList.css'

const ItemList = (props) => (
  <>
    <ul className='listaProductos'>
      {props.items.map((x, index) => (
        <Item key={index} item={x} />
      ))}
    </ul>
  </>
);

export default ItemList;