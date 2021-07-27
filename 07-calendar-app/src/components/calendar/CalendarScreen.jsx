// esta es la pantalla propiamente donde estaremos trabajando
import React from 'react'
import { NavBar } from '../ui/NavBar'
import moment from 'moment'
// importamos las cosas para usar bigcalendar
import { Calendar, momentLocalizer } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css";

// seguimos los pasos de la libreria de calendario
const localizer = momentLocalizer(moment)

// creamos nuestra lista de eventos
const events = [
   {
      title: "Cumpleaños del jefe",
      start: moment().add(2, 'hours').toDate(),
      end: moment().add(4, 'hours').toDate(),
      bgcolor: '#a10303'

   }
]

export const CalendarScreen = () => {
   return (
      <div className="calendar-screen">
         <NavBar></NavBar>

         <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
         ></Calendar>
      </div>
   )
}
