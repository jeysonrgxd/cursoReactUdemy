import React from 'react'
import { Redirect, Route } from 'react-router'
import PropTypes from 'prop-types'

export const PrivateRoute = ({
    // usamos destructuacion para obtenor los valores que queremos cojer del props
    isAuthenticated,
    component: Component,
    // lo demas parametros caeran en rest (path ,to, etc) y todos loq ue viene por defecto en los props
    ...rest

}) => {

    localStorage.setItem("lastPath",rest.location.pathname)

    return (
        //boy aregresar una ruta, despues regresamos todo los parametros rest
        <Route {...rest}
            // retornamos el componente de manera condicional, y ala vez usamos el callback el cual poseo todos los argumentos en los props
            component={(props) => (
                (isAuthenticated)
                    ? (<Component {...props}></Component>)
                    : (<Redirect to="/login"></Redirect>)
            )}
        ></Route>
    )
}

// asemos que nuestros parametro sean requerido sino que nos bote un error
PrivateRoute.propTypes ={
    isAuthenticated : PropTypes.bool.isRequired,
    component :PropTypes.func.isRequired
}