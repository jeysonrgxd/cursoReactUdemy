import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'

import '../02-useEffect/effect.css'

export const Layout = () => {

   const { counter, increment } = useCounter(1)

   const info = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

   const { data } = info

   const { quote } = !!data && data[0]

   const refQuote = useRef()

   // usuamos un useState para poder pintar el codigo del getBoundigClientRect
   const [boxSize, setboxSize] = useState({})

   // este hook se dispara cuando todo esta renderizado mayormente es poco usable y si se usa se usa mas en obtener elemento y propiedades del doom, tiene la misma que use Effect
   useLayoutEffect(() => {

      setboxSize(refQuote.current.getBoundingClientRect())
   }, [quote])


   return (
      <div>
         <h1>BreakingBad Quotes</h1>
         <hr />

         <blockquote className="blockquote text-right d-flex">
            <p
               ref={refQuote}
               className="mb-0" >{quote}</p>
         </blockquote>

         <pre>
            {JSON.stringify(boxSize, null, 3)}
         </pre>


         <button
            className="btn btn-primary"
            onClick={increment}
         >Next</button>

      </div>
   )
}
