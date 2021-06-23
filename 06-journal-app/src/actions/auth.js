import { firebase, googleAuthProvider } from '../firebase/firebase-config'
import { type } from '../types/types';
import { startLoading, finishLoading } from './ui'

// importamos sw
import Swal from 'sweetalert2'

// cramos nuestro accion asyncrona
export const startLoginEmailPassword = (email, password) => {
    // reduc-thunk nos provee el dispatch en los parametros de callback que se ejecutara gracias ala configuracion que isimos en nuestro store de redux-thunbk
    return (dispatch) => {

        // aca puede ir fectch y todo tipo de request o peticion, tambien dispatch de otras acciones

        dispatch(startLoading())

        // setTimeout(() => {
        // una vez resuelto la funcion o peticion asyncrona usamos nuestro dispatch pasandole en este caso nuestras credenciales que no autenticampos

        //     dispatch(login(123, 'jeyson'))
        // }, 3500);

        // llamamos la autenticacion de firebase
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {

                dispatch(finishLoading())

                dispatch(
                    login(user.uid, user.displayName)
                )
            })
            .catch(error => {
                console.log(error)
                Swal.fire('Error', error.message, 'error')
            })
    }
}

// accion para registrar datos en firebase con las funciones que nos da la biblioteca
export const startRegisterWithEmailPasswordName = (email, password, name) => {
    // retornamos un callback para tener el dispatch gracias al thunk
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {

                // utilizamos una funcion del objeto user que nos regresa despues de crear el usuario en firebase, para poder ponerle un nombre o imagen pero hay que pasarle siguiendo el mismo key del objeto que viene en user
                await user.updateProfile({ displayName: name })

                // usamos este dispatch de login para ni bien se registra que se logee con los datos que nos da
                dispatch(
                    login(user.uid, user.displayName)
                )

                //al imprimir el user es que usamos el await para actualizar pero en si es el mismo objeto 
                // console.log(user)
            })
            .catch(error => {
                console.log(error)
                Swal.fire('Error', error.message, 'error')
            })
    }
}

// creamos nuestra conexion accion de login de google
export const startGoogleLogin = () => {
    return (dispatch) => {

        // esto es una promesa el cual despues de autenticarnos con google nos devuelve un obejto con un monton de propiedades
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))
            })
    }
}

export const login = (uid, displayName) => ({
    // retornamos de manera defrente el objeto de nuestro action que le devemos pasar
    type: type.login,
    payload: {
        uid,
        displayName
    }
}
)

// creamos la accion asyncrona ya que usaremos firebase para el logout y la otra accion es el logout con esto borramos el uid y displayname del store
export const startLogout = () => {
    return async (dispatch) => { //gracias a thunk usamos este callback
        await firebase.auth().signOut()

        dispatch(logout())
    }
}

export const logout = () => ({
    type: type.logout
})
