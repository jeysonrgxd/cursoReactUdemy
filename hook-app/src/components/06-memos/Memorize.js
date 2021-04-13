import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small'

import '../02-useEffect/effect.css'

export const Memorize = () => {

   const { counter, increment } = useCounter(1)

   const [show, setShow] = useState(true)

   return (
      <div>
         <h1>Memorize <Small value={counter} ></Small>  </h1>
         <hr />

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
