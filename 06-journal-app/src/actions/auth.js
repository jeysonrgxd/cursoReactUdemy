import { firebase, googleAuthProvider } from '../firebase/firebase-config'
import { type } from '../types/types';

// cramos nuestro accion asyncrona
export const startLoginEmailPassword = (email, password) => {
    // reduc-thunk nos provee el dispatch en los parametros de callback que se ejecutara gracias ala configuracion que isimos en nuestro store de redux-thunbk
    return (dispatch) => {

        // aca puede ir fectch y todo tipo de request o peticion, tambien dispatch de otras acciones

        setTimeout(() => {
            // una vez resuelto la funcion o peticion asyncrona usamos nuestro dispatch pasandole en este caso nuestras credenciales que no autenticampos

            dispatch(login(123, 'jeyson'))
        }, 3500);
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