import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote } from '../../actions/notes'
import { useForm } from '../../hooks/useForm'
import { NotesAppBar } from './NotesAppBar'

export const NotesScreem = () => {

    const dispatch = useDispatch()

    const { active: note } = useSelector(state => state.notes)

    // const [noteTile, setnoteTile] = useState(title)

    // const handleChange = ({ target }) => {
    //     setnoteTile(target.value)
    // }

    // esto funcionara solo una vez por que estamos manejando el estado
    const [formValues, handleInputChange, reset] = useForm(note)
    const { body, title, url } = formValues

    // creamos una constante usando useRef para almacenar una variable mutuble que no va redibujar todo el componente si cambia
    const activeId = useRef(note.id)

    // ejecutamos esta accion si o solosi el id de la nota es diferente ya que si no validamos de esta manera crearemos un bucle infinito
    useEffect(() => {
        if (note.id !== activeId.current) {
            // es aqui donde recien reseteamos el useForm usando reset pasandole la nueva nota para que asi cambie el estado y veamos los cambios reflejados
            reset(note)
            // despues devemos establecer al reference el nuevo id, y asi evitar el ciclo infinito
            activeId.current = note.id
        }

    }, [note, reset])

    // creamos un useEffect para que cuando cambie nuestro estado que nos devuelve el useForm haga el dispatch asi tenemos cada letra que cambiamos en //la aplicacion reflejada al estado global de redux

    useEffect(() => {

        dispatch(activeNote(formValues.id, { ...formValues }))

    }, [formValues, dispatch])

    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    value={title}
                    name="title"
                    onChange={handleInputChange}
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    value={body}
                    name="body"
                    onChange={handleInputChange}
                >
                </textarea>

                {
                    url && (
                        <div className="notes__image">
                            <img
                                src="https://lasimagenesdegoku.com/wp-content/uploads/2017/08/Goku_ssj_1_by_gokusuke.jpg"
                                alt="image goku" />
                        </div>
                    )
                }
            </div>
        </div>
    )
}
