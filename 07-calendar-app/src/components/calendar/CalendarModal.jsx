import React from 'react'
import { useState } from 'react';
import Modal from 'react-modal'
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';

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

const now = moment().minutes(0).second(0).add(1, 'hours') // #:00:00
const end = now.clone().add(1, 'hours') // #:00:00

export const CalendarModal = () => {

   const [dateStart, setDateStart] = useState(now.toDate())
   const [dateEnd, setDateEnd] = useState(end.toDate())


   const closeModal = () => {

   }

   const handleStartDate = (e) => {
      console.log(e);
      setDateStart(e)
   }

   const handleEndDate = (e) => {
      console.log(e);
      setDateEnd(e)
   }

   return (
      // recordar que eso es un higher-orden-component
      < Modal
         isOpen={true}
         // onAfterOpen={afterOpenModal}
         onRequestClose={closeModal}
         style={customStyles}
         closeTimeoutMS={200} //esto es para darle una animacion como un transition
         className="modal"
         overlayClassName="modal-fondo"
      >
         <h1> Nuevo evento </h1>
         <hr />
         <form className="container">

            <div className="form-group">
               <label>Fecha y hora inicio</label>
               <DateTimePicker
                  onChange={handleStartDate}
                  value={dateStart}
                  className="form-control"
               />
            </div>

            <div className="form-group">
               <label>Fecha y hora fin</label>
               <DateTimePicker
                  onChange={handleEndDate}
                  value={dateEnd}
                  className="form-control"
                  minDate={dateStart}
               />
            </div>

            <hr />
            <div className="form-group">
               <label>Titulo y notas</label>
               <input
                  type="text"
                  className="form-control"
                  placeholder="Título del evento"
                  name="title"
                  autoComplete="off"
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
