import React from 'react';
import './ItemsListContainer.css';
import ItemList from "../ItemsList/ItemList"
import { useParams } from 'react-router';

const ItemsListContainer =(props) =>  {
    let { id } = useParams();
    const todosLosItems = [
        {title: 'bicycle', category: 'Vehicles',description: 'una breve descripcion del objeto', img: <i class="fas fa-bicycle"></i>, stock: 10,  price:'$ 100', link:'item/iceCream'},
        {title: 'otter', category: 'Animals',description: 'una breve descripcion del objeto', img:<i class="fas fa-otter"></i> , stock: 10,  price:'$ 100', link:'item/iceCream'},
        {title: 'pepperS', category: 'Foods',description: 'una breve descripcion del objeto', img:<i class="fas fa-pepper-hot"></i>, stock: 10,  price:'$ 100', link:'item/iceCream'},
        {title: 'helicopter', category: 'Vehicles',description: 'una breve descripcion del objeto', img:<i class="fas fa-helicopter"></i> , stock: 10,  price:'$ 100', link:'item/iceCream'},
        {title: 'kiwi', category: 'Animals',description: 'una breve descripcion del objeto', img: <i class="fas fa-kiwi-bird"></i>, stock: 10,  price:'$ 100', link:'item/iceCream'},
        {title: 'lemon', category: 'Foods',description: 'una breve descripcion del objeto', img:<i class="far fa-lemon"></i>, stock: 10,  price:'$ 100', link:'item/iceCream'},
        {title: 'sleigh ', category: 'Vehicles',description: 'una breve descripcion del objeto', img:<i class="fas fa-sleigh"></i> , stock: 10,  price:'$ 100', link:'item/iceCream'},
        {title: 'hippo', category: 'Animals',description: 'una breve descripcion del objeto', img:<i class="fas fa-hippo"></i> , stock: 10,  price:'$ 100', link:'item/iceCream'},
        {title: 'hotdog', category: 'Foods',description: 'una breve descripcion del objeto', img:<i class="fas fa-hotdog"></i>, stock: 10,  price:'$ 100', link:'item/iceCream'},
        {title: 'snowplow ', category: 'Vehicles',description: 'una breve descripcion del objeto', img: <i class="fas fa-snowplow"></i>, stock: 10,  price:'$ 100', link:'item/iceCream'},
        {title: 'frog', category: 'Animals',description: 'una breve descripcion del objeto', img:<i class="fas fa-frog"></i> , stock: 10,  price:'$ 100', link:'item/iceCream'},
        {title: 'iceCream', category: 'Foods',description: 'una breve descripcion del objeto', img:<i class="fas fa-ice-cream"></i>, stock: 10,  price:'$ 100', link:'item/iceCream'},
         
      ]
        return(
            <div className='ItemsListContainer'>
                <ItemList items={(id == null ? todosLosItems : todosLosItems.filter(item=> item.category == id))}/> 
            </div>
        )
    }

export default ItemsListContainer