import React from 'react'
import { useCounter } from '../../hooks/useCounter'

import './counter.css' 

export const CounterWithCustomHook = () => {


   // utilizamos nuestro sutom hook abtrayendolo para poder reutilziarlo, y el codigo sea mas limpio
   const { state, decrement, increment, reset } = useCounter(100)

   return (
      <>
         <h1>Counter with hook: {state}</h1>
         <button onClick={() => increment(2) } className="btn">+1</button>
         <button onClick={reset} className="btn">Reset</button>
         <button onClick={() => decrement(2) } className="btn">-1</button>
      </>
   )
}
