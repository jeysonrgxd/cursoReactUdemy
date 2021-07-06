import { db } from '../firebase/firebase-config'

export const loadNotes = async (uid) => {

   const notesSnap = await db.collection(`${uid}/journal/notes`).get() //obtenemos las notas con nuestro identificador obtenido una vez logeados
   const notes = []
   // usamos la funcion foreach para obtener las notas ya que si las examinas es nesesario hacerlas de este modo
   notesSnap.forEach(snapHijo => {
      notes.push({
         id: snapHijo.id,
         ...snapHijo.data()
      })
   })

   return notes

}