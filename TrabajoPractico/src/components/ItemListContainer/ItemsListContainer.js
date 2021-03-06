import React, { Component } from 'react';
import { Items } from "./Items";
import './ItemsListContainer.css'

class ItemsListContainer extends Component {
    render(){
        return(
            <div >
                <ul className= "ItemsList">
                 {Items.map((item) => {
                        return (
                            <button className="itemBox">
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                                <a className={item.cName}>{item.img}</a>
                            </button>
                        )
                 })}
                 </ul>
            </div>
        )
    }
}

export default ItemsListContainer