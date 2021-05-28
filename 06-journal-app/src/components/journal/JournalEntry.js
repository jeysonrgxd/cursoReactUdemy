import React from 'react'

export const JournalEntry = () => {
   return (
      <div className="journal__entry">
         <div
            className="journal__entry-picture"
            // el style en react tiene que ser un objeto donde especifiquemos toda el stylo que tendre este elemento
            style={{
               backgroundSize: 'cover',
               backgroundImage: 'url(https://cdn.atomix.vg/wp-content/uploads/2021/05/New-Project-33.jpg)',
               backgroundPosition: 'center'
            }}
         >
         </div>

         <div className="journal__entry-body">
            <p className="journal__entry-title">
               Un nuevo día
            </p>
            <p className="journal__entry-content">
               hola esto es un de como estas tu del hola de ayer
            </p>
         </div>

         <div className="jounal__entry-date-box">
            <span>Monday</span>
            <h4>28</h4>
         </div>

      </div>
   )
}
