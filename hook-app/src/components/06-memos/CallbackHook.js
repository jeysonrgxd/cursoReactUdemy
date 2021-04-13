import React, { useCallback, useEffect, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

import '../02-useEffect/effect.css'

export const CallbackHook = () => {

   const [counter, setCounter] = useState(1)

   // const increment = () => {
   //    setCounter(counter + 1)
   // }

   // uno de los casos del useCallback, es cuando se pasa una funcion a un componente hijo es mejor pasarle la funcion pero generado con useCallback para que memorize la funcion y no se vuelva a llamar cuando se renderize nuevamente
   const increment = useCallback( (num) => {
         setCounter(c => c + num)

   }, [setCounter])

   // tambien se utiliza pasando la dependencia a useEffect para que no se este ejecutando a cada rato
   useEffect(() => {
      console.log("efecto generado")
   }, [increment])

   return (
      <div>
         <h1>useCallback Hook {counter}</h1>
         <hr />
         <ShowIncrement increment={increment}></ShowIncrement>
      </div>
   )
}
