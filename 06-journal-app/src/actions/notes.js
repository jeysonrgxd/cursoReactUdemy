import { type } from '../types/types'
import { db } from '../firebase/firebase-config'
import { loadNotes } from '../helpers/loadNotes'
import Swal from 'sweetalert2'

import { fileUpload } from '../helpers/fileUpload'

// react-journal

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

      // usamos un dispatch mas para cambiar el estado de las notas y redibujar de nuevo la lista de notas
      dispatch(addNewNote(doc.id, newNote))

   }
}

export const addNewNote = (id, note) => ({
   type: type.notesAddNew,
   payload: {
      id,
      ...note
   }
})

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

      // obtenemos las notas del estado de redux, despues obtnemos el id de la nota active del parametro que recivimos
      const { notes } = getState().notes;
      const { id: idActiveNote } = note

      // obtenemos un copia de la nota la cual guardaremos enviando a firebase pero tenemos que borrar el id ya que no es nesesario y es por eso que copiamos para despues borrarlo y sin tocar el parametro note
      const noteForFirebase = { ...note }
      delete noteForFirebase.id

      // borramos el url si es que es undefined o no tiene valor ya que firebase no acepta valores undefined
      if (!noteForFirebase.url) {
         delete noteForFirebase.url
      }

      await db.doc(`${uid}/journal/notes/${note.id}`).update(noteForFirebase)

      dispatch(refreshNote(idActiveNote, note, notes)) //hacemos dispacth para actualizar el array de estradas que tenemos en local (estado redux)

      Swal.fire("Saved", note.title, 'success') //alerta de mensaje y todo bien

   }
}

// funcion para actualizar el stado redux array de entradas
export const refreshNote = (id, noteActive, notes) => {

   const newNotesArray = notes.map(
      noteItem => (noteItem.id === id) ? noteItem = { ...noteActive } : noteItem
   )

   return {
      type: type.notesUpdated,
      payload: newNotesArray
   }
}

// usamos thunk por se ara peticiones asyncronas tanto como para guardar la imagen en cloug bynary como guardar el path url en firebase
export const startUploading = (file) => {

   return async (dispatch, getState) => {

      const { active: activeNote } = getState().notes

      Swal.fire({
         title: "Cargando..",
         text: "Por favor esperar",
         allowOutsideClick: false,
         didOpen: () => {
            Swal.showLoading()
         }


      })

      const fileCloudData = await fileUpload(file)

      activeNote.url = fileCloudData.url

      // una vez subido la imagen obtenemos la url generada y asemos el dispatch para guardar en firebase y tambien actualizar el estado
      dispatch(startSaveNote(activeNote))

      Swal.close()

   }
}

// borrar nota

export const startDeleting = (id) => {

   return async (dispatch, getState) => {
      // obtenemos el id del usuario
      const uid = getState().auth.uid
      const notes = getState().notes.notes

      await db.doc(`/${uid}/journal/notes/${id}`).delete()

      // asemos dispatch para cambiar el stado para que tambien sevea el borrado de la nota en la aplicacion
      dispatch(noteDelete(id, notes))

   }
}

export const noteDelete = (id, notes) => {

   let notesFilter = Array.from(notes).filter((note) => {
      return note.id !== id
   })

   return {
      type: type.notesDelete,
      payload: notesFilter
   }
}

export const noteLogout = () => ({
   type: type.notesLogoutCleaning
})