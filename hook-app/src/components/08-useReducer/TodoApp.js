import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer' //importamos la funcion que tendra nuestras accione spara modificar el stado se useReducer
// import { useForm } from '../../hooks/useForm'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'

import './style.css'

// estado inicial para pasarselo ami useReducer
// const initialState = [{
//    id: new Date().getTime(),
//    desc: 'Aprender React',
//    done: false
// }]


const init = () => {

   // cuando se vuleve a cargar la pagina lee mi locaStorage obtiene y inicializa nuestro useReducer
   // si retorna null devuelveme un array vacio
   return JSON.parse(localStorage.getItem("todos")) || []

   // return [{
   //    id: new Date().getTime(),
   //    desc: 'Aprender React',
   //    done: false
   // }]
}

export const TodoApp = () => {

   // recibe una funcion donde especificamos la acion el cual cambiara nuestro estado, luego recive el estado inicial, tambien recive otro parametro init pero hay que estudiarla ams adelante,

   // el dispatch es la funcion en donde le pasaremos una accion el cual tiene que tener el typo y el payload(informacion), el typo por que este enviara esos datos al todoReducer que es donde creamos todas nuestras acciones que manipulan el stado , es por eso el useReducer recive primero la especificacion de las acciones que tendra el estado y el otro parametro es el estado inicial, este hook devuelve un stado nuevo ya procesado en todoReducer o funcion manejadora de accion a cambiar para el stado 

   // const [todos, dispatch] = useReducer(todoReducer, initialState)
   // usamos el init para poder compilar todo y pasar el resultado al initalState
   const [todos, dispatch] = useReducer(todoReducer, [], init)

   // const [{ description }, handleInput, reset] = useForm({
   //    description: ''
   // })

   useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos))

   }, [todos]) // si los todos cambian tengo que volver a grabar en el local storage

   const handleAdd = (newTodo) => {
      dispatch({
         type: "add",
         payload: newTodo
      })
   }

   // const handleSubmit = (event) => {

   //    event.preventDefault()

   //    if (description.trim().length <= 1) {
   //       return;
   //    }

   //    let newTodo = {
   //       id: new Date().getTime(),
   //       desc: description,
   //       done: false

   //    }

   //    let action = {
   //       type: "add",
   //       payload: newTodo
   //    }

   //    dispatch(action)

   //    reset()

   // }

   const handleDelete = (todoId) => {

      console.log(todoId)

      // creamos la accion que sera llamada para el useReducer
      let action = {
         type: "delete",
         payload: todoId
      }

      // ejecutamos el disp??tch para cambiar y devolver el estado nuevo
      dispatch(action)

   }

   const handleToggle = (todoid) => {

      dispatch({
         type: "toggle",
         payload: todoid
      })
   }

   return (
      <div>
         <h1>TodoApp {todos.length}</h1>
         <br />
         <div className="row">
            <div className="col-7">
               <TodoList
                  todos={todos}
                  handleDelete={handleDelete}
                  handleToggle={handleToggle}
               ></TodoList>
            </div>
            <div className="col-5">
               <TodoAdd handleAdd={handleAdd} />
            </div>
         </div>

      </div>
   )
}
