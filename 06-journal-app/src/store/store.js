// configuramos nuestro estore para pasarselo a nuestro componente de react-redux que en globara todo nuestra app para tener acceso a datos en cualquier componente hijo

import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { authReducer } from '../reducers/authReducer'
import { uiReducer } from '../reducers/uiReducer';

// importamos esta libreria para hacer acciones asyncronas y desplegar el dispatch
import thunk from 'redux-thunk'

// esto es para poder activar las opciones de redux en la consola del navegador y tambien usar middleware
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// creamos nuestro contenedor de reducers el cual podemos aumentarle mas reducer que queramos y pasarselo despues a createStore
// aveses es tambien llamado como rootReducer
const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer
})

// forma sin acciones acyncronas, sin usar composeEnhancers
// // creamos el store pasandole los reducers
// export const store = createStore(
//     reducers, /* preloadedState, */
//     // activamos esto para poder trabajar con la herramiento de desarrollo en consola de la web
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// creamos el store pasandole los reducers

// usamos esta forma para poder usar acciones asyncronas y usando composeEnhancers
export const store = createStore(
    reducers, /* preloadedState, */
    composeEnhancers(
        applyMiddleware(thunk)
    )
);
