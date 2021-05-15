// Router principal
import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

// import { Navbar } from '../components/ui/NavBar';

export const AppRouter = () => {
    const {user} = useContext(AuthContext)

    return (
        <Router>
            <div>
                {/* no quiero que se muestre en el login este navbar */}
                {/* <Navbar></Navbar> */}

                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}


                <Switch>
                    {/* <Route exact path="/login" component={LoginScreen}></Route> */}

                    <PublicRoute
                        exact 
                        isAuthenticated = {user.logged}
                        path="/login" 
                        component={LoginScreen}
                    ></PublicRoute>
                    
                    {/* Enviamos otro sistema de rutas usando un function component que tiene un switch 
                        sin un Router ya que ya lo tenemos aqui , cuando ponemos otro router tenemos
                        que hacerlo son el exact */}
                    {/* <Route path="/" component={DashboardRoutes}></Route> */}
                    
                    <PrivateRoute
                        isAuthenticated = {user.logged}
                        path="/"
                        component = {DashboardRoutes}
                    ></PrivateRoute>

                </Switch>

            </div>
        </Router>
    )
}
