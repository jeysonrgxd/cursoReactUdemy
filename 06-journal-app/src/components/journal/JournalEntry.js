import React from 'react'
import moment from 'moment'

export const JournalEntry = ({ body, date, id, title, url }) => {

   let tiempo = moment(date)
   tiempo.locale("es")

   return (
      <div className="journal__entry">

         {
            url &&
            (<div
               className="journal__entry-picture"
               // el style en react tiene que ser un objeto donde especifiquemos toda el stylo que tendre este elemento
               style={{
                  backgroundSize: 'cover',
                  backgroundImage: url ? url : 'url(https://cdn.atomix.vg/wp-content/uploads/2021/05/New-Project-33.jpg)',
                  backgroundPosition: 'center'
               }}
            >
            </div>)

         }


         <div className="journal__entry-body">
            <p className="journal__entry-title">
               {title}
            </p>
            <p className="journal__entry-content">
               {body}
            </p>
         </div>

         <div className="jounal__entry-date-box">
            <span>{tiempo.locale("es").format("dddd")}</span>
            <h4>{tiempo.format("Do")}</h4>
         </div>

      </div>
   )
}
