import { useState } from "react"

export const useCounter = (initial) => {

   const [counter, setCounter] = useState(initial)

   const increment = () => setCounter(counter + 1) 
   const decrement = (num = 1) => setCounter(counter - num) 
   const reset = () => { setCounter(initial) }

   return {
      counter,
      increment,
      decrement,
      reset
   }



}
