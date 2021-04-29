import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {

   // Importamos el hook useContext, pasandole nuestro componente UserContext
   const context = useContext(UserContext)

   console.log(context)

   return (
      <div>
         <h1>AboutScreen</h1>
      </div>
   )
}
