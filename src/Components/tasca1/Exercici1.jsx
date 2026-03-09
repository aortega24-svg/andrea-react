
import { useState } from 'react'

function Contador() {

    const [contador, setContador] =useState(0)
    
    function incrementar(){
        setContador(contador +1)
    }

     function reiniciar(){
        setContador(0)
    }

     function decrementar(){
        setContador(contador -1)
    }
    
  return (
   <div>
    <h1> contador1 </h1>
    <p> {contador}</p>


    <button onClick={decrementar}>Decrementar</button>
    <button onClick={incrementar}>Incrementar</button>


   </div>
      
  )
}

export default Contador