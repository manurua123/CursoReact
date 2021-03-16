import React from 'react';
import { useEffect, useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer =(props) =>  {

  const [items, setItems] = useState([]);
  useEffect(() => {
    new Promise((approved, disapproved) => {
      setTimeout(() => {
        approved(<ItemDetail item={props.item} />);
      }, 2000);
    }).then((resultado) => setItems(resultado));
  });

  return(
    <div >
       {items}
    </div>
    )

}
export default ItemDetailContainer;