import React, { useState } from 'react'
import { MultipleCustomHook } from '../03-examples/MultipleCustomHook'

import '../02-useEffect/effect.css'

export const RealExampleRef = () => {

   const [show, setShow] = useState(true)

   return (
      <div>
         <h1>RealExampleRef</h1>
         <hr />

         {show && <MultipleCustomHook />}

         <button
            className="btn btn-primary mt-3"
            onClick={() => setShow(!show)}
         >Show/Hide</button>
      </div>
   )
}
