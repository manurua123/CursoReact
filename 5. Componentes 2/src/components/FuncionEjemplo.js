import { useState } from "react";



const FuncionEjemplo =() =>{
  const[contador,setContador] = useState(0);
  return(
    <div>
      <button onClick={() => setContador((contador) => contador +1)}> sumar</button>
      Contador:{contador}
    </div>
  )
  
}

export default FuncionEjemplo;