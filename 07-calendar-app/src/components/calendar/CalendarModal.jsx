import React from 'react'
import { useState } from 'react';
import Modal from 'react-modal'

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

export const CalendarModal = () => {
   // para hacer una oprueba manejaremos el modal con unestado ya que se manejara con reduux
   const [isOpen, setIsOpen] = useState(true)

   const closeModal = () => {
      setIsOpen(false)
      console.log("Cerrando modal...");
   }

   return (
      // recordar que eso es un higher-orden-component
      < Modal
         isOpen={isOpen}
         // onAfterOpen={afterOpenModal}
         onRequestClose={closeModal}
         style={customStyles}
         closeTimeoutMS={200} //esto es para darle una animacion como un transition
         className="modal"
         overlayClassName="modal-fondo"
      >
         <h1>Hola mundo</h1>
         <hr />
         <span>Hola de nuevo...</span>
      </Modal >
   )
}
