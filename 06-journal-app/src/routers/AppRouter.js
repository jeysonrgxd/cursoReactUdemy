import React from 'react'
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
 } from "react-router-dom";

import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
   return (
      <Router>
         <div>
            <Switch>
               <Route path="/auth" component={AuthRouter}></Route>
               <Route exact path="/" component={JournalScreen}></Route>

               {/* si es ninguna de las rutas declaradas entonses redirigimos al login */}

               <Redirect to = "/auth/login"></Redirect>
            </Switch>
         </div>
         
      </Router>
   )
}
