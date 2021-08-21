import moment from 'moment';
import { types } from '../types/types';

const initialState = {
   events: [
      {
         id: new Date().getTime(),
         title: "Cumpleaños del jefe",
         start: moment().add(2, 'hours').toDate(),
         end: moment().add(4, 'hours').toDate(),
         bgcolor: '#a10303',
         notes: 'comprar pastes',
         user: {
            _id: "2H3NFI3NDKSDKS",
            name: "Jeyson"
         }

      }
   ],
   activeEvent: null

};

export const calendarReducer = (state = initialState, action) => {

   switch (action.type) {

      case types.eventAddNew:
         state.events.push(action.payload)
         return state

      case types.eventSetActive:
         return {
            ...state,
            activeEvent: action.payload
         }

      case types.eventClearActive:
         return {
            ...state,
            activeEvent: null
         }
      case types.eventUpdate:
         return {
            ...state,
            events: state.events.map(ev => (ev.id === action.payload.id) ? action.payload : ev)
         }

      case types.eventDelete:
         return {
            ...state,
            events: state.events.filter(event => event.id !== state.activeEvent.id),
            activeEvent: null
         }

      default:
         return state;
   }
}