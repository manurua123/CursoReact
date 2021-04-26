import React, { useContext, useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams, } from "react-router-dom";
import FirebaseContext from '../../context/FirebaseContext'

const ItemDetailContainer = () => {
  const { id } = useParams();
  const context = useContext(FirebaseContext);
  const [producto, setProducto] = useState()

  const prod = async () => {
    const resp = await context.getById(id)
    setProducto(resp)
  }
  useEffect(() => {
    prod();
  }, [id])

  return (
    <div >
      <ItemDetail item={producto} />
    </div>
  )
}
export default ItemDetailContainer;

