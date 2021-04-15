// creamos el estado inicial
let initialState = [{
   id: 1,
   todo: "Comprar pan",
   done: false
}]

// creamos nuestro todo
const todoReducer = (state = initialState, action) => {
   // if(action){
      if (action?.type === "agregar"){
         // regresamos un nuevo estado pero usando spreed
         return [...state, action.payload]
      }
   // }
   return state
}

console.log(todoReducer())

// obtenemos los todos
let todos = todoReducer()

//nuevo estado 
let newState = {
   id: 2,
   todo: "Comprar leche",
   done: false
}

// creamos una accion para pasarselo al todoReducer
let agregarTodoAction = {
   type:"agregar",
   payload:newState
}

// actualizamos los todo agregando una accion : agregar
todos = todoReducer(todos,agregarTodoAction)

console.log(todos);



