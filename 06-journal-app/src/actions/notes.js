import { type } from '../types/types'
import { db } from '../firebase/firebase-config'
import { loadNotes } from '../helpers/loadNotes'

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

export const startLoadingNotes = (uid) => {

   return async (dispatch) => {

      const notas = await loadNotes(uid)
      dispatch(setNotes(notas))
   }
}

export const setNotes = (notes) => ({
   type: type.notesLoad,
   payload: notes
})

export const startSaveNote = (note) => {
   // como esto es una trea acyncrona usaremos thunk
   return async (dispatch, getState) => { //tambien utilizamos el getState por que nesesitaremos el id del usuario

      const { uid } = getState().auth;

      // obtenemos un copia de la nota la cual guardaremos enviando a firebase pero tenemos que borrar el id ya que no es nesesario y es por eso que copiamos para despues borrarlo y sin tocar el parametro note
      const noteForFirebase = { ...note }
      delete noteForFirebase.id

      // borramos el url si es que es undefined o no tiene valor ya que firebase no acepta valores undefined
      if (!noteForFirebase.url) {
         delete noteForFirebase.url
      }

      await db.doc(`${uid}/journal/notes/${note.id}`).update(noteForFirebase)

   }
}