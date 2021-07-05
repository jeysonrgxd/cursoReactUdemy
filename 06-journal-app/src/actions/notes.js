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

      const doc = await db.collection(`${uid}/journal/notes`).add(newNote)

      console.log(doc)

   }
}