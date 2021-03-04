import React from "react";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import objeto from './assets/img/box-solid.svg';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[
        {id: 0, nombre:"objeto 0", imagen: objeto},
        {id: 1, nombre:"objeto 1", imagen: objeto},
        {id: 2, nombre:"objeto 2", imagen: objeto},
        {id: 3, nombre:"objeto 3", imagen: objeto},
        {id: 4, nombre:"objeto 4", imagen: objeto},
        {id: 5, nombre:"objeto 5", imagen: objeto},
        {id: 6, nombre:"objeto 6", imagen: objeto},
        {id: 7, nombre:"objeto 7", imagen: objeto},
        {id: 8, nombre:"objeto 8", imagen: objeto},
        {id: 9, nombre:"objeto 9", imagen: objeto},
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
