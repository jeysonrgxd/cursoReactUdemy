import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUploading } from '../../actions/notes'
import Swal from 'sweetalert2'

export const NotesAppBar = () => {

    // importamos el stado de redux para obtener la nota que esta activa ya que por cada manipulacion detextgo estamos modificando el estado de redux
    const { active } = useSelector(state => state.notes)
    const dispatch = useDispatch()

    const handleSave = () => {
        dispatch(startSaveNote(active))
    }

    const handleLoadImage = (ev) => {
        document.getElementById("subirimagen").click()
    }

    const handleChange = (ev) => {
        // validamos ya que si vuleve a escojer y no escoje nada para no hacer el dispatch innesesario
        const file = ev.target.files[0]

        if (file) {
            dispatch(startUploading(file))
        }
        else {
            Swal.fire("No selecciono nada", "deve seleccionar una imagen", "warning")
        }
    }

    return (
        <div className="notes__appbar">
            <span>28 de agosto 2020</span>
            <input id="subirimagen" type="file" style={{ display: "none" }} onChange={handleChange} />
            <div>
                <button className="btn" onClick={handleLoadImage}>
                    Picture
                </button>

                <button className="btn" onClick={handleSave}>
                    Save
                </button>
            </div>
        </div>
    )
}
