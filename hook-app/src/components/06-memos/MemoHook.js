import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { procesoPesado } from '../../helpers/procesoPesado'

import '../02-useEffect/effect.css'

export const MemoHook = () => {

   const { counter, increment } = useCounter(1)

   const [show, setShow] = useState(true)

   // si algo cambia quiero memorizar el nuevo resultado, si el counter cambia nesesito una nueva version memorizada del resultado de esa funcion, "HEY REACT MEMORIZA ESTE VALOR SI LOS ARGUMENTOS SON IGUALES PERO SI CAMBIAN ENTONSES SI HAY QUE REPROCESARLO"
   const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

   return (
      <div>
         <h1>Memorize <small>{counter}</small>  </h1>
         <hr />
         <p>{memoProcesoPesado}</p>

         <button
            className="btn btn-primary"
            onClick={increment}
         >+1</button>

         <button
            className="btn btn-outline-primary ml-3"
            onClick={() => {
               setShow(!show)
            }}
         >show/hide {JSON.stringify(show)}</button>

      </div>
   )
}
