import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer' //importamos la funcion que tendra nuestras accione spara modificar el stado se useReducer

import './style.css'

// estado inicial para pasarselo ami useReducer
const initialState = [{
   id: new Date().getTime(),
   desc: 'Aprender React',
   done: false
}]

export const TodoApp = () => {

   // recibe una funcion donde especificamos la acion el cual cambiara nuestro estado, luego recive el estado inicial, tambien recive otro parametro init pero hay que estudiarla ams adelante

   const [todos] = useReducer(todoReducer, initialState)

   console.log(todos);

   return (
      <div>
         <h1>TodoApp {todos.length}</h1>
         <br/>
         <div className="row">
            <div className="col-7">
               <ul className="list-group list-group-flush">
                  {
                     todos.map((todo, i) => {
                        return <li key={todo.id} className="list-group-item">
                           <p className="text-center">{i + 1}.{todo.desc}</p>
                           <button className="btn btn-danger">Borrar</button>
                        </li>
                     })
                  }
               </ul>
            </div>
            <div className="col-5">
               <h4>Agregar TODO</h4>
               <hr/>
               <form action="">
                  <input 
                  className="form-control"
                  type="text"
                  name="description"
                  placeholder="Aprender ...."
                  autoComplete="off"
                  />
                  <button className="btn btn-outline-primary btn-block mt-2 ">Agregar</button>
               </form>
            </div>
         </div>
         
      </div>
   )
}
