import { createStore, combineReducers } from 'redux'
import { authReducer } from '../reducers/authReducer'

// creamos nuestro contenedor de reducers el cual podemos aumentarle mas reducer que queramos y pasarselo despues a createStore
const reducers = combineReducers({
    auth: authReducer
})


export const store = createStore(
    reducers, /* preloadedState, */
    // activamos esto para poder trabajar con la herramiento de desarrollo en consola de la web
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
