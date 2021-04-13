import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value = 10 }) => {

   //  no podemos mutar el estado del state para eso esta la funcion que nos devuelve el useSatate
   const [add, setAdd] = useState(value)

   const handelAdd = _ => setAdd(add + 1)
   const handelQuitar = _ => setAdd(add - 1)
   const handelReset = _ => setAdd(value)

   return (
      <>
         <h1>CounterApp</h1>
         <h2> {add} </h2>
         <button onClick={handelAdd}>+1</button>
         <button onClick={handelReset}>Reset</button>
         <button onClick={handelQuitar}>-1</button>
         {/* <button onClick={(ev) => handelAdd(ev)}>+1</button> */}
      </>
   )
}

// CounterApp.propTypes = {
//    value:PropTypes.number.isRequired
// }

export default CounterApp
