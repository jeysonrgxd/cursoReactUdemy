import React from 'react'
import { Redirect, Route } from 'react-router'
import PropTypes from 'prop-types'

//la ventaja de crear un component de ruta publica y usar el isAuthenticated  
//es que cuando ya estamos logeado y accidentalmente le damos atras si no aprecionado 
//el logut no le permitara salir

export const PublicRoute = ({
    isAuthenticated,
    component:Component,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            component = {(props)=>(
                (!isAuthenticated)
                ? (<Component {...props}></Component>)
                : (<Redirect to="/"></Redirect>)
                
            )}
        ></Route>
    )
}

PublicRoute.propTypes = {
    component:PropTypes.func.isRequired
}
