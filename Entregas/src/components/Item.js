import React from "react";

function Item(props){
    return(
        <div type="button"  class="btn btn-outline-dark btn-lg">
            <h3>{props.nombre}</h3>
            <img src={props.imagen} width="30" height="30"/>
        </div>

    )
}

export default Item;