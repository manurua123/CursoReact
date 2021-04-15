import React from 'react';
import Item from "./Item";
import './ItemList.css'

const ItemList = (props) => {
  return(
    <ul className='listaProductos'>
      {/* {console.log('A ItemList llegan:',props.items)}
      {console.log('El primer Elemento:',props.items[0])} */}
      {props.items.map((item,index) => (
        <Item key={index} item={item} />
      ))}
    </ul>

  )};

export default ItemList;