import React, { Component } from 'react';


// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart} from "@fortawesome/free-solid-svg-icons";


class CartWidget extends Component {
  render() {
    return (
      <>
       <FontAwesomeIcon icon={faShoppingCart} />
      </>
    );
  }
}


export default CartWidget;
