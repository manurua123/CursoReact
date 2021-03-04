import React, { Component } from 'react';

import logo from '../assets/img/shopping-cart-solid.svg';

class CartWidget extends Component {
  render() {
    return (
      <>
        <img src={logo} width="30" height="30" />
      </>
    );
  }
}


export default CartWidget;
