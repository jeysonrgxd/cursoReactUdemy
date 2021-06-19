import React, { useEffect } from 'react'
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
} from "react-router-dom";

import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

import { firebase } from '../firebase/firebase-config'
import { login } from '../actions/auth';
import { useDispatch } from 'react-redux';

export const AppRouter = () => {

   const dispatch = useDispatch()

   // cuando el estado cambia usamos useEffect para invoca la funcion de firebase para poder persistir el login si es que lo iso y lo volvio a recargar
   useEffect(() => {
      // cuando se cambia el estado de la utenticacion se dispara esta funcion

      firebase.auth().onAuthStateChanged((user) => {

         if (user?.uid) {
            dispatch(login(user.uid, user.displayName))
         }
      })
   }, [dispatch])


   return (
      <Router>
         <div>
            <Switch>
               <Route path="/auth" component={AuthRouter}></Route>
               <Route exact path="/" component={JournalScreen}></Route>

               {/* si es ninguna de las rutas declaradas entonses redirigimos al login */}

               <Redirect to="/auth/login"></Redirect>
            </Switch>
         </div>

      </Router>
   )
}
