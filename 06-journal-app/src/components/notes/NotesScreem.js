import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { NotesAppBar } from './NotesAppBar'

export const NotesScreem = () => {

    const { active: note } = useSelector(state => state.notes)

    // const [noteTile, setnoteTile] = useState(title)

    // const handleChange = ({ target }) => {
    //     setnoteTile(target.value)
    // }

    // esto funcionara solo una vez por que estamos manejando el estado
    const [formValues, inputChange, reset] = useForm(note)
    const { body, title, url } = formValues

    // creamos una constante usando useRef para almacenar una variable mutuble que no va redibujar todo el componente si cambia
    const activeId = useRef(note.id)

    // ejecutamos esta accion si o solosi el id de la nota es diferente ya que si no validamos de esta manera crearemos un bucle infinito
    useEffect(() => {
        if (note.id !== activeId) {
            // es aqui donde recien reseteamos el useForm usando reset pasandole la nueva nota para que asi cambie el estado y veamos los cambios reflejados
            reset(note)
            // despues devemos establecer al reference el nuevo id, y asi evitar el ciclo infinito
            activeId.current = note.id
        }

    }, [note, reset])


    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    value={title}
                    onChange={inputChange}
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    value={body}
                    onChange={inputChange}
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
