// cramos y esportamos la funcion que tendra nuestro acciones para cambiar nuestro estado, siempre tiene que devolver el estado
export const todoReducer = (state = [], action) => {
   switch (action.type) {
      case 'add':
         return [...state, action.payload]

      case 'delete':
         return state.filter(todo => todo.id !== action.payload)
      
      case 'toggle':
         return state.map(todo => 
            (todo.id === action.payload)
               ? {...todo,done:!todo.done}
               :todo   
         )

      case 'toggle-old':
         return state.map(todo => {
            if (todo.id === action.payload) {
               // todo.done = !todo.done
               // return todo
               return {
                  ...todo,
                  done:!todo.done
               }
            } else {
               return todo
            }
         })

      default:
         return state
   }
}