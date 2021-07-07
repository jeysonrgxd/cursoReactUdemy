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
import { useState } from 'react';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {

   const dispatch = useDispatch()

   // creamos los estados para el loading (cuando termine de loagear a firebase mediante el useEffect), el otro es si estamos logeados para proteger nuestra rutas y no se muestre asta logearnos
   const [checking, setChecking] = useState(true)

   const [isLoggedIn, setIsLoggedIn] = useState(false)


   // cuando el estado cambia usamos useEffect para invoca la funcion de firebase para poder persistir el login si es que lo iso y lo volvio a recargar
   useEffect(() => {
      // cuando se cambia el estado de la utenticacion se dispara esta funcion

      firebase.auth().onAuthStateChanged(async (user) => {

         if (user?.uid) { //esta validacion es para no hacer doble id

            dispatch(login(user.uid, user.displayName))

            setIsLoggedIn(true) //estamos logeados

            // const notas = await loadNotes(user.uid) // cargamos las notas pasandole el uid

            // dispatch(setNotes(notas))

            // usamos esta manera ya que en los componentes solo deve haver dispatch mas no peticiones eso lo deve hacer una accion
            dispatch(startLoadingNotes(user.uid)) //creamos una accion asyncrona de redux con thunk y se lo pasamos a este dispatch


         } else {
            setIsLoggedIn(false)//no estamos logeados
         }
         // termino de cargar la autenticacion
         setChecking(false)
      })
   }, [dispatch, setChecking, setIsLoggedIn])

   const componentJounal = (props) => {
      console.log(props)
      return isLoggedIn ? (<JournalScreen></JournalScreen>) : (<Redirect to="/auth/login"></Redirect>)
   }

   // creamos un return condicional para poner el loader
   if (checking) {
      return (
         <h2>Loading....</h2>
      )
   }

   return (
      <Router>
         <div>
            <Switch>
               {/* <Route path="/auth" component={() => (<AuthRouter isLoggedIn={isLoggedIn}></AuthRouter>)}></Route> */}
               <Route path="/auth">
                  <AuthRouter isLoggedIn={isLoggedIn}></AuthRouter>
               </Route>
               <Route exact path="/"
                  component={componentJounal}>
               </Route>

               {/* si es ninguna de las rutas declaradas entonses redirigimos al login */}

               <Redirect to="/auth/login"></Redirect>
            </Switch>
         </div>

      </Router>
   )
}
