// esta es la pantalla propiamente donde estaremos trabajando
import React from 'react'
import { NavBar } from '../ui/NavBar'
import moment from 'moment'
import 'moment/locale/es'
// importamos las cosas para usar bigcalendar
import { Calendar, momentLocalizer } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css";
import { messages } from '../../helpers/calendar-messages-es';
import { CalendarEvent } from './CalendarEvent'
import { useState } from 'react'
import { CalendarModal } from './CalendarModal'
import { useDispatch, useSelector } from 'react-redux'

// importamos las acciones para manejar l estado
import { uiOpenModal } from '../../actions/ui'
import { eventClearActive, eventSetActive } from '../../actions/events'
import { AddNewFab } from './AddNewFab'
import { DeleteEventFab } from '../ui/DeleteEventFab'

// como el calendario que estamos utilziando moment solo cambiamos el idioma en este para que se cambie los que falta traducirte
moment.locale("es")

// seguimos los pasos de la libreria de calendario
const localizer = momentLocalizer(moment)

// creamos nuestra lista de eventos
// const events = [
//    {
//       title: "Cumpleaños del jefe",
//       start: moment().add(2, 'hours').toDate(),
//       end: moment().add(4, 'hours').toDate(),
//       bgcolor: '#a10303',
//       user: {
//          _id: "2H3NFI3NDKSDKS",
//          name: "Jeyson"
//       }

//    }
// ]

export const CalendarScreen = () => {

   // cramos un estado para manejar y actualizar la vista en donde estamos
   const [lastview, setLastview] = useState(localStorage.getItem("lastView") || "month")
   const dispatch = useDispatch()
   const { events, activeEvent } = useSelector(state => state.calendar)

   // creamos eventos que estaran pendientes a acciones que van asuceder
   const onDoubleClick = (e) => {
      dispatch(uiOpenModal())
   }

   const onSelect = (e) => {
      dispatch(eventSetActive(e))
   }

   const onViewChange = (e) => {
      setLastview(e)
      localStorage.setItem("lastView", e)
   }

   const onSelectSlot = (e) => {
      dispatch(eventClearActive())
   }

   // cambiamos los estylos del evento del calendario, este callback recive sus parametros de calendar
   const eventStyleGetter = (event, start, end, isSelected) => {

      const style = {
         backgroundColor: '#367CF7',
         borderRadius: '0px',
         opacity: 0.8,
         display: "block",
         color: "#fff"
      }

      return style

   }

   return (
      <div className="calendar-screen">
         <NavBar></NavBar>

         <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            messages={messages}
            eventPropGetter={eventStyleGetter}
            onDoubleClickEvent={onDoubleClick}
            onSelectEvent={onSelect}
            onView={onViewChange}
            view={lastview}
            onSelectSlot={onSelectSlot}
            selectable={true}
            components={{
               event: CalendarEvent
            }}
         ></Calendar>

         {activeEvent && <DeleteEventFab></DeleteEventFab>}

         <AddNewFab></AddNewFab>

         <CalendarModal></CalendarModal>

      </div>
   )
}
