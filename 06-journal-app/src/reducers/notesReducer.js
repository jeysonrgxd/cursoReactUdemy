/*
   nuestro estado de consumo para las notas tendra esta forma

   {
      note:[], //listado del aside
      active:null,  //puede ser null
      active: { //cuando seleccionamos uno para visualizar
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
      default:
         return state
   }
}