// Router principal
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

// import { Navbar } from '../components/ui/NavBar';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                {/* no quiero que se muestre en el login este navbar */}
                {/* <Navbar></Navbar> */}

                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}


                <Switch>
                    <Route exact path="/login" component={LoginScreen}></Route>
                    {/* Enviamos otro sistema de rutas usando un function component que tiene un switch 
                        sin un Router ya que ya lo tenemos aqui , cuando ponemos otro router tenemos
                        que hacerlo son el exact */}
                    <Route path="/" component={DashboardRoutes}></Route>
                </Switch>

            </div>
        </Router>
    )
}
