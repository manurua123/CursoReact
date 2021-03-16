import React from 'react';
import { useEffect, useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import ItemCount from "../itemCount/ItemCount"




const ItemDetailContainer =(props) =>  {
  {/*
  const [itemDetail,setItemDetail] = useState([]);
  useEffect(() => {
    new Promise((approved, disapproved) => {
      setTimeout(() => {
        approved(props.item);
      }, 2000);
    }).then((resultado) => setItemDetail(resultado));
  });

  return(
    <div >
        <ItemDetail item={itemDetail} />
        <ItemCount stock= {itemDetail.stock}/>
    </div>
    )

  */}
  const notAvilable = {title: 'NO DISPONIBLE', description: 'Este Objeto no esta disponible', img: <i class="fas fa-times"></i>, stock: 0,  price:'--'}
  const [itemState,setItemState] = useState(true);
  const [itemDetail,setItemDetail] = useState([]);

  useEffect(() => {
      setTimeout(() => {
        let details = itemState ? props.item : notAvilable;
        setItemDetail(details)}
        ,2000);
      })

  return(
    <div >
        <ItemDetail item={itemDetail}/>
        <ItemCount stock= {itemDetail.stock}/>
    </div>
    )

}
export default ItemDetailContainer;

