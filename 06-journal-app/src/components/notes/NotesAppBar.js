import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote } from '../../actions/notes'

export const NotesAppBar = () => {

    // importamos el stado de redux para obtener la nota que esta activa ya que por cada manipulacion detextgo estamos modificando el estado de redux
    const { active } = useSelector(state => state.notes)
    const dispatch = useDispatch()

    const handleSave = () => {

        dispatch(startSaveNote(active))
    }

    return (
        <div className="notes__appbar">
            <span>28 de agosto 2020</span>
            <div>
                <button className="btn">
                    Picture
                </button>

                <button className="btn" onClick={handleSave}>
                    Save
                </button>
            </div>
        </div>
    )
}
