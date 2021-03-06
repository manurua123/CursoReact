import React from "react";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart} from "@fortawesome/free-solid-svg-icons";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[
        {id: 0, nombre:"objeto 0", imagen: <FontAwesomeIcon icon={faShoppingCart} />},
        {id: 1, nombre:"objeto 1", imagen: <FontAwesomeIcon icon={faShoppingCart} />},
        {id: 2, nombre:"objeto 2", imagen: <FontAwesomeIcon icon={faShoppingCart} />},
        {id: 3, nombre:"objeto 3", imagen: <FontAwesomeIcon icon={faShoppingCart} />},
        {id: 4, nombre:"objeto 4", imagen: <FontAwesomeIcon icon={faShoppingCart} />},
        {id: 5, nombre:"objeto 5", imagen: <FontAwesomeIcon icon={faShoppingCart} />},
        {id: 6, nombre:"objeto 6", imagen: <FontAwesomeIcon icon={faShoppingCart} />},
        {id: 7, nombre:"objeto 7", imagen: <FontAwesomeIcon icon={faShoppingCart} />},
        {id: 8, nombre:"objeto 8", imagen: <FontAwesomeIcon icon={faShoppingCart} />},
        {id: 9, nombre:"objeto 9", imagen: <FontAwesomeIcon icon={faShoppingCart} />},
      ]
    };
  }



  render(){
    return (
       <>
         <NavBar/>
         <ItemListContainer items={this.state.items}/>
         <ItemListContainer items={this.state.items}/>
         <ItemListContainer items={this.state.items}/>
         <ItemListContainer items={this.state.items}/>
         
       </>
     );
   }
 }

 export default App;
