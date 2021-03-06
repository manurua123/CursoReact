import React from "react";

function Item(props){
    return(
        <div type="button"  class="btn btn-outline-dark btn-lg">
            <h3>{props.nombre}</h3>
            {props.imagen}
        </div>

    )
}

export default Item;