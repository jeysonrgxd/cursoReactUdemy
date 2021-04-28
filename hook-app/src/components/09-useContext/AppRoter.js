import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'

import { AboutScreen } from './AboutScreen'
import { HomeScreen } from './HomeScreen'
import { LoginScreen } from './LoginScreen'
import { NavBar } from './NavBar'

// este componente se encargara de mostrar y trabajar las rutas

export const AppRoter = () => {
    return (
        <Router>
            <div>
                <NavBar></NavBar>
                {/* Ponemos un switch para especificar la ruta con el componente a cargar */}
                <Switch>
                    <Route exact path="/" component={HomeScreen}></Route>
                    <Route exact path="/about" component={AboutScreen}></Route>
                    <Route exact path="/login" component={LoginScreen}></Route>
                </Switch>
            </div>
        </Router>
    )
}
