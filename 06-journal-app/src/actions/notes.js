import { type } from '../types/types'
import { db } from '../firebase/firebase-config'

export const startNewNote = () => {
   // este segundo argumento es para obtener el estado de redux
   // return (dispatch, getState) => {
   return async (dispatch, getState) => {

      const { uid } = getState().auth

      // creamos la note que quiero crear

      const newNote = {
         title: '',
         body: '',
         date: new Date().getTime()
      }

      // aca gurdamos los datos en firebase dandole la ruta que creamos collection documento
      const doc = await db.collection(`${uid}/journal/notes`).add(newNote)

      // sin una funcion returnadora
      // dispatch({
      //    type: type.notesActive,
      //    payload: {
      //       id: doc.id,
      //       ...newNote
      //    }
      // })

      // usando funcion retornadora
      dispatch(activeNote(doc.id, newNote))

   }
}

export const activeNote = (id, note) => ({ //regresamos un objeto de manera defrente sin return solo usando los parentesis
   type: type.notesActive, //que tipo de accion
   payload: {
      id,
      ...note
   }
})