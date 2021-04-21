import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
   return (
      <>
         <ul className="list-group list-group-flush">
            {
               todos.map((todo, i) => {
                  return <TodoListItem
                     key={todo.id}
                     todo={todo}
                     i={i}
                     handleDelete={handleDelete}
                     handleToggle={handleToggle}
                  ></TodoListItem>
               })
            }
         </ul>
      </>
   )
}
