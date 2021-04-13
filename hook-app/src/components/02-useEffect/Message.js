import React, { useEffect, useState } from 'react'

export const Message = () => {

   const [coords, setcoords] = useState({ x: 0, y: 0 })

   const { x, y } = coords

   // el use efect se ejecuta su callback cuando se renderiza o especificamos algun cambio, luego el return devuelve una funcion, el cual se activara cuando el componente se desmonte(desapareca) (limpiar algo o reiniciar)
   useEffect(() => {

      console.log("Componente montado y evento iniciado")

      const handleEventMouseMove = (e) => {

         console.log({ x: e.x, y: e.y })

         setcoords({
            x: e.x,
            y: e.y
         })
      }

      window.addEventListener("mousemove", handleEventMouseMove)

      return () => {

         console.log("Componente Desmontado y evento removido");

         window.removeEventListener("mousemove", handleEventMouseMove)


      }
   }, [])

   return (
      <div>
         <h3>Eres genial.!</h3>
         <p>
            x:{x}, y:{y}
         </p>
      </div>
   )
}
