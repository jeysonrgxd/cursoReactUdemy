// contendra todos nuestros reducers y es el que sera exportado y usado en el store

import { combineReducers } from 'redux'
import { uiReducer } from './uiReducers'

export const rootReducers = combineReducers({
   // recordar que aca solo estamos declarando como es que se vera en nuestro arbol de estados
   ui: uiReducer
})