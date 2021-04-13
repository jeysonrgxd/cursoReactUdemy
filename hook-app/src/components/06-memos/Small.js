// import React, {memo} from 'react'
import React from 'react'

//memo o React.memo : regresa la forma memorizada del componente, solo se disparara el componente si las propertis cambian
export const Small = React.memo(({ value }) => {
   console.log("cambiado")
   return (
      <small>{value}</small>
   )
})
