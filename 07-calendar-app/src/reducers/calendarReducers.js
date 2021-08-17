import moment from 'moment';
import { types } from '../types/types';

const initialState = {
   events: [
      {
         title: "Cumpleaños del jefe",
         start: moment().add(2, 'hours').toDate(),
         end: moment().add(4, 'hours').toDate(),
         bgcolor: '#a10303',
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

      case types.eventSetActive:
         return {
            ...state,
            activeEvent: action.payload
         }

      default:
         return state;
   }
}