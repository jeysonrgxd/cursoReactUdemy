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

      case type.notesActive:
         return {
            ...state, //esto espara copiar el contenido de una nota
            active: {
               ...action.payload
            }

         }

      default:
         return state
   }
}