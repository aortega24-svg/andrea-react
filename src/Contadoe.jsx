
import { useState } from 'react'
import './App.css'

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
    <h1> contador </h1>
    <p> {contador}</p>


    <button onClick={decrementar}>Decrementar</button>
    <button onClick={reiniciar}>Reiniciar</button>
    <button onClick={incrementar}>Incrementar</button>


   </div>
      
  )
}

export default Contador