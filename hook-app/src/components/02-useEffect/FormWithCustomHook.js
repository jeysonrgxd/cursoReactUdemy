import React from 'react'
import { useForm } from '../../hooks/useForm'
import './effect.css'


export const FormWithCustomHook = () => {

   // usamos nuestgro customHook, y le pasamos el valor inicial de nuestro estados para el manejo de nuestro formulario
   const [formSate, handleInput] = useForm({
      name: '',
      email: '',
      password: ''
   })

   const { name, email, password } = formSate

   const handleSubmitForm = (e) => {

      e.preventDefault()
      console.log(formSate)

   }
   return (
      <form onSubmit={handleSubmitForm}>
         <h1>FormWithCustomHook</h1>
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

         <div className="form-group">
            <input
               className="form-control"
               type="password"
               name="password"
               placeholder="****"
               value={password}
               onChange={handleInput}
            />
         </div>

         <div className="form-group">
            <button className="btn btn-primary">Enviar</button>
         </div>

      </form>
   )
}
