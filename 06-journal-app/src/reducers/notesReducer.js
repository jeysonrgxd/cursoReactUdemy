import { type } from '../types/types'

/*
   nuestro estado de consumo para las notas tendra esta forma

   {
      note:[], //listado del aside
      active: { //cuando seleccionamos uno para visualizar || active:null,  //puede ser null
         id:'dlksajdasjdklsajdklñsad',
         title:'',
         body:'',
         imageUrl:'',
         date:1234546789
      }
   }

*/

// inicializamos el state
const initialState = {
   notes: [],
   active: null
}

export const notesReducer = (state = initialState, action) => {

   switch (action.type) {

      case type.notesLoad:
         return {
            ...state,
            notes: [...action.payload]
         }

      case type.notesAddNew:
         return {
            ...state,
            notes: [action.payload, ...state.notes]

         }

      case type.notesActive:
         return {
            ...state, //esto espara copiar el contenido de una nota
            active: {
               ...action.payload
            }

         }

      case type.notesUpdated:
         return {
            ...state,
            notes: [...action.payload]
         }

      case type.notesDelete:
         return {
            ...state,

            // como estamos borrado la nota tambien tengo que eliminar la nota activa del estado para que se cambie la aplicacion
            active: null,
            notes: [...action.payload]

         }

      case type.notesLogoutCleaning:
         return {
            ...state,
            notes: [],
            active: null,
         }

      default:
         return state
   }
}