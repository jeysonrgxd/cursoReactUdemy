import React from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({ handleAdd }) => {

   const [{ description }, handleInput, reset] = useForm({
      description: ''
   })

   const handleSubmit = (event) => {

      event.preventDefault()

      if (description.trim().length <= 1) {
         return;
      }

      let newTodo = {
         id: new Date().getTime(),
         desc: description,
         done: false

      }

      handleAdd(newTodo)
      reset()
   }


   return (
      <>
         <h4>Agregar TODO</h4>
         <hr />
         <form
            onSubmit={handleSubmit}
            action="">
            <input
               className="form-control"
               type="text"
               name="description"
               value={description}
               placeholder="Aprender ...."
               autoComplete="off"
               onChange={handleInput}
            />
            <button
               type="submit"
               className="btn btn-outline-primary btn-block mt-2 "
            >Agregar</button>
         </form>
      </>
   )
}
