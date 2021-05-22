import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { LoginScreen } from '../components/auth/LoginScreen'
import { RegisterScreen } from '../components/auth/RegisterScreen'

export const AuthRouter = () => {
   return (
      <div className="auth__main">
         <div class="auth__box-contain">
            <Switch>
               
               <Route exact path="/auth/login" component={LoginScreen}></Route>
               <Route exact path="/auth/register" component={RegisterScreen}></Route>

               {/* si no son la demas rutas entonses */}
               <Redirect to="/auth/login"></Redirect>
            </Switch>
         </div>
      </div>
   )
}
