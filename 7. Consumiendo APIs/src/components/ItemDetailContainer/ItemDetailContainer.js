import React from 'react';
import { useEffect, useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer =() =>  {
    const todosLosItems = [
        {title: 'chess', description: 'una breve descripcion del objeto', img: <i class="fas fa-chess"></i>, stock: 5,  price:'$13.5'},
        {title: 'anchor', description: 'una breve descripcion del objeto', img: <i class="fas fa-anchor"></i>, stock: 3,price:'$55'},
        {title: 'atlas', description: 'una breve descripcion del objeto', img: <i class="fas fa-atlas"></i>, stock: 10, price:'$43'},
        {title: 'cannabis', description: 'una breve descripcion del objeto', img: <i class="fas fa-cannabis"></i>, stock: 7,  price:'$33'},
        {title: 'bacterium', description: 'una breve descripcion del objeto', img: <i class="fas fa-bacterium"></i>, stock: 4,  price:'$89'},
        {title: 'bicycle', description: 'una breve descripcion del objeto', img:<i class="fas fa-bicycle"></i>, stock: 2, price:'$9.5'},
        {title: 'cat', description: 'una breve descripcion del objeto', img:<i class="fas fa-cat"></i>,stock: 1,  price:'$7'},
        {title: 'carrot', description: 'una breve descripcion del objeto', img: <i class="fas fa-carrot"></i>, stock: 99,  price:'$100'},
      ]
  const [item, setItem] = useState([]);
  useEffect(() => {
    new Promise((approved, disapproved) => {
      setTimeout(() => {
        approved(todosLosItems);
      }, 2000);
    }).then((resultado) => setItem(resultado));
  });

  return(
    <div >
       <ItemDetail item={item} />
    </div>
    )

}
export default ItemDetailContainer;