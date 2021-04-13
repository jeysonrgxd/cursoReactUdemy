import React, { useEffect, useState } from 'react'
import './effect.css'
import { Message } from './Message'

export const SimpleForm = () => {

   const [formSate, setformSate] = useState({
      name: '',
      email: ''
   })

   const { name, email } = formSate

   // si no le pasamos otro parametro despues del callback se ejecutara esta funcion cada vez que haga cualquier cambio en los estados del componente, al ponerle un [] asi vacio solo se ejecutara la primera vez del renderizado
   useEffect(() => {
      // console.log("Efecto Activado");
   }, [])

   // activamos el useEffect solo cuando cambia el estado completo
   useEffect(() => {
      // console.log("Efecto Activado cambio estado completo");
   }, [formSate])

   // activamos el useEffect solo cuando cambia el estado name
   useEffect(() => {
      // console.log("Efecto Activado cambio estado name");
   }, [name])

   // activamos el useEffect solo cuando cambia el estado email
   useEffect(() => {
      // console.log("Efecto Activado cambio estado email");
   }, [email])

   const handleInput = ({ target }) => {
      setformSate({
         ...formSate,
         [target.name]: target.value
      })
   }

   return (
      <>
         <h1>UseEffect</h1>
         <hr />

         <div className="form-group">
            <input
               className="form-control"
               type="text"
               name="name"
               placeholder="Tu nombre"
               value={name}
               onChange={handleInput}
            />
         </div>
         <div className="form-group">
            <input
               className="form-control"
               type="text"
               name="email"
               placeholder="Tu correo"
               value={email}
               onChange={handleInput}
            />
         </div>

         {/* se renderiza esto cuando el valor del estado name es 123 */}

         {(name === '123') && <Message></Message>} 

      </>
   )
}
