import React from 'react'
import { AppRoter } from './AppRoter'
import { UserContext } from './UserContext'

export const MainApp = () => {
   
   const user = {
      id:1234,
      name:"jeyson",
      email:"jeysonrgxd@gmail.com"
   }

   return (
      <div>

         {/* envolvemos nuestro AppRoter con nuestro USerContext para que todos los componentes hijos tengan
         acceso al user */}
         <UserContext.Provider value={user}>
            {/* <h1>MainApp</h1> */}
            <AppRoter></AppRoter>

         </UserContext.Provider>

      </div>
   )
}
