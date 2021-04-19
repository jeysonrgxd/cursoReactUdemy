// cramos y esportamos la funcion que tendra nuestro acciones para cambiar nuestro estado, siempre tiene que devolver el estado
export const todoReducer = (state = [], action) => {
   switch (action.type) {
      case 'add':
         return [...state, action.payload]

      case 'delete':
         return state.filter(todo => todo.id !== action.payload)

      default:
         return state
   }
}