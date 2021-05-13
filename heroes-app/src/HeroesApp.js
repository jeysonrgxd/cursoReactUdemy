import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './routers/AppRouter'

// creamos una inicializacion para pasarselo anuestro inical state
//(y asi obtenemos nuestro estado inicial de nuestra aplicacion)
const init = () => {
    return JSON.parse(localStorage.getItem("user")) || { logged: false } 
}

export const HeroesApp = () => {
    // creamos un reducer el cual le pasaremos nuestra funcion de reducer pura para 
    //el manejo de aciones y devolvimiento de estado
    // esto es para saber cuando nos logeamos y cuando no
    const [user, dispatch] = useReducer(authReducer, {}, init)

    // usamos el useEffect para poder grabar el usuario cuando la variable user el cual 
    // nos devuelve el reducer cambia, asi para poder grabar en el local storage
    useEffect(() => {
        localStorage.setItem("user",JSON.stringify(user))
    }, [user])

    return (
        // envolvemos nuestra app con el context para pasarle informacion a todo nuestro componentes
        // distribueremos nuestro usuario y el dispatch
        <AuthContext.Provider value={{ user, dispatch }}>
            <AppRouter></AppRouter>
        </AuthContext.Provider>
    )
}
