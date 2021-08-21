import React from 'react'
import { useState } from 'react';
import Modal from 'react-modal'
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal } from '../../actions/ui';
import { eventAddNew, eventClearActive, eventUpdate } from '../../actions/events';
import { useEffect } from 'react';


// este codigo que esta afuera es para que no se vuelva a calcular osea cuando se haga render para que ya no se vuelva a llamar
const customStyles = {
   content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
   },
};

//  enlasamos nuestro modal al root de la aplicacion
Modal.setAppElement('#root');

//esto es para definir el limite de la fecha del evento como un inicio y final,  este codigo que esta afuera es para que no se vuelva a calcular osea cuando se haga render para que ya no se vuelva a llamar
const now = moment().minutes(0).second(0).add(1, 'hours') // #:00:00
const nowPlus1 = now.clone().add(1, 'hours') // #:00:00

export const CalendarModal = () => {

   const dispatch = useDispatch()

   const [dateStart, setDateStart] = useState(now.toDate())
   const [dateEnd, setDateEnd] = useState(nowPlus1.toDate())

   // importamos el estado
   const { modalOpen } = useSelector(state => state.ui)
   const { activeEvent } = useSelector(state => state.calendar)

   // creo este estado para manejar y agregar clases dinamicas
   const [titleValid, setTitleValid] = useState(true)

   const [formValues, setFormValues] = useState({
      title: '',
      notes: '',
      start: dateStart,
      end: dateEnd
   })

   const { title, notes, start, end } = formValues

   useEffect(() => {
      if (activeEvent) {
         setFormValues(activeEvent)
      }
      else {
         setFormValues({
            title: '',
            notes: '',
            start: dateStart,
            end: dateEnd
         })
      }
   }, [activeEvent])


   const handleChange = ({ target }) => {

      setFormValues({
         ...formValues,
         [target.name]: target.value
      })

   }


   const closeModal = () => {

      setFormValues({
         title: '',
         notes: '',
         start: dateStart,
         end: dateEnd
      })
      dispatch(eventClearActive())
      dispatch(uiCloseModal())

   }

   const handleStartDate = (e) => {

      setDateStart(e)

      setFormValues({
         ...formValues,
         start: e
      })

   }

   const handleEndDate = (e) => {

      setDateEnd(e)

      setFormValues({
         ...formValues,
         end: e
      })
   }

   const handleSubmit = (e) => {
      e.preventDefault()

      const startDate = moment(start)
      const endDate = moment(end)

      if (startDate.isSameOrAfter(endDate)) return Swal.fire("Error", "La fecha o hora de inicio es mayor que el final", 'error');

      if (title.trim().length <= 2) return setTitleValid(false);

      //TODO: cuando todo sale bien claro falta mas cosas
      //TODO:  realizar grabación
      setTitleValid(true)

      if (activeEvent) {
         dispatch(eventUpdate({ ...formValues }))
      }
      else {
         dispatch(eventAddNew({
            ...formValues,
            id: new Date().getTime(),
            user: {
               _id: 123,
               name: "jeyson"
            }
         }))

      }


      closeModal()
   }

   return (
      // recordar que eso es un higher-orden-component
      <Modal
         isOpen={modalOpen}
         // onAfterOpen={afterOpenModal}
         onRequestClose={closeModal}
         style={customStyles}
         closeTimeoutMS={200} //esto es para darle una animacion como un transition
         className="modal"
         overlayClassName="modal-fondo"
      >
         <h1>{(activeEvent) ? 'Editando evnto' : 'Editar evento'}</h1>
         <hr />
         <form className="container" onSubmit={handleSubmit} noValidate>

            <div className="form-group">
               <label>Fecha y hora inicio</label>
               <DateTimePicker
                  onChange={handleStartDate}
                  value={start}
                  className="form-control"
               />
            </div>

            <div className="form-group">
               <label>Fecha y hora fin</label>
               <DateTimePicker
                  onChange={handleEndDate}
                  value={end}
                  className="form-control"
                  minDate={dateStart}
               />
            </div>

            <hr />
            <div className="form-group">
               <label>Titulo y notas</label>
               <input
                  type="text"
                  className={`form-control ${!titleValid && 'is-invalid'}`}
                  placeholder="Título del evento"
                  name="title"
                  autoComplete="off"
                  value={title}
                  onChange={handleChange}
               />
               <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
            </div>

            <div className="form-group">
               <textarea
                  type="text"
                  className="form-control"
                  placeholder="Notas"
                  rows="5"
                  name="notes"
                  value={notes}
                  onChange={handleChange}
               ></textarea>
               <small id="emailHelp" className="form-text text-muted">Información adicional</small>
            </div>

            <button
               type="submit"
               className="btn btn-outline-primary btn-block"
            >
               <i className="far fa-save"></i>
               <span> Guardar</span>
            </button>

         </form>
      </Modal >
   )
}
