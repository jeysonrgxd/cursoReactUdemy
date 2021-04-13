import React, { useRef } from 'react'
import '../02-useEffect/effect.css'

export const FocusScreen = () => {

   // hace una refrencia a nuestro elemento el cual le pasemos el refInput con eso podemos hacer cosas como acceder validar elementos
   const refInput = useRef()

   const handleFocus = () => {

      refInput.current.select()
      console.log(refInput)
   }

   return (
      <div>
         <h1>Focus Screen</h1>
         <hr />
         <input
            type="text"
            className="form-control"
            placeholder="Su nombre"
            ref={refInput}
         />

         <button
            className="btn btn-primary mt-3"
            onClick={handleFocus}
         >
            focus
         </button>

      </div>
   )
}
