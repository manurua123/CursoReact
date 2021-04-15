import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams, } from "react-router-dom";
import ListaItems from "../../ListaItems"

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [detail] = (ListaItems.filter(i => i.title === id));
  return (
    <div >
      <ItemDetail item={detail} />
    </div>
  )
}
export default ItemDetailContainer;

