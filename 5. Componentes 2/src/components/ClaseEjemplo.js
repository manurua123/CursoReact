import {Component} from 'react'

class ClaseEjemplo extends Component {
    //esto viene definido por parte de todas las clasee
    constructor(props){
        super(props);

        this.state ={
            contador:0,
        };
    }

    //funcion ejemplo
    contarCLick(e){
        e.preventDefault();
        let nuevoNumuero = this.state.contador +1
        this.setState({contador: nuevoNumuero})
        console.log("se hizo clic");
    }
    //unico metodo obligatorio
render () {
    console.log("[ClaseEjemplo.js]  render");
    return(
        <>
        <button onClick={(e)=>this.contarCLick(e)}> Sumar</button>
        Contador: {this.state.contador}
        </>
    )
}

//se invoca despues de que se motna un componente
componentDidMount(){
    console.log("[ClaseEjemplo.js]  componentDidMount");
}

//se ejecuta justo antes de terminar la ejecuciuon del componente
componentWillUnmount(){
    console.log("[ClaseEjemplo.js]  componentWillUnmount");
}

//se invoca cuando se actualiza
componentDidUpdate(){
    console.log("[ClaseEjemplo.js]  componentWillUnmount");
}
}

export default ClaseEjemplo;