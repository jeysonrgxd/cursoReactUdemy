import React from 'react'

import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
} from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';

// importamos los componentes


export const AppRouter = () => {
   return (
      <Router>
         <div>
            {/* con esto navegamos en la url Este es el que cambia de pantalla */}
            <Switch>
               <Route exact path="/login" component={LoginScreen}></Route>
               <Route exact path="/" component={CalendarScreen}></Route>
            </Switch>

            {/* utilizamos un redirect al principal si no existe una url definida por nosotros */}
            <Redirect to="/"></Redirect>
         </div>
      </Router>
   )
}
