import React, { useState } from 'react'
import { AppRoter } from './AppRoter'
import { UserContext } from './UserContext'

export const MainApp = () => {
   
   // const user2 = {
   //    id:1234,
   //    name:"jeyson",
   //    email:"jeysonrgxd@gmail.com"
   // }

   const [user, setUser] = useState({})

   return (


      /* envolvemos nuestro AppRoter con nuestro USerContext para que todos los componentes hijos tengan
      acceso al user */

      // <UserContext.Provider value={user}>

      // le pasamos un objeto enviandole el user y el setUser
      <UserContext.Provider value={{
         user,
         setUser
      }}>

         {/* <h1>MainApp</h1> */}
         <AppRoter></AppRoter>

      </UserContext.Provider>


   )
}
